const formulasData = {
  math: {
    formulas: `
      Math Formulas:
      Formula 1: ...
      Formula 2: ...
    `,
    topics: 'Math Topics: Topic 1, Topic 2, ...'
  },
  physics: {
    formulas: `
      Physics Formulas:
      Formula 1: ...
      Formula 2: ...
    `,
    topics: 'Physics Topics: Topic 1, Topic 2, ...'
  },
  chemistry: {
    formulas: `
      Chemistry Formulas:
      Formula 1: ...
      Formula 2: ...
    `,
    topics: 'Chemistry Topics: Topic 1, Topic 2, ...'
  },
  bio: {
    formulas: `
      Biology Formulas:
      Formula 1: ...
      Formula 2: ...
    `,
    topics: 'Biology Topics: Topic 1, Topic 2, ...'
  }
};

function getFormulasBySubject(subject) {
  return formulasData[subject] ? formulasData[subject].formulas : 'Formulas for this subject are not available.';
}

function getTopicsBySubject(subject) {
  return formulasData[subject] ? formulasData[subject].topics : 'Topics for this subject are not available.';
}

// Export the functions
module.exports = {
  getFormulasBySubject,
  getTopicsBySubject
};
