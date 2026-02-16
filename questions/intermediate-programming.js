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

QUESTION_SETS.push({
  id: 'tricky-general',
  name: 'TRICKY',
  category: 'Tricky Questions',
  description: 'Deceptively simple questions with unexpected answers — think before you click!',
  questions: [
    {
      question: 'How many months have 28 days?',
      options: [
        'All 12 of them',
        'Only February',
        '4 months',
        '6 months'
      ],
      answer: 0,
      explanation: 'Every single month has at least 28 days. The question doesn\'t ask which month has ONLY 28 days. February just happens to have exactly 28 (or 29 in a leap year), but all 12 months contain the 28th day.'
    },
    {
      question: 'A rooster lays an egg on the peak of a roof. Which side does the egg roll down?',
      options: [
        'Roosters don\'t lay eggs',
        'The left side',
        'The right side',
        'It stays balanced on top'
      ],
      answer: 0,
      explanation: 'Roosters are male chickens — they cannot lay eggs at all! Only hens (female chickens) lay eggs. The question is designed to make you think about the roof slope, but the real trick is in the animal.'
    },
    {
      question: 'What was the highest mountain in the world before Mount Everest was discovered?',
      options: [
        'Mount Everest — it was still the tallest',
        'K2',
        'Mont Blanc',
        'Kangchenjunga'
      ],
      answer: 0,
      explanation: 'Mount Everest was always the tallest mountain — it didn\'t become tall when it was discovered. Before humans knew about it, it was still the highest mountain on Earth. Discovery changes knowledge, not geography.'
    },
    {
      question: 'You have a bowl with 6 apples. You take away 4 apples. How many apples do YOU have?',
      options: [
        '4',
        '2',
        '6',
        '0'
      ],
      answer: 0,
      explanation: 'The question asks how many apples YOU have, not how many are left in the bowl. You took 4 apples, so you personally have 4. The bowl has 2 remaining.'
    },
    {
      question: 'What is the real capital of Australia?',
      options: [
        'Canberra',
        'Sydney',
        'Melbourne',
        'Brisbane'
      ],
      answer: 0,
      explanation: 'Most people guess Sydney because it\'s the largest and most famous city, but the capital of Australia is Canberra. It was purpose-built as the capital in 1913 as a compromise between rivals Sydney and Melbourne.'
    },
    {
      question: 'Which country actually invented French fries?',
      options: [
        'Belgium',
        'France',
        'United States',
        'Netherlands'
      ],
      answer: 0,
      explanation: 'French fries are believed to have originated in Belgium in the late 1600s, where villagers fried small fish — and when rivers froze, they fried potatoes instead. American soldiers stationed in French-speaking Belgium during WWI called them "French" fries, and the name stuck.'
    },
    {
      question: 'How many times can you subtract 10 from 100?',
      options: [
        'Once — after that you\'re subtracting from 90',
        '10 times',
        'Unlimited times',
        '9 times'
      ],
      answer: 0,
      explanation: 'You can only subtract 10 FROM 100 exactly once. After the first subtraction, the number is 90 — so subsequent subtractions are from 90, 80, 70, etc., not from 100.'
    },
    {
      question: 'A farmer has 17 sheep. All but 9 die. How many sheep are left?',
      options: [
        '9',
        '8',
        '17',
        '0'
      ],
      answer: 0,
      explanation: '"All but 9" means all except 9. So 9 sheep survive. The phrase tricks people into doing subtraction (17 - 9 = 8), but the answer is simply 9 — the ones that did NOT die.'
    },
    {
      question: 'True or False: The Great Wall of China is clearly visible from space with the naked eye.',
      options: [
        'False — it is not visible from space',
        'True, it\'s the only man-made structure visible',
        'True, but only from low orbit',
        'True, astronauts confirmed it'
      ],
      answer: 0,
      explanation: 'This is one of the most common misconceptions. The Great Wall is extremely long but only about 15–30 feet wide — far too narrow to be seen from space. NASA and multiple astronauts, including Chinese astronaut Yang Liwei, have confirmed it is not visible with the naked eye from orbit.'
    },
    {
      question: 'What is the actual color of a polar bear\'s fur?',
      options: [
        'Transparent — it only appears white',
        'Pure white',
        'Pale yellow',
        'Light grey'
      ],
      answer: 0,
      explanation: 'Polar bear fur is actually transparent and hollow. Each hair shaft is clear and reflects visible light, which makes the fur appear white or yellowish. Their skin underneath is actually black, which helps absorb heat from sunlight.'
    },
    {
      question: 'You\'re in a race. You pass the person in 2nd place. What place are you now in?',
      options: [
        '2nd place',
        '1st place',
        '3rd place',
        'Last place'
      ],
      answer: 0,
      explanation: 'If you pass the person in 2nd place, you take their position — you are now in 2nd place. You did not pass the person in 1st place, so you cannot be 1st. Most people instinctively say 1st, but that\'s the trick.'
    },
    {
      question: 'Which came first — the chicken or the egg?',
      options: [
        'The egg — reptiles and dinosaurs laid eggs millions of years before chickens existed',
        'The chicken came first',
        'They evolved at the exact same time',
        'Science has no answer'
      ],
      answer: 0,
      explanation: 'From an evolutionary standpoint, eggs came first. Reptiles and dinosaurs were laying eggs for hundreds of millions of years before the first bird resembling a chicken ever existed. The genetic mutation that created the first "chicken" happened inside an egg laid by a proto-chicken.'
    },
    {
      question: 'How long did the Hundred Years\' War actually last?',
      options: [
        '116 years (1337–1453)',
        'Exactly 100 years',
        '99 years',
        '115 years'
      ],
      answer: 0,
      explanation: 'Despite its name, the Hundred Years\' War lasted 116 years — from 1337 to 1453. It was a series of conflicts between England and France. The name is a later historical label, not a precise measurement.'
    },
    {
      question: 'In which month do Americans celebrate "the 4th of July"?',
      options: [
        'July',
        'June',
        'August',
        'September'
      ],
      answer: 0,
      explanation: 'This sounds like a trick — and it is, but not in the way you think. The answer really is just July. People overthink this one expecting a catch, but sometimes the simplest answer is correct. The 4th of July is literally the 4th day of July.'
    },
    {
      question: 'What is the actual color of an airplane\'s "black box"?',
      options: [
        'Orange',
        'Black',
        'Yellow',
        'Red'
      ],
      answer: 0,
      explanation: 'Flight recorders are universally called "black boxes," but they are actually bright orange. The vivid color makes them easier to locate in wreckage or water after a crash. The term "black box" is believed to have originated as slang for any mysterious electronic device.'
    },
    {
      question: 'A doctor gives you 3 pills and tells you to take one every half hour. How long will the pills last?',
      options: [
        '1 hour',
        '1.5 hours',
        '2 hours',
        '30 minutes'
      ],
      answer: 0,
      explanation: 'You take pill 1 immediately (0 min), pill 2 at 30 minutes, and pill 3 at 60 minutes. The pills last exactly 1 hour (60 minutes), not 1.5 hours. Most people multiply 3 × 30, forgetting that the first pill is taken at time zero.'
    },
    {
      question: 'Which animal is physically unable to stick its tongue out?',
      options: [
        'Crocodile',
        'Snake',
        'Cat',
        'Parrot'
      ],
      answer: 0,
      explanation: 'A crocodile\'s tongue is attached to the bottom of its entire mouth by a membrane and cannot be extended outward at all. This is why crocodiles cannot use their tongues to move food — they have to toss their heads back to position prey.'
    },
    {
      question: 'How many animals of each kind did Moses take on the ark?',
      options: [
        'Moses didn\'t have an ark — that was Noah',
        '2 of each kind',
        '7 of each clean animal',
        '1 of each kind'
      ],
      answer: 0,
      explanation: 'This is the "Moses Illusion" — a well-documented cognitive trick. The ark belongs to Noah, not Moses. Moses is famous for parting the Red Sea and leading the Israelites out of Egypt. Most people answer "2" without noticing the wrong name in the question.'
    },
    {
      question: 'What is heavier — a ton of feathers or a ton of bricks?',
      options: [
        'They weigh exactly the same — both are one ton',
        'A ton of bricks is heavier',
        'A ton of feathers is heavier',
        'It depends on the type of feathers'
      ],
      answer: 0,
      explanation: 'Both weigh exactly one ton — 2,000 pounds each. The trick is that our brains associate "feathers" with lightness and "bricks" with heaviness, causing us to forget that both quantities are specified as exactly one ton.'
    },
    {
      question: 'If you have only one match and you enter a dark room with a candle, an oil lamp, and a wood stove — what do you light first?',
      options: [
        'The match',
        'The candle',
        'The oil lamp',
        'The wood stove'
      ],
      answer: 0,
      explanation: 'You must light the match first before you can light anything else! The question asks what you light first — and the answer is always the match itself. People rush to decide between the candle, lamp, and stove without realizing the match comes before all of them.'
    }
  ]
});
