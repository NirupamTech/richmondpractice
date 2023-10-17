function generateTimetable() {
  const subject = document.getElementById('subject').value;
  const difficulty = document.getElementById('difficulty').value;
  const studyTime = parseInt(document.getElementById('studyTime').value);

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

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  const printWindow = window.open(url, '_blank');
  printWindow.onload = function() {
    printWindow.print();
    printWindow.onafterprint = function() {
      URL.revokeObjectURL(url);
      printWindow.close();
    };
  };
}

// Rest of your code for getting formulas from formulas.js

// Function to get formulas based on subject
function getFormulasBySubject(subject) {
  // Replace with actual logic to fetch formulas from formulas.js
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
