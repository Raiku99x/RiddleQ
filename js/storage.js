// ─── FOLDER SETS (from questions/sets.js — loaded as a <script> tag) ──────────
// QUESTION_SETS is defined in questions/sets.js
// No fetch() needed — works locally AND on GitHub Pages.
const FolderSets = {
  getAll() {
    if (typeof QUESTION_SETS === 'undefined' || !Array.isArray(QUESTION_SETS)) {
      console.warn('[RiddlerQ] QUESTION_SETS not found. Check questions/sets.js is included.');
      return [];
    }
    return QUESTION_SETS.map(s => ({
      ...s,
      id:     'folder__' + s.id,
      source: 'folder',
      questions: s.questions.map((q, i) => ({
        id:          i,
        question:    q.question,
        options:     q.options,
        answer:      typeof q.answer === 'number' ? q.answer : 0,
        explanation: q.explanation || '',
      })),
    }));
  },

  findById(setId) {
    return this.getAll().find(s => s.id === setId) || null;
  },
};

// ─── UPLOADED SETS (localStorage — browser only, not permanent) ───────────────
const UploadedSets = {
  getAll()   { return JSON.parse(localStorage.getItem('rq_sets') || '[]'); },
  save(sets) { localStorage.setItem('rq_sets', JSON.stringify(sets)); },
  add(set)   { const s = this.getAll(); s.push(set); this.save(s); },
  remove(id) { this.save(this.getAll().filter(s => s.id !== id)); },
  findById(id) { return this.getAll().find(s => s.id === id) || null; },
};

// ─── SCORE HISTORY ────────────────────────────────────────────────────────────
const History = {
  getAll()    { return JSON.parse(localStorage.getItem('rq_history') || '[]'); },
  add(entry)  { const h = this.getAll(); h.unshift(entry); localStorage.setItem('rq_history', JSON.stringify(h)); },
  clear()     { localStorage.setItem('rq_history', '[]'); },
};

// ─── RESOLVE SET BY ID ────────────────────────────────────────────────────────
function resolveSet(setId) {
  if (setId.startsWith('folder__')) return FolderSets.findById(setId);
  return UploadedSets.findById(setId);
}

// ─── UTILITIES ────────────────────────────────────────────────────────────────
function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const SET_EMOJIS = ['📘','📗','📙','📕','🧪','🧬','🖥️','🎯','🌍','📐','🔬','⚡','🧮','🎲','📡','🏛️','🎵','🏆','🌐','🔭'];
function setEmoji(name) {
  let h = 0;
  for (const c of String(name)) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  return SET_EMOJIS[h % SET_EMOJIS.length];
}

let _toastTimer;
function showToast(msg, type = '') {
  const el = document.getElementById('toast');
  if (!el) return;
  el.innerHTML = (type === 'success' ? '✅ ' : type === 'error' ? '❌ ' : 'ℹ️ ') + msg;
  el.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 3500);
}
