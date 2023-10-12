const mathFormulas = `
Math Formulas:
Formula 1: ...
Formula 2: ...
`;

const physicsFormulas = `
Physics Formulas:
Formula 1: ...
Formula 2: ...
`;

const chemistryFormulas = `
Chemistry Formulas:
Formula 1: ...
Formula 2: ...
`;

const bioFormulas = `
Biology Formulas:
Formula 1: ...
Formula 2: ...
`;

// Export the formulas based on subject
const getFormulasBySubject = (subject) => {
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
};