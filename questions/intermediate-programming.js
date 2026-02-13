// questions/intermediate-programming.js
// Intermediate Programming - Question Sets

if (typeof QUESTION_SETS === 'undefined') {
  var QUESTION_SETS = [];
}

QUESTION_SETS.push({
  id: 'intermediate-lists',
  name: 'LIST',
  category: 'Intermediate Programming',
  description: 'Python list operations and output prediction',
  questions: [
    {
      question: 'What is the output?\nfruits = [\'banana\', \'orange\']\nfruits.append(\'mango\')\nprint(fruits)',
      options: [
        '[\'banana\', \'orange\', \'mango\']',
        '[\'mango\', \'banana\', \'orange\']',
        '[\'banana\', \'mango\', \'orange\']',
        'banana orange mango'
      ],
      answer: 0,
      explanation: 'append() adds the element to the end of the list.'
    },
    {
      question: 'What is the output?\nnum1 = [0, 1, 2]\nnum2 = [3, 4, 5]\nresult = num1 + num2\nprint(result)',
      options: [
        '[0, 1, 2, 3, 4, 5]',
        '[3, 5, 7]',
        '[[0, 1, 2], [3, 4, 5]]',
        '[0, 3, 1, 4, 2, 5]'
      ],
      answer: 0,
      explanation: 'The + operator concatenates lists, creating a new list with all elements from both lists in order.'
    },
    {
      question: 'What is the output?\nsquares = [i ** 2 for i in range(5)]\nprint(squares)',
      options: [
        '[0, 1, 4, 9, 16]',
        '[1, 4, 9, 16, 25]',
        '[0, 1, 2, 3, 4]',
        '[2, 4, 6, 8, 10]'
      ],
      answer: 0,
      explanation: 'List comprehension squares each number from 0 to 4 (range(5) produces 0, 1, 2, 3, 4).'
    },
    {
      question: 'What is the output?\nfruits = [\'banana\', \'orange\', \'mango\', \'lemon\']\nprint(fruits[::-1])',
      options: [
        '[\'lemon\', \'mango\', \'orange\', \'banana\']',
        '[\'banana\', \'orange\', \'mango\', \'lemon\']',
        '[\'orange\', \'mango\', \'lemon\']',
        'nomeL ognaM egnarO ananaB'
      ],
      answer: 0,
      explanation: 'The slice [::-1] reverses the list by using a step of -1.'
    },
    {
      question: 'What is the output?\nfruits = [\'banana\', \'orange\', \'mango\', \'lemon\']\nfruits.insert(2, \'apple\')\nprint(fruits)',
      options: [
        '[\'banana\', \'orange\', \'apple\', \'mango\', \'lemon\']',
        '[\'banana\', \'apple\', \'orange\', \'mango\', \'lemon\']',
        '[\'apple\', \'banana\', \'orange\', \'mango\', \'lemon\']',
        '[\'banana\', \'orange\', \'mango\', \'apple\', \'lemon\']'
      ],
      answer: 0,
      explanation: 'insert(2, \'apple\') inserts \'apple\' at index 2, shifting \'mango\' and \'lemon\' to the right.'
    },
    {
      question: 'What is the output?\nfruits = [\'banana\', \'orange\', \'mango\', \'lemon\']\nprint(fruits[1:3])',
      options: [
        '[\'orange\', \'mango\']',
        '[\'banana\', \'orange\', \'mango\']',
        '[\'orange\', \'mango\', \'lemon\']',
        '[\'banana\', \'orange\']'
      ],
      answer: 0,
      explanation: 'Slice [1:3] includes elements at index 1 and 2, but excludes index 3.'
    },
    {
      question: 'What is the output?\nvalues = [0, 1, 2, 3]\nprint(all(values))',
      options: [
        'False',
        'True',
        '[0, 1, 2, 3]',
        '0'
      ],
      answer: 0,
      explanation: 'all() returns False because 0 is a falsy value. All elements must be truthy for all() to return True.'
    },
    {
      question: 'What is the output?\nfruits = [\'banana\', \'orange\', \'mango\', \'lemon\']\nprint(fruits[2])',
      options: [
        'mango',
        'orange',
        'lemon',
        'banana'
      ],
      answer: 0,
      explanation: 'Index 2 refers to the third element (0-indexed), which is \'mango\'.'
    },
    {
      question: 'What is the output?\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nprint(matrix[1][2])',
      options: [
        '6',
        '5',
        '3',
        '8'
      ],
      answer: 0,
      explanation: 'matrix[1] gets the second row [4, 5, 6], then [2] gets the third element, which is 6.'
    },
    {
      question: 'What is the output?\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\neven_squares = [n ** 2 for n in numbers if n % 2 == 0]\nprint(even_squares)',
      options: [
        '[4, 16, 36, 64, 100]',
        '[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]',
        '[2, 4, 6, 8, 10]',
        '[16, 36, 64, 100]'
      ],
      answer: 0,
      explanation: 'List comprehension filters even numbers (2, 4, 6, 8, 10) and squares them, resulting in [4, 16, 36, 64, 100].'
    },
    {
      question: 'What is the output?\nfruits = [\'banana\', \'orange\', \'mango\', \'lemon\']\nprint(fruits[-2])',
      options: [
        'mango',
        'lemon',
        'orange',
        'banana'
      ],
      answer: 0,
      explanation: 'Negative index -2 refers to the second element from the end, which is \'mango\'.'
    },
    {
      question: 'What is the output?\nfruits = [\'banana\', \'orange\', \'mango\', \'lemon\']\nfruits[0] = \'avocado\'\nprint(fruits)',
      options: [
        '[\'avocado\', \'orange\', \'mango\', \'lemon\']',
        '[\'banana\', \'avocado\', \'mango\', \'lemon\']',
        '[\'avocado\', \'banana\', \'orange\', \'mango\', \'lemon\']',
        'Error: cannot modify list'
      ],
      answer: 0,
      explanation: 'Assigning to fruits[0] replaces \'banana\' with \'avocado\' at index 0.'
    },
    {
      question: 'What is the output?\nfirst, second, third, *rest, tenth = [1,2,3,4,5,6,7,8,9,10]\nprint(tenth)',
      options: [
        '10',
        '[4, 5, 6, 7, 8, 9]',
        '9',
        '3'
      ],
      answer: 0,
      explanation: 'Extended unpacking assigns first three values, *rest gets middle values, and tenth gets the last value (10).'
    },
    {
      question: 'What is the output?\nages = [22, 19, 24, 25, 26, 24, 25, 24]\nprint(ages.count(24))',
      options: [
        '3',
        '2',
        '4',
        '24'
      ],
      answer: 0,
      explanation: 'count(24) returns the number of times 24 appears in the list, which is 3 times.'
    },
    {
      question: 'What is the output?\nstack = []\nstack.append(\'first\')\nstack.append(\'second\')\nstack.append(\'third\')\ntop = stack.pop()\nprint(top)',
      options: [
        'third',
        'first',
        'second',
        '[\'first\', \'second\']'
      ],
      answer: 0,
      explanation: 'pop() removes and returns the last element added to the stack (LIFO), which is \'third\'.'
    },
    {
      question: 'What is the output?\nfruits = [\'apple\', \'banana\', \'orange\']\nresult = \',\'.join(fruits)\nprint(result)',
      options: [
        'apple,banana,orange',
        '[\'apple\', \'banana\', \'orange\']',
        'apple banana orange',
        'applebananaorange'
      ],
      answer: 0,
      explanation: 'join() concatenates list elements with the specified delimiter (comma) into a single string.'
    },
    {
      question: 'What is the output?\nstr_numbers = [\'1\', \'2\', \'3\', \'4\', \'5\']\nint_numbers = list(map(int, str_numbers))\nprint(int_numbers)',
      options: [
        '[1, 2, 3, 4, 5]',
        '[\'1\', \'2\', \'3\', \'4\', \'5\']',
        '12345',
        'Error: cannot convert string to int'
      ],
      answer: 0,
      explanation: 'map(int, str_numbers) applies int() to each string element, converting them to integers.'
    },
    {
      question: 'What is the output?\nfruits = [\'banana\', \'orange\', \'mango\', \'lemon\']\nfruits.pop()\nprint(fruits)',
      options: [
        '[\'banana\', \'orange\', \'mango\']',
        '[\'orange\', \'mango\', \'lemon\']',
        '[\'banana\', \'orange\', \'lemon\']',
        'lemon'
      ],
      answer: 0,
      explanation: 'pop() without an argument removes and returns the last element (\'lemon\'), leaving the first three elements.'
    },
    {
      question: 'What is the output?\nfruits = [\'banana\', \'orange\', \'mango\', \'lemon\']\nprint(\'lime\' in fruits)',
      options: [
        'False',
        'True',
        '0',
        'None'
      ],
      answer: 0,
      explanation: 'The \'in\' operator checks if \'lime\' exists in the list. Since it doesn\'t, it returns False.'
    },
    {
      question: 'What is the output?\nfruits = [\'banana\', \'orange\', \'mango\', \'lemon\']\nprint(len(fruits))',
      options: [
        '4',
        '3',
        '5',
        '[\'banana\', \'orange\', \'mango\', \'lemon\']'
      ],
      answer: 0,
      explanation: 'len() returns the number of elements in the list, which is 4.'
    }
  ]
});;

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
