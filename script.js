// Import the formulas from formulas.js
import { mathFormulas, physicsFormulas, chemistryFormulas, bioFormulas } from 'formulas.js';

// Function to generate the timetable
function generateTimetable() {
  const subject = document.getElementById('subject').value;
  const difficulty = document.getElementById('difficulty').value;
  const studyTime = parseInt(document.getElementById('studyTime').value);

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

  // Fetch the formulas for the selected subject
  const formulasContent = getFormulasBySubject(subject);

  const content = `
    Subject: ${subject}
    Difficulty: ${difficulty}
    Total Study Time: ${studyTime} minutes

    Formulas:
    ${formulasContent}
  `;

  const htmlContent = `
    <html>
      <head>
        <title>Study Timetable</title>
      </head>
      <body>
        <pre>${content}</pre>
      </body>
    </html>
  `;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(htmlContent);
  printWindow.document.close();

  // Wait for content to load before printing
  printWindow.onload = function () {
    printWindow.print();
    printWindow.onafterprint = function () {
      printWindow.close();
    };
  };
}

// Add an event listener to the button for generating the timetable
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateTimetable);
