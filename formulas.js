const mathFormulas = `
Math Formulas:
Topic 1:
  - Formula 1 for Topic 1
  - Formula 2 for Topic 1
Topic 2:
  - Formula 1 for Topic 2
  - Formula 2 for Topic 2
`;

const physicsFormulas = `
Physics Formulas:
Topic 1:
  - Formula 1 for Topic 1
  - Formula 2 for Topic 1
Topic 2:
  - Formula 1 for Topic 2
  - Formula 2 for Topic 2
`;

const chemistryFormulas = `
Chemistry Formulas:
Topic 1:
  - Formula 1 for Topic 1
  - Formula 2 for Topic 1
Topic 2:
  - Formula 1 for Topic 2
  - Formula 2 for Topic 2
`;

const bioFormulas = `
Biology Formulas:
Topic 1:
  - Formula 1 for Topic 1
  - Formula 2 for Topic 1
Topic 2:
  - Formula 1 for Topic 2
  - Formula 2 for Topic 2
`;

// Function to get formulas based on subject
function getFormulasBySubject(subject) {
  switch (subject) {
    case 'math':
      return mathFormulas;
    case 'physics':
      return physicsFormulas;
    case 'chemistry':
      return chemistryFormulas;
    case 'bio':
      return bioFormulas;
    default:
      return 'Formulas for this subject are not available.';
  }
}

// Make the function accessible globally//
window.getFormulasBySubject = getFormulasBySubject;
