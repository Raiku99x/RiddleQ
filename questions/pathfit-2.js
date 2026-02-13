// questions/pathfit-2.js
// PATHFIT 2 - Question Sets

if (typeof QUESTION_SETS === 'undefined') {
  var QUESTION_SETS = [];
}

QUESTION_SETS.push({
  id: 'pathfit-fitness',
  name: 'Physical Fitness',
  category: 'PATHFIT 2',
  description: 'Health and fitness fundamentals',
  questions: [
    {
      question: 'What does BMI stand for?',
      options: [
        'Body Mass Index',
        'Basic Muscle Indicator',
        'Biological Mass Indicator',
        'Body Measurement Index'
      ],
      answer: 0,
      explanation: 'BMI stands for Body Mass Index, a measure of body fat based on height and weight.'
    },
    {
      question: 'What is the recommended amount of exercise per week for adults?',
      options: [
        '30 minutes per week',
        '150 minutes of moderate exercise per week',
        '1 hour per month',
        '500 minutes per week'
      ],
      answer: 1,
      explanation: 'The WHO recommends at least 150 minutes of moderate-intensity aerobic activity per week for adults.'
    },
    {
      question: 'What are the components of physical fitness?',
      options: [
        'Only strength',
        'Only endurance',
        'Cardiovascular endurance, strength, flexibility, and body composition',
        'Only flexibility'
      ],
      answer: 2,
      explanation: 'Physical fitness includes cardiovascular endurance, muscular strength, flexibility, and body composition.'
    },
    {
      question: 'What is the purpose of warm-up exercises?',
      options: [
        'To increase heart rate and prepare muscles',
        'To cool down after exercise',
        'To build muscle mass',
        'To stretch only'
      ],
      answer: 0,
      explanation: 'Warm-up exercises gradually increase heart rate and prepare muscles for more intense activity.'
    }
    // ADD MORE QUESTIONS HERE
  ]
});

QUESTION_SETS.push({
  id: 'pathfit-sports',
  name: 'Sports and Games',
  category: 'PATHFIT 2',
  description: 'Rules and principles of various sports',
  questions: [
    {
      question: 'How many players are on a basketball team on the court?',
      options: [
        '4',
        '5',
        '6',
        '7'
      ],
      answer: 1,
      explanation: 'A basketball team has 5 players on the court at a time.'
    },
    {
      question: 'What is the standard distance of a marathon?',
      options: [
        '26.2 miles (42.195 km)',
        '20 miles',
        '30 miles',
        '15 miles'
      ],
      answer: 0,
      explanation: 'A marathon is 26.2 miles or 42.195 kilometers.'
    }
    // ADD MORE QUESTIONS HERE
  ]
});

// Add more PATHFIT question sets here
