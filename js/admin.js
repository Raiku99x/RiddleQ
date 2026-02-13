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
  const folderSets   = FolderSets.getAll();
  const uploadedSets = UploadedSets.getAll();
  const allSets = [...folderSets, ...uploadedSets];
  
  // Extract unique categories from sets
  const categories = {};
  allSets.forEach(set => {
    const cat = set.category || 'General';
    if (!categories[cat]) {
      categories[cat] = {
        name: cat,
        count: 0,
        icon: getCategoryIcon(cat)
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
        <div class="empty-state-icon">📭</div>
        <h3>No question sets found</h3>
        <p>Add a set to <code>questions/sets.js</code> — see README for instructions</p>
      </div>`;
    return;
  }
  
  container.innerHTML = `
    <div class="sets-grid">
      ${cats.map(cat => `
        <div class="set-card category-card" onclick="selectCategory('${esc(cat.name)}')">
          <div class="set-card-icon">${cat.icon}</div>
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

function getCategoryIcon(category) {
  const icons = {
    'Math': '🔢',
    'Mathematics': '🔢',
    'Science': '🔬',
    'History': '📜',
    'Geography': '🌍',
    'English': '📚',
    'Literature': '📖',
    'Programming': '💻',
    'Computer Science': '🖥️',
    'Physics': '⚡',
    'Chemistry': '🧪',
    'Biology': '🧬',
    'Music': '🎵',
    'Art': '🎨',
    'Sports': '⚽',
    'General': '📝',
    'Trivia': '🎯',
    'Language': '🗣️',
    'Economics': '💰',
    'Business': '💼'
  };
  return icons[category] || '📘';
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function loadDashboard(categoryName = null) {
  showView('dashboard');
  
  if (categoryName) currentCategory = categoryName;
  if (!currentCategory) currentCategory = 'General';
  
  const folderSets   = FolderSets.getAll();
  const uploadedSets = UploadedSets.getAll();
  
  // Filter sets by category
  const filteredFolder = folderSets.filter(s => (s.category || 'General') === currentCategory);
  const filteredUploaded = uploadedSets.filter(s => (s.category || 'General') === currentCategory);
  
  // Update header
  document.getElementById('categoryTitle').textContent = currentCategory;
  document.getElementById('categoryDesc').innerHTML = `
    ${filteredFolder.length + filteredUploaded.length} quiz set${(filteredFolder.length + filteredUploaded.length) !== 1 ? 's' : ''} in this category
  `;
  
  renderSets(filteredFolder, filteredUploaded);
}

function renderSets(folderSets, uploadedSets) {
  const history   = History.getAll();
  const container = document.getElementById('setsContainer');

  if (!folderSets.length && !uploadedSets.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📭</div>
        <h3>No question sets found</h3>
        <p>Add a set to <code>questions/sets.js</code> — see README for instructions</p>
      </div>`;
    return;
  }

  let html = '';

  // ── Folder sets (permanent, from sets.js) ────────────────────────────────
  if (folderSets.length) {
    html += `<div class="section-label">📁 Question Sets <span>${folderSets.length} set${folderSets.length !== 1 ? 's' : ''}</span></div>`;
    html += '<div class="sets-grid">';
    folderSets.forEach(s => html += cardHTML(s, history));
    html += '</div>';
  }

  // ── Uploaded sets (browser localStorage) ─────────────────────────────────
  if (uploadedSets.length) {
    if (folderSets.length) html += '<hr class="divider">';
    html += `<div class="section-label">📤 Browser Uploads <span>${uploadedSets.length} set${uploadedSets.length !== 1 ? 's' : ''}</span></div>`;
    html += `
      <div class="banner banner-warning" style="margin-bottom:16px">
        <span class="banner-icon">⚠️</span>
        <div>
          <strong>These sets are stored in your browser only</strong>
          They will disappear if you clear browser data or switch devices.
          For permanent sets, add them to <code style="background:rgba(0,0,0,.3);padding:1px 5px;border-radius:4px">questions/sets.js</code> instead.
        </div>
      </div>`;
    html += '<div class="sets-grid">';
    uploadedSets.forEach(s => html += cardHTML(s, history));
    html += '</div>';
  }

  container.innerHTML = html;
}

function cardHTML(s, history) {
  const attempts = history.filter(h => h.setId === s.id);
  const best     = attempts.length ? Math.max(...attempts.map(a => a.percentage)) : null;
  const isFolder = s.source === 'folder';

  return `
    <div class="set-card" onclick="goQuiz('${esc(s.id)}')">
      <div class="set-card-icon">${setEmoji(s.name)}</div>
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
        ${isFolder
          ? `<span class="folder-badge">📁 permanent</span>`
          : `<button class="btn btn-ghost btn-icon btn-sm set-card-delete btn-danger"
               onclick="event.stopPropagation(); askDelete('${esc(s.id)}', '${esc(s.name)}')"
               title="Delete">🗑</button>`
        }
      </div>
    </div>`;
}

function goQuiz(setId) {
  window.location.href = `index.html?set=${encodeURIComponent(setId)}`;
}

// ─── UPLOAD MODAL ─────────────────────────────────────────────────────────────
let _pendingQuestions = null;

function openUploadModal() {
  _pendingQuestions = null;
  document.getElementById('setNameInput').value        = '';
  document.getElementById('dropZoneFile').textContent  = '';
  document.getElementById('dropZoneError').textContent = '';
  document.getElementById('fileInput').value           = '';
  document.getElementById('uploadModal').classList.add('open');
}
function closeUploadModal() {
  document.getElementById('uploadModal').classList.remove('open');
}

function handleFile(file) {
  const errEl = document.getElementById('dropZoneError');
  const okEl  = document.getElementById('dropZoneFile');
  errEl.textContent = '';
  okEl.textContent  = '';

  if (!file.name.toLowerCase().endsWith('.json')) {
    errEl.textContent = '✗ Only .json files are accepted';
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!Array.isArray(data) || !data.length) throw new Error('Array is empty');
      if (!data[0].question || !Array.isArray(data[0].options)) throw new Error('Missing question or options fields');
      _pendingQuestions = data.map((q, i) => ({
        id: i, question: q.question, options: q.options,
        answer: typeof q.answer === 'number' ? q.answer : 0,
        explanation: q.explanation || '',
      }));
      okEl.textContent = `✓ ${file.name} — ${data.length} questions ready`;
      if (!document.getElementById('setNameInput').value.trim()) {
        document.getElementById('setNameInput').value =
          file.name.replace(/\.json$/i, '').replace(/[-_]/g, ' ');
      }
    } catch (err) {
      errEl.textContent = '✗ Invalid JSON: ' + err.message;
      _pendingQuestions = null;
    }
  };
  reader.readAsText(file);
}

function submitUpload() {
  const name = document.getElementById('setNameInput').value.trim();
  if (!name)              { showToast('Please enter a name for this set', 'error'); return; }
  if (!_pendingQuestions) { showToast('Please upload a valid JSON file', 'error'); return; }
  UploadedSets.add({
    id: 'upload__' + Date.now(), name,
    source: 'upload', questions: _pendingQuestions,
    createdAt: new Date().toISOString(),
  });
  closeUploadModal();
  loadDashboard();
  showToast(`"${name}" saved — ${_pendingQuestions.length} questions`, 'success');
}

// ─── DELETE (uploaded only) ───────────────────────────────────────────────────
let _deleteId = null;
function askDelete(id, name) {
  _deleteId = id;
  document.getElementById('deleteMsg').textContent = `Remove "${name}" from browser storage? This cannot be undone.`;
  document.getElementById('deleteModal').classList.add('open');
}
function closeDeleteModal() {
  document.getElementById('deleteModal').classList.remove('open');
  _deleteId = null;
}
function confirmDelete() {
  UploadedSets.remove(_deleteId);
  closeDeleteModal();
  loadDashboard();
  showToast('Set removed from browser storage');
}

// ─── HISTORY ─────────────────────────────────────────────────────────────────
function renderHistory() {
  const history = History.getAll();
  const el      = document.getElementById('historyContent');

  if (!history.length) {
    el.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📊</div>
        <h3>No attempts yet</h3>
        <p>Complete a quiz to see your history here</p>
        <button class="btn btn-primary" onclick="goHome()">Dashboard</button>
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
          ${setEmoji(setName)} ${esc(setName)}
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
  html += `<button class="btn btn-ghost btn-sm btn-danger" style="margin-top:20px" onclick="clearHistory()">🗑 Clear All History</button>`;
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
  const dz = document.getElementById('dropZone');
  const fi = document.getElementById('fileInput');
  if (dz && fi) {
    dz.addEventListener('click', () => fi.click());
    dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('dragover'); });
    dz.addEventListener('dragleave', () => dz.classList.remove('dragover'));
    dz.addEventListener('drop', e => { e.preventDefault(); dz.classList.remove('dragover'); if(e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); });
    fi.addEventListener('change', e => { if(e.target.files[0]) handleFile(e.target.files[0]); });
  }
  document.getElementById('uploadModal')?.addEventListener('click', function(e) { if(e.target===this) closeUploadModal(); });
  document.getElementById('deleteModal')?.addEventListener('click', function(e) { if(e.target===this) closeDeleteModal(); });

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
