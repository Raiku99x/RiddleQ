// questions/ethics.js
// Ethics - Question Sets

if (typeof QUESTION_SETS === 'undefined') {
  var QUESTION_SETS = [];
}

QUESTION_SETS.push({
  id: 'ethics-fundamentals',
  name: 'Fundamentals of Ethics',
  category: 'Ethics',
  description: 'Basic principles and theories of ethics',
  questions: [
    {
      question: 'What is ethics primarily concerned with?',
      options: [
        'Legal requirements',
        'Moral principles and values',
        'Financial decisions',
        'Scientific facts'
      ],
      answer: 1,
      explanation: 'Ethics is the branch of philosophy concerned with moral principles and values that govern behavior.'
    },
    {
      question: 'Which ethical theory focuses on the consequences of actions?',
      options: [
        'Deontology',
        'Virtue Ethics',
        'Consequentialism',
        'Social Contract Theory'
      ],
      answer: 2,
      explanation: 'Consequentialism judges the morality of actions based on their outcomes or consequences.'
    },
    {
      question: 'What does the term "categorical imperative" refer to?',
      options: [
        'A conditional moral rule',
        'An absolute moral command',
        'A personal preference',
        'A cultural norm'
      ],
      answer: 1,
      explanation: 'Kant\'s categorical imperative is an unconditional moral law that applies to all rational beings.'
    }
    // ADD MORE QUESTIONS HERE
    // Copy the structure above and add your own questions
  ]
});

// You can add more ethics-related question sets here
// Example:
/*
QUESTION_SETS.push({
  id: 'professional-ethics',
  name: 'Professional Ethics',
  category: 'Ethics',
  description: 'Ethics in professional settings',
  questions: [
    {
      question: 'Your question here?',
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explanation: 'Explanation here'
    }
  ]
});
*/
