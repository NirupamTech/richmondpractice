function generateTimetable() {
  const subject = document.getElementById('subject').value;
  const difficulty = document.getElementById('difficulty').value;
  const studyTime = parseInt(document.getElementById('studyTime').value);

  const formulasContent = getFormulasBySubject(subject);

  const content = `
    Subject: ${subject}
    Difficulty: ${difficulty}
    Total Study Time: ${studyTime} minutes

    Formulas:
    ${formulasContent}
  `;

  const printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Study Timetable</title></head><body>');
  printWindow.document.write('<pre>' + content + '</pre>');
  printWindow.document.write('</body></html>');
  printWindow.document.close();

  // Wait for content to load before printing
  printWindow.onload = function() {
    printWindow.print();
    printWindow.onafterprint = function() {
      printWindow.close();
    };
  };
}

// Rest of your code for getting formulas from formulas.js

// Function to get formulas based on subject
function getFormulasBySubject(subject) {
  return getFormulasBySubject(subject);
}
//
