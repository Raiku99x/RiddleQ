const KEYS = ['A','B','C','D','E','F'];

const Q = {
  setId: null, setName: null,
  list: [], idx: 0, answers: [], t0: null,
};

function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + id)?.classList.add('active');
  window.scrollTo(0, 0);
}

function goHome()    { window.location.href = 'admin.html'; }
function goHistory() { window.location.href = 'admin.html?view=history'; }
function retake()    { window.location.href = `index.html?set=${encodeURIComponent(Q.setId)}`; }

// ─── EXIT QUIZ MODAL ──────────────────────────────────────────────────────────
function exitQuiz() {
  const modal = document.getElementById('exitModal');
  modal.classList.add('open');
  // Prevent scrolling when modal is open
  document.body.style.overflow = 'hidden';
}

function closeExitModal() {
  const modal = document.getElementById('exitModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function confirmExit() {
  closeExitModal();
  goHome();
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('exitModal');
  if (modal && e.target === modal) {
    closeExitModal();
  }
});

// ─── FULLSCREEN ───────────────────────────────────────────────────────────────
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      showToast('Fullscreen not supported', 'error');
    });
  } else {
    document.exitFullscreen();
  }
}

// Update fullscreen button icon when fullscreen state changes
document.addEventListener('fullscreenchange', () => {
  const btn = document.getElementById('fullscreenBtn');
  if (btn) {
    btn.textContent = document.fullscreenElement ? '⛶' : '⛶';
    btn.title = document.fullscreenElement ? 'Exit Fullscreen' : 'Toggle Fullscreen';
  }
});

// ─── TOGGLE PROGRESS BOXES (MOBILE) ───────────────────────────────────────────
function toggleProgressBoxes() {
  // Only works on mobile (<=768px)
  if (window.innerWidth <= 768) {
    const wrapper = document.getElementById('progressWrapper');
    wrapper.classList.toggle('collapsed');
    // Update arrow direction
    const toggle = wrapper.querySelector('.progress-boxes-toggle');
    if (wrapper.classList.contains('collapsed')) {
      toggle.textContent = '▼';
    } else {
      toggle.textContent = '▲';
    }
  }
}

// Auto-expand on mobile by default (changed from collapsed)
function initProgressBoxes() {
  if (window.innerWidth <= 768) {
    const wrapper = document.getElementById('progressWrapper');
    wrapper.classList.remove('collapsed'); // Expanded by default
    const toggle = wrapper.querySelector('.progress-boxes-toggle');
    toggle.textContent = '▲'; // Up arrow when expanded
  }
}

