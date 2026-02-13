// questions/calculus.js
// Calculus for Computer Science - Question Sets

if (typeof QUESTION_SETS === 'undefined') {
  var QUESTION_SETS = [];
}

QUESTION_SETS.push({
  id: 'calculus-derivatives',
  name: 'Derivatives',
  category: 'Calculus for Computer Science',
  description: 'Basic derivatives and differentiation rules',
  questions: [
    {
      question: 'What is the derivative of x²?',
      options: [
        'x',
        '2x',
        'x²',
        '2'
      ],
      answer: 1,
      explanation: 'Using the power rule: d/dx(xⁿ) = n·xⁿ⁻¹, so d/dx(x²) = 2x.'
    },
    {
      question: 'What is the derivative of a constant?',
      options: [
        '0',
        '1',
        'The constant itself',
        'Undefined'
      ],
      answer: 0,
      explanation: 'The derivative of any constant is always 0 because constants do not change.'
    },
    {
      question: 'What does the derivative represent?',
      options: [
        'The area under a curve',
        'The rate of change or slope',
        'The maximum value',
        'The integral'
      ],
      answer: 1,
      explanation: 'The derivative represents the instantaneous rate of change or the slope of the tangent line at a point.'
    },
    {
      question: 'What is the derivative of sin(x)?',
      options: [
        '-cos(x)',
        'cos(x)',
        '-sin(x)',
        'tan(x)'
      ],
      answer: 1,
      explanation: 'The derivative of sin(x) is cos(x).'
    }
    // ADD MORE QUESTIONS HERE
  ]
});

QUESTION_SETS.push({
  id: 'calculus-limits',
  name: 'Limits',
  category: 'Calculus for Computer Science',
  description: 'Understanding limits and continuity',
  questions: [
    {
      question: 'What does lim(x→a) f(x) represent?',
      options: [
        'The value of f(x) at x = a',
        'The value f(x) approaches as x approaches a',
        'The derivative of f(x)',
        'The integral of f(x)'
      ],
      answer: 1,
      explanation: 'A limit represents the value that a function approaches as the input approaches a certain value.'
    },
    {
      question: 'What is lim(x→0) (sin(x)/x)?',
      options: [
        '0',
        '1',
        '∞',
        'Undefined'
      ],
      answer: 1,
      explanation: 'This is a famous limit: lim(x→0) (sin(x)/x) = 1.'
    }
    // ADD MORE QUESTIONS HERE
  ]
});

// Add more Calculus question sets here
