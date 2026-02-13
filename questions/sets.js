// Example structure for questions/sets.js
// Add a "category" field to each question set

const QUESTION_SETS = [
  {
    id: 'math-algebra',
    name: 'Algebra Basics',
    category: 'Math',  // <-- Add this field
    description: 'Fundamental algebra concepts',
    questions: [
      {
        question: 'What is 2x + 3 = 11? Solve for x.',
        options: ['x = 4', 'x = 5', 'x = 6', 'x = 7'],
        answer: 0,
        explanation: '2x + 3 = 11, so 2x = 8, therefore x = 4'
      },
      // ... more questions
    ]
  },
  
  {
    id: 'math-geometry',
    name: 'Geometry',
    category: 'Math',  // <-- Same category = grouped together
    description: 'Shapes, angles, and measurements',
    questions: [
      {
        question: 'What is the sum of angles in a triangle?',
        options: ['90°', '180°', '270°', '360°'],
        answer: 1,
        explanation: 'The sum of angles in any triangle is always 180°'
      },
      // ... more questions
    ]
  },
  
  {
    id: 'science-physics',
    name: 'Physics Basics',
    category: 'Science',  // <-- Different category
    description: 'Motion, energy, and forces',
    questions: [
      {
        question: 'What is the speed of light?',
        options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'],
        answer: 0,
        explanation: 'The speed of light in vacuum is approximately 300,000 km/s'
      },
      // ... more questions
    ]
  },
  
  {
    id: 'history-wwii',
    name: 'World War II',
    category: 'History',  // <-- Another category
    description: 'Events of WWII',
    questions: [
      {
        question: 'What year did World War II end?',
        options: ['1943', '1944', '1945', '1946'],
        answer: 2,
        explanation: 'World War II ended in 1945'
      },
      // ... more questions
    ]
  },
  
  // If you don't add a category, it will default to "General"
  {
    id: 'trivia-general',
    name: 'General Trivia',
    // No category field = will be in "General" category
    description: 'Random trivia questions',
    questions: [
      // ... questions
    ]
  }
];
