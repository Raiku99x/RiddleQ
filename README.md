# RiddlerQ

A GitHub Pages quiz app. Works by double-clicking locally AND on GitHub Pages — no server, no backend.

---

## ➕ How to Add a New Question Set

Open **`questions/sets.js`** and add a new block to the `QUESTION_SETS` array:

```js
const QUESTION_SETS = [

  // existing sets...

  {
    id:          "calculus-101",       // unique, no spaces
    name:        "Calculus 101",
    description: "Derivatives, integrals, and limits",
    questions: [
      {
        question: "What is the derivative of sin(x)?",
        options: ["cos(x)", "-cos(x)", "tan(x)", "-sin(x)"],
        answer: 0,
        explanation: "The derivative of sin(x) is cos(x)."
      },
      // ... more questions
    ]
  },

];
```

That's it. Save the file, refresh — the set appears on the dashboard.

### Question fields

| Field | Required | Notes |
|---|---|---|
| `question` | ✅ | The question text |
| `options` | ✅ | Array of 2–6 answer choices |
| `answer` | ✅ | Index of the correct option (0 = first) |
| `explanation` | ❌ | Shown after answering — optional |

---

## 📁 Project Structure

```
quiz-app/
├── admin.html              ← Open this — Dashboard & History
├── index.html              ← Quiz & Results (opened automatically)
├── style.css
├── js/
│   ├── storage.js
│   ├── admin.js
│   └── quiz.js
└── questions/
    └── sets.js             ← ⬅ EDIT THIS to add/remove question sets
```

---

## 🚀 Deploy to GitHub Pages

1. Push all files to a GitHub repo
2. **Settings → Pages → Deploy from branch → main → / (root)**
3. Visit: `https://yourusername.github.io/repo-name/admin.html`

---

## 💡 Why sets.js instead of JSON files?

Browsers block network requests (`fetch`) when opening HTML files directly
from your computer. Using a `.js` file means everything loads instantly
with zero configuration — both locally and on GitHub Pages.