// ─── START ────────────────────────────────────────────────────────────────────
function startQuiz(setId) {
  const set = resolveSet(setId);   // synchronous — no fetch
  if (!set) {
    document.body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;gap:16px;color:#8b949e;font-family:sans-serif">
        <div style="font-size:40px">⚠️</div>
        <div>Set not found. It may have been removed.</div>
        <a href="admin.html" style="color:#58a6ff">← Back to Dashboard</a>
      </div>`;
    return;
  }

  Q.setId   = setId;
  Q.setName = set.name;
  Q.list    = [...set.questions].sort(() => Math.random() - .5);
  Q.idx     = 0;
  Q.answers = [];
  Q.t0      = Date.now();

  document.getElementById('quizName').textContent = set.name;
  showView('quiz');
  initProgressBoxes(); // Initialize collapsed state on mobile
  renderProgressBoxes();
  renderQ();
}

// ─── PROGRESS BOXES ──────────────────────────────────────────────────────────
function renderProgressBoxes() {
  // Render boxes for both mobile and desktop containers
  const boxesHTML = Q.list.map((_, i) => 
    `<div class="progress-box" data-index="${i}" onclick="jumpToQuestion(${i})">${i + 1}</div>`
  ).join('');
  
  // Mobile container
  const mobileContainer = document.getElementById('progressBoxes');
  if (mobileContainer) {
    mobileContainer.innerHTML = boxesHTML;
  }
  
  // Desktop sidebar container
  const desktopContainer = document.getElementById('progressBoxesSidebar');
  if (desktopContainer) {
    desktopContainer.innerHTML = boxesHTML;
  }
  
  updateProgressBoxes();
}

function updateProgressBoxes() {
  const boxes = document.querySelectorAll('.progress-box');
  boxes.forEach((box, i) => {
    box.className = 'progress-box';
    
    const answer = Q.answers.find(a => a.idx === i);
    
    if (i === Q.idx) {
      box.classList.add('current');
    } else if (answer) {
      box.classList.add(answer.isCorrect ? 'correct' : 'wrong');
    } else {
      box.classList.add('unanswered');
    }
  });
}

function jumpToQuestion(targetIdx) {
  // Only allow jumping if the question has been answered
  const targetAnswer = Q.answers.find(a => a.idx === targetIdx);
  if (!targetAnswer && targetIdx !== Q.idx) {
    showToast('Please answer questions in order', 'error');
    return;
  }
  
  Q.idx = targetIdx;
  renderQ();
  updateProgressBoxes();
}

// ─── RENDER QUESTION ─────────────────────────────────────────────────────────
function renderQ() {
  const q = Q.list[Q.idx], total = Q.list.length;
  document.getElementById('counter').textContent   = `${Q.idx + 1} / ${total}`;
  document.getElementById('progFill').style.width  = `${(Q.idx / total) * 100}%`;
  document.getElementById('qText').textContent     = q.question;
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('expBox').innerHTML      = '';
  document.getElementById('optList').innerHTML     = q.options.map((o, i) => `
    <button class="opt" onclick="pick(${i})">
      <span class="opt-key">${KEYS[i]}</span>
      <span>${esc(o)}</span>
    </button>`).join('');
  updateProgressBoxes();
}

// ─── PICK ANSWER ─────────────────────────────────────────────────────────────
function pick(sel) {
  const q = Q.list[Q.idx], cor = q.answer;
  const btns = document.querySelectorAll('.opt');
  btns.forEach(b => b.disabled = true);
  btns[cor].classList.add('correct');
  if (sel !== cor) btns[sel].classList.add('wrong');
  else             btns[sel].classList.add('selected');
  Q.answers.push({ idx: Q.idx, selected: sel, isCorrect: sel === cor });
  
  // Update progress boxes immediately after answering
  updateProgressBoxes();
  
  if (q.explanation) {
    document.getElementById('expBox').innerHTML = `
      <div class="explanation"><strong>Explanation:</strong> ${esc(q.explanation)}</div>`;
  }
  document.getElementById('progFill').style.width = `${((Q.idx+1)/Q.list.length)*100}%`;
  const btn = document.getElementById('nextBtn');
  btn.textContent   = Q.idx === Q.list.length - 1 ? 'Finish →' : 'Next →';
  btn.style.display = 'inline-flex';
}

function nextQ() {
  Q.idx < Q.list.length - 1 ? (Q.idx++, renderQ()) : finishQuiz();
}

// ─── FINISH ──────────────────────────────────────────────────────────────────
function finishQuiz() {
  const duration = Math.round((Date.now() - Q.t0) / 1000);
  const score    = Q.answers.filter(a => a.isCorrect).length;
  const total    = Q.list.length;
  const pct      = Math.round((score / total) * 100);
  const entry    = {
    id: 'h__' + Date.now(), setId: Q.setId, setName: Q.setName,
    score, total, percentage: pct, duration, date: new Date().toISOString(),
    answers: Q.answers.map(a => ({
      question:      Q.list[a.idx].question,
      options:       Q.list[a.idx].options,
      correctAnswer: Q.list[a.idx].answer,
      chosen:        a.selected,
      isCorrect:     a.isCorrect,
      explanation:   Q.list[a.idx].explanation || '',
    })),
  };
  History.add(entry);
  renderResults(entry);
  showView('results');
}

// ─── RESULTS ─────────────────────────────────────────────────────────────────
function renderResults(e) {
  const { score, total, percentage: pct, duration, setName, answers } = e;
  const arc = document.getElementById('arc');
  arc.style.stroke = pct>=80?'#3fb950':pct>=50?'#d29922':'#f85149';
  arc.style.strokeDashoffset = 352;
  setTimeout(() => { arc.style.transition='stroke-dashoffset 1s ease'; arc.style.strokeDashoffset=352-(pct/100)*352; }, 80);
  document.getElementById('ringPct').textContent = pct + '%';
  const msgs = [[100,'Perfect!','Absolutely flawless!'],[80,'Excellent!',`${score}/${total} correct`],[60,'Good Job!',`${score}/${total} correct`],[40,'Keep Studying',`${score}/${total} correct`],[0,'Try Again!',`${score}/${total} correct`]];
  const [,title,sub] = msgs.find(([t])=>pct>=t);
  document.getElementById('resTitle').textContent = title;
  document.getElementById('resSub').textContent   = sub;
  document.getElementById('resSet').textContent   = setName;
  const mins=Math.floor(duration/60),secs=duration%60,time=mins?`${mins}m ${secs}s`:`${secs}s`;
  document.getElementById('statsRow').innerHTML = `
    <div class="stat"><div class="stat-n" style="color:var(--success)">${score}</div><div class="stat-l">Correct</div></div>
    <div class="stat"><div class="stat-n" style="color:var(--danger)">${total-score}</div><div class="stat-l">Incorrect</div></div>
    <div class="stat"><div class="stat-n">${time}</div><div class="stat-l">Time</div></div>`;
  document.getElementById('reviewList').innerHTML = answers.map((a,i) => `
    <div class="rev-item" id="rv${i}">
      <div class="rev-head" onclick="toggleRev(${i})">
        <span class="rev-status ${a.isCorrect?'ok':'fail'}">${a.isCorrect?'✓':'✗'}</span>
        <span class="rev-q">${esc(a.question)}</span>
        <span class="rev-chevron">▼</span>
      </div>
      <div class="rev-body">
        <div class="rev-ans ${a.isCorrect?'correct':'wrong'}">Your answer: <span>${KEYS[a.chosen]}. ${esc(a.options[a.chosen])}</span></div>
        ${!a.isCorrect?`<div class="rev-ans correct">Correct answer: <span>${KEYS[a.correctAnswer]}. ${esc(a.options[a.correctAnswer])}</span></div>`:''}
        ${a.explanation?`<div class="rev-exp">${esc(a.explanation)}</div>`:''}
      </div>
    </div>`).join('');
}

function toggleRev(i) { document.getElementById('rv'+i).classList.toggle('open'); }

// ─── INIT ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const setId = new URLSearchParams(window.location.search).get('set');
  if (!setId) { window.location.href = 'admin.html'; return; }
  startQuiz(decodeURIComponent(setId));
});

// Handle window resize to reset collapse state
window.addEventListener('resize', () => {
  const wrapper = document.getElementById('progressWrapper');
  if (wrapper) {
    if (window.innerWidth > 768) {
      // Desktop: remove collapsed class and hide mobile wrapper
      wrapper.classList.remove('collapsed');
    } else {
      // Mobile: keep expanded by default unless user collapsed it manually
      const toggle = wrapper.querySelector('.progress-boxes-toggle');
      if (wrapper.classList.contains('collapsed')) {
        toggle.textContent = '▼';
      } else {
        toggle.textContent = '▲';
      }
    }
  }
});
