// =============================================================================
// RiddlerQ — Question Sets
// =============================================================================
// HOW TO ADD A NEW SET:
//   1. Copy the template block below
//   2. Fill in name, description, and your questions
//   3. Save the file — done. Works locally AND on GitHub Pages.
// =============================================================================

const QUESTION_SETS = [

  // ── SET 1 ──────────────────────────────────────────────────────────────────
  {
    id:          "mixed-general",
    name:        "Mixed — General Knowledge",
    description: "20 questions across Math, Science, Programming & more",
    questions: [
      {
        question: "What is the derivative of x² with respect to x?",
        options: ["x", "2x", "x²", "2"],
        answer: 1,
        explanation: "Using the power rule: d/dx(xⁿ) = n·xⁿ⁻¹, so d/dx(x²) = 2x."
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        answer: 2,
        explanation: "Mars appears red due to iron oxide (rust) on its surface."
      },
      {
        question: "What does the 'len()' function do in Python?",
        options: ["Converts a value to integer", "Returns the length of an object", "Loops through a list", "Deletes a variable"],
        answer: 1,
        explanation: "len() returns the number of items in an object like a string, list, or tuple."
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Caravaggio"],
        answer: 2,
        explanation: "The Mona Lisa was painted by Leonardo da Vinci, likely between 1503 and 1519."
      },
      {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        answer: 1,
        explanation: "Pi (π) is approximately 3.14159..., which rounds to 3.14."
      },
      {
        question: "Which data structure in Python uses key-value pairs?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        answer: 3,
        explanation: "A dictionary (dict) stores data as key-value pairs, e.g. {'name': 'Alice'}."
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: 2,
        explanation: "Gold's symbol Au comes from the Latin word 'aurum'."
      },
      {
        question: "What is the integral of 1/x with respect to x?",
        options: ["x", "ln|x| + C", "1/x² + C", "e^x + C"],
        answer: 1,
        explanation: "The integral of 1/x is the natural logarithm: ∫(1/x)dx = ln|x| + C."
      },
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["func", "define", "def", "function"],
        answer: 2,
        explanation: "In Python, functions are defined using the 'def' keyword followed by the function name."
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3,
        explanation: "The Pacific Ocean is the largest, covering more than 30% of Earth's surface."
      },
      {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup Language", "HyperText Modern Language"],
        answer: 0,
        explanation: "HTML stands for HyperText Markup Language — the standard language for creating web pages."
      },
      {
        question: "Which of the following is NOT a prime number?",
        options: ["7", "11", "13", "15"],
        answer: 3,
        explanation: "15 is divisible by 3 and 5, so it is not prime. 7, 11, and 13 are all prime."
      },
      {
        question: "What year did the first iPhone launch?",
        options: ["2005", "2006", "2007", "2008"],
        answer: 2,
        explanation: "Apple's first iPhone was announced and released in 2007 by Steve Jobs."
      },
      {
        question: "In Python, what will 'type(3.14)' return?",
        options: ["int", "str", "float", "number"],
        answer: 2,
        explanation: "3.14 is a floating-point number, so type(3.14) returns <class 'float'>."
      },
      {
        question: "What is Newton's Second Law of Motion?",
        options: ["Every action has an equal and opposite reaction", "F = ma", "An object at rest stays at rest", "Energy cannot be created or destroyed"],
        answer: 1,
        explanation: "Newton's Second Law states Force = mass × acceleration (F = ma)."
      },
      {
        question: "Which country has the most natural lakes in the world?",
        options: ["Russia", "United States", "Brazil", "Canada"],
        answer: 3,
        explanation: "Canada has over 60% of the world's natural lakes — approximately 879,800 lakes."
      },
      {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
        answer: 2,
        explanation: "Binary search divides the search space in half each step, giving O(log n) time complexity."
      },
      {
        question: "What is the square root of 144?",
        options: ["11", "12", "13", "14"],
        answer: 1,
        explanation: "12 × 12 = 144, so the square root of 144 is 12."
      },
      {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: 2,
        explanation: "Plants absorb CO₂ (carbon dioxide) and use sunlight to convert it into glucose and oxygen."
      },
      {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Syntax"],
        answer: 2,
        explanation: "CSS stands for Cascading Style Sheets — used to style and layout HTML documents."
      }
    ]
  },

  // ── ADD MORE SETS BELOW ────────────────────────────────────────────────────
  // Template — copy this block and fill it in:
  //
  // {
  //   id:          "unique-id",          // no spaces, e.g. "calculus-101"
  //   name:        "Calculus 101",
  //   description: "Derivatives, integrals, and limits",
  //   questions: [
  //     {
  //       question: "Your question here?",
  //       options: ["Option A", "Option B", "Option C", "Option D"],
  //       answer: 0,                     // index of correct option (0 = first)
  //       explanation: "Optional explanation shown after answering."
  //     },
  //     // ... more questions
  //   ]
  // },


  {
    id:          "mixed-general",
    name:        "Mixed — General Knowledge",
    description: "20 questions across Math, Science, Programming & more",
    questions: [
      {
        question: "What is the derivative of x² with respect to x?",
        options: ["x", "2x", "x²", "2"],
        answer: 1,
        explanation: "Using the power rule: d/dx(xⁿ) = n·xⁿ⁻¹, so d/dx(x²) = 2x."
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        answer: 2,
        explanation: "Mars appears red due to iron oxide (rust) on its surface."
      },
      {
        question: "What does the 'len()' function do in Python?",
        options: ["Converts a value to integer", "Returns the length of an object", "Loops through a list", "Deletes a variable"],
        answer: 1,
        explanation: "len() returns the number of items in an object like a string, list, or tuple."
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Caravaggio"],
        answer: 2,
        explanation: "The Mona Lisa was painted by Leonardo da Vinci, likely between 1503 and 1519."
      },
      {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        answer: 1,
        explanation: "Pi (π) is approximately 3.14159..., which rounds to 3.14."
      },
      {
        question: "Which data structure in Python uses key-value pairs?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        answer: 3,
        explanation: "A dictionary (dict) stores data as key-value pairs, e.g. {'name': 'Alice'}."
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: 2,
        explanation: "Gold's symbol Au comes from the Latin word 'aurum'."
      },
      {
        question: "What is the integral of 1/x with respect to x?",
        options: ["x", "ln|x| + C", "1/x² + C", "e^x + C"],
        answer: 1,
        explanation: "The integral of 1/x is the natural logarithm: ∫(1/x)dx = ln|x| + C."
      },
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["func", "define", "def", "function"],
        answer: 2,
        explanation: "In Python, functions are defined using the 'def' keyword followed by the function name."
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3,
        explanation: "The Pacific Ocean is the largest, covering more than 30% of Earth's surface."
      },
      {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup Language", "HyperText Modern Language"],
        answer: 0,
        explanation: "HTML stands for HyperText Markup Language — the standard language for creating web pages."
      },
      {
        question: "Which of the following is NOT a prime number?",
        options: ["7", "11", "13", "15"],
        answer: 3,
        explanation: "15 is divisible by 3 and 5, so it is not prime. 7, 11, and 13 are all prime."
      },
      {
        question: "What year did the first iPhone launch?",
        options: ["2005", "2006", "2007", "2008"],
        answer: 2,
        explanation: "Apple's first iPhone was announced and released in 2007 by Steve Jobs."
      },
      {
        question: "In Python, what will 'type(3.14)' return?",
        options: ["int", "str", "float", "number"],
        answer: 2,
        explanation: "3.14 is a floating-point number, so type(3.14) returns <class 'float'>."
      },
      {
        question: "What is Newton's Second Law of Motion?",
        options: ["Every action has an equal and opposite reaction", "F = ma", "An object at rest stays at rest", "Energy cannot be created or destroyed"],
        answer: 1,
        explanation: "Newton's Second Law states Force = mass × acceleration (F = ma)."
      },
      {
        question: "Which country has the most natural lakes in the world?",
        options: ["Russia", "United States", "Brazil", "Canada"],
        answer: 3,
        explanation: "Canada has over 60% of the world's natural lakes — approximately 879,800 lakes."
      },
      {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
        answer: 2,
        explanation: "Binary search divides the search space in half each step, giving O(log n) time complexity."
      },
      {
        question: "What is the square root of 144?",
        options: ["11", "12", "13", "14"],
        answer: 1,
        explanation: "12 × 12 = 144, so the square root of 144 is 12."
      },
      {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: 2,
        explanation: "Plants absorb CO₂ (carbon dioxide) and use sunlight to convert it into glucose and oxygen."
      },
      {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Syntax"],
        answer: 2,
        explanation: "CSS stands for Cascading Style Sheets — used to style and layout HTML documents."
      }
    ]
  },

];
