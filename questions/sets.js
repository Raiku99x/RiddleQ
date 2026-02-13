// questions/sets.js
// This is your question sets configuration file

const QUESTION_SETS = [
  {
    id: 'list-basics',
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
        explanation: 'A Stack follows the Last In First Out (LIFO) principle, where the last element added is the first one to be removed.'
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
        explanation: 'Linked lists can grow and shrink dynamically, and insertions/deletions at the beginning or middle are more efficient than arrays.'
      },
      {
        question: 'In Python, what does list.append(x) do?',
        options: [
          'Adds x to the beginning of the list',
          'Adds x to the end of the list',
          'Inserts x at the middle of the list',
          'Removes x from the list'
        ],
        answer: 1,
        explanation: 'The append() method adds an element to the end of the list.'
      },
      {
        question: 'What is the time complexity of searching for an element in an unsorted array?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        answer: 2,
        explanation: 'In an unsorted array, you must potentially check every element, resulting in O(n) linear time complexity.'
      },
      {
        question: 'Which operation is NOT typically supported by a standard array?',
        options: [
          'Access element by index',
          'Update element at index',
          'Insert element at beginning in O(1)',
          'Find length'
        ],
        answer: 2,
        explanation: 'Inserting at the beginning of an array requires shifting all elements, which is O(n), not O(1).'
      },
      {
        question: 'What is a circular linked list?',
        options: [
          'A list where each node points to the previous node',
          'A list where the last node points back to the first node',
          'A list that can only store circular data',
          'A list with no beginning or end'
        ],
        answer: 1,
        explanation: 'In a circular linked list, the last node points back to the first node, forming a circle.'
      },
      {
        question: 'What is the difference between a list and a tuple in Python?',
        options: [
          'Lists are mutable, tuples are immutable',
          'Tuples are mutable, lists are immutable',
          'Lists are faster than tuples',
          'Tuples can only store numbers'
        ],
        answer: 0,
        explanation: 'Lists can be modified after creation (mutable), while tuples cannot be changed once created (immutable).'
      },
      {
        question: 'What does "indexing" mean in the context of lists?',
        options: [
          'Adding elements to a list',
          'Removing elements from a list',
          'Accessing elements by their position',
          'Sorting the list'
        ],
        answer: 2,
        explanation: 'Indexing refers to accessing elements in a list using their numerical position (index).'
      },
      {
        question: 'Which of the following is true about a doubly linked list?',
        options: [
          'Each node has only one pointer',
          'Each node has pointers to both next and previous nodes',
          'It can only be traversed in one direction',
          'It uses less memory than a singly linked list'
        ],
        answer: 1,
        explanation: 'In a doubly linked list, each node contains pointers to both the next and previous nodes, allowing bidirectional traversal.'
      }
    ]
  }

  // You can add more question sets here
  // Just copy the structure above and modify:
  // - Change the id, name, category
  // - Add your questions
  
  // Example of adding another set:
  /*
  ,
  {
    id: 'loops-advanced',
    name: 'Advanced Loops',
    category: 'Intermediate Programming',
    description: 'Complex loop patterns and optimization',
    questions: [
      {
        question: 'Your question here?',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        answer: 0,
        explanation: 'Explanation here'
      }
      // ... more questions
    ]
  }
  */
];
