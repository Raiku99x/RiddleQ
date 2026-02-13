// questions/intermediate-programming.js
// Intermediate Programming - Question Sets

if (typeof QUESTION_SETS === 'undefined') {
  var QUESTION_SETS = [];
}

QUESTION_SETS.push({
  id: 'intermediate-lists',
  name: 'LIST',
  category: 'Intermediate Programming',
  description: 'Lists, arrays, and data structures',
  questions: [
    {
      question: 'What is the time complexity of accessing an element in an array by index?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      answer: 0,
      explanation: 'Array access by index is O(1) constant time because elements are stored contiguously in memory.'
    },
    {
      question: 'Which data structure uses LIFO (Last In First Out) principle?',
      options: ['Queue', 'Stack', 'Array', 'Linked List'],
      answer: 1,
      explanation: 'A Stack follows the Last In First Out (LIFO) principle.'
    },
    {
      question: 'What is the main advantage of a linked list over an array?',
      options: [
        'Faster access to elements',
        'Dynamic size with efficient insertions/deletions',
        'Less memory usage',
        'Better cache performance'
      ],
      answer: 1,
      explanation: 'Linked lists can grow and shrink dynamically with efficient insertions/deletions.'
    },
    {
      question: 'In Python, what does list.append(x) do?',
      options: [
        'Adds x to the beginning',
        'Adds x to the end',
        'Inserts x at the middle',
        'Removes x'
      ],
      answer: 1,
      explanation: 'The append() method adds an element to the end of the list.'
    },
    {
      question: 'What is a doubly linked list?',
      options: [
        'Each node has only one pointer',
        'Each node has pointers to both next and previous nodes',
        'Can only be traversed in one direction',
        'Uses less memory than singly linked list'
      ],
      answer: 1,
      explanation: 'In a doubly linked list, each node has pointers to both next and previous nodes.'
    }
    // ADD MORE QUESTIONS HERE
  ]
});

QUESTION_SETS.push({
  id: 'intermediate-oop',
  name: 'Object-Oriented Programming',
  category: 'Intermediate Programming',
  description: 'OOP concepts and principles',
  questions: [
    {
      question: 'What is encapsulation in OOP?',
      options: [
        'Creating multiple objects',
        'Bundling data and methods that operate on that data',
        'Inheriting from parent classes',
        'Using multiple programming languages'
      ],
      answer: 1,
      explanation: 'Encapsulation is bundling data and methods together and restricting direct access to some components.'
    },
    {
      question: 'What is inheritance?',
      options: [
        'Creating new objects',
        'A class acquiring properties from another class',
        'Deleting objects',
        'Hiding data'
      ],
      answer: 1,
      explanation: 'Inheritance allows a class to acquire properties and methods from another class.'
    },
    {
      question: 'What is polymorphism?',
      options: [
        'Having only one form',
        'The ability of objects to take many forms',
        'Deleting variables',
        'Creating arrays'
      ],
      answer: 1,
      explanation: 'Polymorphism allows objects of different types to be treated as objects of a common type.'
    }
    // ADD MORE QUESTIONS HERE
  ]
});

// Add more Intermediate Programming question sets here
