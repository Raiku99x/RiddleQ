// questions/nstp.js
// NSTP (National Service Training Program) - Question Sets

if (typeof QUESTION_SETS === 'undefined') {
  var QUESTION_SETS = [];
}

QUESTION_SETS.push({
  id: 'nstp-fundamentals',
  name: 'NSTP Fundamentals',
  category: 'NSTP',
  description: 'Basic principles and objectives of NSTP',
  questions: [
    {
      question: 'What does NSTP stand for?',
      options: [
        'National Security Training Program',
        'National Service Training Program',
        'National Student Training Program',
        'National Safety Training Program'
      ],
      answer: 1,
      explanation: 'NSTP stands for National Service Training Program.'
    },
    {
      question: 'What are the three program components of NSTP?',
      options: [
        'ROTC, LTS, CWTS',
        'Army, Navy, Air Force',
        'Education, Health, Defense',
        'Training, Service, Development'
      ],
      answer: 0,
      explanation: 'The three components are ROTC (Reserve Officers Training Corps), LTS (Literacy Training Service), and CWTS (Civic Welfare Training Service).'
    },
    {
      question: 'What is the main objective of NSTP?',
      options: [
        'Military training only',
        'Promote civic consciousness and defense preparedness',
        'Academic excellence',
        'Sports development'
      ],
      answer: 1,
      explanation: 'NSTP aims to promote civic consciousness and defense preparedness in youth by developing ethics and efficiency in public service.'
    },
    {
      question: 'Who are required to take NSTP?',
      options: [
        'High school students only',
        'College students only',
        'All students',
        'All male and female college students'
      ],
      answer: 3,
      explanation: 'NSTP is mandatory for all male and female college students in the Philippines.'
    }
    // ADD MORE QUESTIONS HERE
  ]
});

QUESTION_SETS.push({
  id: 'nstp-citizenship',
  name: 'Citizenship Training',
  category: 'NSTP',
  description: 'Civic duties and responsibilities',
  questions: [
    {
      question: 'What is civic consciousness?',
      options: [
        'Being aware of one\'s rights only',
        'Awareness of one\'s duties and responsibilities as a citizen',
        'Following laws blindly',
        'Avoiding community involvement'
      ],
      answer: 1,
      explanation: 'Civic consciousness is the awareness of one\'s duties, rights, and responsibilities as a citizen.'
    },
    {
      question: 'What is community service?',
      options: [
        'Paid work for the government',
        'Volunteer work to help the community',
        'Military service',
        'Academic research'
      ],
      answer: 1,
      explanation: 'Community service is voluntary work intended to help people in the community.'
    }
    // ADD MORE QUESTIONS HERE
  ]
});

// Add more NSTP question sets here
