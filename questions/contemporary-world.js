// questions/contemporary-world.js
// The Contemporary World - Question Sets

if (typeof QUESTION_SETS === 'undefined') {
  var QUESTION_SETS = [];
}

QUESTION_SETS.push({
  id: 'contemporary-world-globalization',
  name: 'Globalization',
  category: 'The Contemporary World',
  description: 'Understanding globalization and its impacts',
  questions: [
    {
      question: 'What is globalization?',
      options: [
        'The process of local trade only',
        'The worldwide integration of economies, cultures, and populations',
        'A political system',
        'A type of currency'
      ],
      answer: 1,
      explanation: 'Globalization refers to the increasing interconnectedness of economies, cultures, and populations worldwide.'
    },
    {
      question: 'Which organization promotes international trade?',
      options: [
        'WHO',
        'UNESCO',
        'WTO (World Trade Organization)',
        'NATO'
      ],
      answer: 2,
      explanation: 'The World Trade Organization (WTO) deals with the global rules of trade between nations.'
    },
    {
      question: 'What is a multinational corporation?',
      options: [
        'A company that operates only in one country',
        'A company that operates in multiple countries',
        'A government agency',
        'A non-profit organization'
      ],
      answer: 1,
      explanation: 'A multinational corporation operates in multiple countries beyond its home country.'
    }
    // ADD MORE QUESTIONS HERE
  ]
});

// Add more Contemporary World question sets here
/*
QUESTION_SETS.push({
  id: 'contemporary-world-culture',
  name: 'Global Culture',
  category: 'The Contemporary World',
  description: 'Cultural aspects of globalization',
  questions: [...]
});
*/
