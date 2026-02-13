// ─── ROUTING ──────────────────────────────────────────────────────────────────
let currentCategory = null;

function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + id)?.classList.add('active');
  window.scrollTo(0, 0);
}
function goHistory() { renderHistory(); showView('history'); }
function goToCategories() { loadCategories(); }
function goHome()    { loadDashboard(); }

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
function loadCategories() {
  showView('categories');
  const folderSets = FolderSets.getAll();
  const allSets = [...folderSets];
  
  // Extract unique categories from sets
  const categories = {};
  allSets.forEach(set => {
    const cat = set.category || 'General';
    if (!categories[cat]) {
      categories[cat] = {
        name: cat,
        count: 0
      };
    }
    categories[cat].count++;
  });
  
  renderCategories(categories);
}

function renderCategories(categories) {
  const container = document.getElementById('categoriesContainer');
  const cats = Object.values(categories);
  
  if (cats.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"></div>
        <h3>No question sets found</h3>
        <p>Add a set to <code>questions/sets.js</code> — see README for instructions</p>
      </div>`;
    return;
  }
  
  container.innerHTML = `
    <div class="sets-grid">
      ${cats.map(cat => `
        <div class="set-card category-card" onclick="selectCategory('${esc(cat.name)}')">
          <h3>${esc(cat.name)}</h3>
          <div class="set-card-meta">
            ${cat.count} quiz set${cat.count !== 1 ? 's' : ''} available
          </div>
          <div class="set-card-footer">
            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); selectCategory('${esc(cat.name)}')">
              View Sets →
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function selectCategory(categoryName) {
  currentCategory = categoryName;
  loadDashboard(categoryName);
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function loadDashboard(categoryName = null) {
  showView('dashboard');
  
  if (categoryName) currentCategory = categoryName;
  if (!currentCategory) currentCategory = 'General';
  
  const folderSets = FolderSets.getAll();
  
  // Filter sets by category
  const filteredFolder = folderSets.filter(s => (s.category || 'General') === currentCategory);
  
  // Update header
  document.getElementById('categoryTitle').textContent = currentCategory;
  document.getElementById('categoryDesc').innerHTML = `
    ${filteredFolder.length} quiz set${filteredFolder.length !== 1 ? 's' : ''} in this category
  `;
  
  renderSets(filteredFolder);
}

function renderSets(folderSets) {
  const history   = History.getAll();
  const container = document.getElementById('setsContainer');

  if (!folderSets.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"></div>
        <h3>No question sets found</h3>
        <p>Add a set to <code>questions/sets.js</code> — see README for instructions</p>
      </div>`;
    return;
  }

  let html = '';

  // ── Folder sets (permanent, from sets.js) ────────────────────────────────
  if (folderSets.length) {
    html += '<div class="sets-grid">';
    folderSets.forEach(s => html += cardHTML(s, history));
    html += '</div>';
  }

  container.innerHTML = html;
}

function cardHTML(s, history) {
  const attempts = history.filter(h => h.setId === s.id);
  const best     = attempts.length ? Math.max(...attempts.map(a => a.percentage)) : null;

  return `
    <div class="set-card" onclick="goQuiz('${esc(s.id)}')">
      <h3>${esc(s.name)}</h3>
      <div class="set-card-meta">
        ${s.questions.length} question${s.questions.length !== 1 ? 's' : ''}
        ${attempts.length ? ` · ${attempts.length} attempt${attempts.length !== 1 ? 's' : ''}` : ''}
        ${best !== null ? ` · Best: ${best}%` : ''}
        ${s.description ? `<br><span style="font-size:11px">${esc(s.description)}</span>` : ''}
      </div>
      <div class="set-card-footer">
        <button class="btn btn-primary btn-sm"
          onclick="event.stopPropagation(); goQuiz('${esc(s.id)}')">
          Start Quiz
        </button>
      </div>
    </div>`;
}

function goQuiz(setId) {
  window.location.href = `index.html?set=${encodeURIComponent(setId)}`;
}

// ─── HISTORY ─────────────────────────────────────────────────────────────────
function renderHistory() {
  const history = History.getAll();
  const el      = document.getElementById('historyContent');

  if (!history.length) {
    el.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"></div>
        <h3>No attempts yet</h3>
        <p>Complete a quiz to see your history here</p>
        <button class="btn btn-primary" onclick="goToCategories()">Dashboard</button>
      </div>`;
    return;
  }

  const setNames = [...new Set(history.map(h => h.setName))];
  let html = '';
  setNames.forEach((setName, idx) => {
    const rows = history.filter(h => h.setName === setName);
    const best = Math.max(...rows.map(r => r.percentage));
    const avg  = Math.round(rows.reduce((a, r) => a + r.percentage, 0) / rows.length);
    html += `
      <div style="margin-top:${idx ? 32 : 0}px">
        <div class="section-label">
          ${esc(setName)}
          <span>Best ${best}% · Avg ${avg}%</span>
        </div>
        <div style="border:1px solid var(--border);border-radius:var(--r);overflow:hidden">
          <table class="hist-table">
            <thead><tr><th>#</th><th>Date</th><th>Score</th><th>Result</th><th>Time</th></tr></thead>
            <tbody>
              ${rows.map((r, i) => {
                const d   = new Date(r.date);
                const dt  = d.toLocaleDateString('en-US', {month:'short',day:'numeric',year:'numeric'});
                const tm  = d.toLocaleTimeString('en-US', {hour:'2-digit',minute:'2-digit'});
                const dur = r.duration
                  ? (Math.floor(r.duration/60) > 0 ? Math.floor(r.duration/60)+'m ' : '') + (r.duration%60)+'s'
                  : '—';
                const cls = r.percentage>=80?'b-green':r.percentage>=50?'b-yellow':'b-red';
                return `<tr>
                  <td style="color:var(--muted)">${i+1}</td>
                  <td>${dt} <span style="color:var(--muted);font-size:12px">${tm}</span></td>
                  <td>${r.score}/${r.total}</td>
                  <td><span class="badge ${cls}">${r.percentage}%</span></td>
                  <td style="color:var(--muted)">${dur}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  });
  html += `<button class="btn btn-ghost btn-sm btn-danger" style="margin-top:20px" onclick="clearHistory()">Clear All History</button>`;
  el.innerHTML = html;
}

function clearHistory() {
  if (!confirm('Clear all history? This cannot be undone.')) return;
  History.clear();
  renderHistory();
  showToast('History cleared');
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const p = new URLSearchParams(window.location.search);
  if (p.get('view') === 'history') { 
    renderHistory(); 
    showView('history'); 
  } else if (p.get('category')) {
    // If category is in URL, go directly to that category
    selectCategory(decodeURIComponent(p.get('category')));
  } else {
    // Default: show categories first
    loadCategories();
  }
});
