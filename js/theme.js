// ─── THEME ────────────────────────────────────────────────────────────────────
const Theme = {
  STORAGE_KEY: 'rq_theme',

  get() {
    return localStorage.getItem(this.STORAGE_KEY) || 'dark';
  },

  set(theme) {
    localStorage.setItem(this.STORAGE_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
    this._updateButtons(theme);
  },

  toggle() {
    const next = this.get() === 'dark' ? 'light' : 'dark';
    this.set(next);
  },

  init() {
    const saved = this.get();
    document.documentElement.setAttribute('data-theme', saved);
    // Defer button update until DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this._updateButtons(saved));
    } else {
      this._updateButtons(saved);
    }
  },

  _updateButtons(theme) {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });
  },
};

// Init immediately so there's no flash of wrong theme
Theme.init();
