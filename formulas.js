// Define the formulas for each subject
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

// Function to get formulas based on subject
export function getFormulasBySubject(subject) {
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
