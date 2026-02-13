// questions/discrete-structure-1.js
// Discrete Structure 1 - Question Sets

if (typeof QUESTION_SETS === 'undefined') {
  var QUESTION_SETS = [];
}

QUESTION_SETS.push({
  id: 'discrete-logic',
  name: 'Logic and Propositions',
  category: 'Discrete Structure 1',
  description: 'Propositional logic and truth tables',
  questions: [
    {
      question: 'What is a proposition in logic?',
      options: [
        'A question',
        'A statement that is either true or false',
        'A command',
        'An exclamation'
      ],
      answer: 1,
      explanation: 'A proposition is a declarative statement that has a definite truth value (true or false).'
    },
    {
      question: 'What does the symbol ∧ represent in logic?',
      options: [
        'OR (Disjunction)',
        'AND (Conjunction)',
        'NOT (Negation)',
        'IMPLIES'
      ],
      answer: 1,
      explanation: 'The symbol ∧ represents logical AND (conjunction).'
    },
    {
      question: 'What is the negation of "p AND q"?',
      options: [
        'NOT p AND NOT q',
        'NOT p OR NOT q',
        'p OR q',
        'NOT (p OR q)'
      ],
      answer: 1,
      explanation: 'By De Morgan\'s Law, NOT (p AND q) = (NOT p) OR (NOT q).'
    },
    {
      question: 'What is a tautology?',
      options: [
        'A statement that is always false',
        'A statement that is always true',
        'A statement that can be true or false',
        'A conditional statement'
      ],
      answer: 1,
      explanation: 'A tautology is a logical statement that is always true regardless of the truth values of its components.'
    }
    // ADD MORE QUESTIONS HERE
  ]
});

QUESTION_SETS.push({
  id: 'discrete-sets',
  name: 'Set Theory',
  category: 'Discrete Structure 1',
  description: 'Sets, operations, and relations',
  questions: [
    {
      question: 'What is the union of sets A and B?',
      options: [
        'Elements in both A and B',
        'Elements in A or B or both',
        'Elements in A but not in B',
        'Elements in neither A nor B'
      ],
      answer: 1,
      explanation: 'The union of sets A and B (A ∪ B) contains all elements that are in A, or in B, or in both.'
    },
    {
      question: 'What symbol represents the intersection of sets?',
      options: [
        '∪',
        '∩',
        '⊆',
        '∈'
      ],
      answer: 1,
      explanation: 'The symbol ∩ represents the intersection of sets, containing elements common to both sets.'
    },
    {
      question: 'What is the cardinality of a set?',
      options: [
        'The sum of all elements',
        'The number of elements in the set',
        'The largest element',
        'The type of elements'
      ],
      answer: 1,
      explanation: 'Cardinality refers to the number of elements in a set.'
    }
    // ADD MORE QUESTIONS HERE
  ]
});

// Add more Discrete Structure question sets here
