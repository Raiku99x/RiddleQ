// questions/intermediate-programming.js
// Intermediate Programming - Question Sets

if (typeof QUESTION_SETS === 'undefined') {
  var QUESTION_SETS = [];
}

QUESTION_SETS.push({
  id: 'intermediate-list',
  name: 'LIST-Q',
  category: 'Intermediate Programming',
  description: 'Python list operations and output prediction',
  questions: [
    {
      question: `What is the output?

fruits = ['banana', 'orange']
fruits.append('mango')
print(fruits)`,
      options: [
        "['banana', 'orange', 'mango']",
        "['mango', 'banana', 'orange']",
        "['banana', 'mango', 'orange']",
        'banana orange mango'
      ],
      answer: 0,
      explanation: 'append() adds the element to the end of the list.'
    },
    {
      question: `What is the output?

num1 = [0, 1, 2]
num2 = [3, 4, 5]
result = num1 + num2
print(result)`,
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
      question: `What is the output?

squares = [i ** 2 for i in range(5)]
print(squares)`,
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
      question: `What is the output?

fruits = ['banana', 'orange', 'mango', 'lemon']
print(fruits[::-1])`,
      options: [
        "['lemon', 'mango', 'orange', 'banana']",
        "['banana', 'orange', 'mango', 'lemon']",
        "['orange', 'mango', 'lemon']",
        'nomeL ognaM egnarO ananaB'
      ],
      answer: 0,
      explanation: 'The slice [::-1] reverses the list by using a step of -1.'
    },
    {
      question: `What is the output?

fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.insert(2, 'apple')
print(fruits)`,
      options: [
        "['banana', 'orange', 'apple', 'mango', 'lemon']",
        "['banana', 'apple', 'orange', 'mango', 'lemon']",
        "['apple', 'banana', 'orange', 'mango', 'lemon']",
        "['banana', 'orange', 'mango', 'apple', 'lemon']"
      ],
      answer: 0,
      explanation: 'insert(2, \'apple\') inserts \'apple\' at index 2, shifting \'mango\' and \'lemon\' to the right.'
    },
    {
      question: `What is the output?

fruits = ['banana', 'orange', 'mango', 'lemon']
print(fruits[1:3])`,
      options: [
        "['orange', 'mango']",
        "['banana', 'orange', 'mango']",
        "['orange', 'mango', 'lemon']",
        "['banana', 'orange']"
      ],
      answer: 0,
      explanation: 'Slice [1:3] includes elements at index 1 and 2, but excludes index 3.'
    },
    {
      question: `What is the output?

values = [0, 1, 2, 3]
print(all(values))`,
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
      question: `What is the output?

fruits = ['banana', 'orange', 'mango', 'lemon']
print(fruits[2])`,
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
      question: `What is the output?

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix[1][2])`,
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
      question: `What is the output?

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [n ** 2 for n in numbers if n % 2 == 0]
print(even_squares)`,
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
      question: `What is the output?

fruits = ['banana', 'orange', 'mango', 'lemon']
print(fruits[-2])`,
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
      question: `What is the output?

fruits = ['banana', 'orange', 'mango', 'lemon']
fruits[0] = 'avocado'
print(fruits)`,
      options: [
        "['avocado', 'orange', 'mango', 'lemon']",
        "['banana', 'avocado', 'mango', 'lemon']",
        "['avocado', 'banana', 'orange', 'mango', 'lemon']",
        'Error: cannot modify list'
      ],
      answer: 0,
      explanation: 'Assigning to fruits[0] replaces \'banana\' with \'avocado\' at index 0.'
    },
    {
      question: `What is the output?

first, second, third, *rest, tenth = [1,2,3,4,5,6,7,8,9,10]
print(tenth)`,
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
      question: `What is the output?

ages = [22, 19, 24, 25, 26, 24, 25, 24]
print(ages.count(24))`,
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
      question: `What is the output?

stack = []
stack.append('first')
stack.append('second')
stack.append('third')
top = stack.pop()
print(top)`,
      options: [
        'third',
        'first',
        'second',
        "['first', 'second']"
      ],
      answer: 0,
      explanation: 'pop() removes and returns the last element added to the stack (LIFO), which is \'third\'.'
    },
    {
      question: `What is the output?

fruits = ['apple', 'banana', 'orange']
result = ','.join(fruits)
print(result)`,
      options: [
        'apple,banana,orange',
        "['apple', 'banana', 'orange']",
        'apple banana orange',
        'applebananaorange'
      ],
      answer: 0,
      explanation: 'join() concatenates list elements with the specified delimiter (comma) into a single string.'
    },
    {
      question: `What is the output?

str_numbers = ['1', '2', '3', '4', '5']
int_numbers = list(map(int, str_numbers))
print(int_numbers)`,
      options: [
        '[1, 2, 3, 4, 5]',
        "['1', '2', '3', '4', '5']",
        '12345',
        'Error: cannot convert string to int'
      ],
      answer: 0,
      explanation: 'map(int, str_numbers) applies int() to each string element, converting them to integers.'
    },
    {
      question: `What is the output?

fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.pop()
print(fruits)`,
      options: [
        "['banana', 'orange', 'mango']",
        "['orange', 'mango', 'lemon']",
        "['banana', 'orange', 'lemon']",
        'lemon'
      ],
      answer: 0,
      explanation: 'pop() without an argument removes and returns the last element (\'lemon\'), leaving the first three elements.'
    },
    {
      question: `What is the output?

fruits = ['banana', 'orange', 'mango', 'lemon']
print('lime' in fruits)`,
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
      question: `What is the output?

fruits = ['banana', 'orange', 'mango', 'lemon']
print(len(fruits))`,
      options: [
        '4',
        '3',
        '5',
        "['banana', 'orange', 'mango', 'lemon']"
      ],
      answer: 0,
      explanation: 'len() returns the number of elements in the list, which is 4.'
    }
  ]
});
