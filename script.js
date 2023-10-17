function generateTimetable() {
  const subject = document.getElementById('subject').value;
  const difficulty = document.getElementById('difficulty').value;
  const studyTime = parseInt(document.getElementById('studyTime').value);

  const formulasContent = getFormulasBySubject(subject);
  const topicsContent = getTopicsBySubject(subject);

  const content = `
    Subject: ${subject}
    Difficulty: ${difficulty}
    Total Study Time: ${studyTime} minutes

    Important Topics:
    ${topicsContent}

    Formulas:
    ${formulasContent}
  `;

  const printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Study Timetable</title></head><body>');
  printWindow.document.write('<pre>' + content + '</pre>');
  printWindow.document.write('</body></html>');
  printWindow.document.close();

  printWindow.print();
}

// Rest of your code for getting formulas and topics from formulas.js

// Function to get formulas based on subject
function getFormulasBySubject(subject) {
  // Add logic to get formulas based on subject
  // This is just a placeholder
  return 'Formulas for this subject are not available.';
}

// Function to get topics based on subject
function getTopicsBySubject(subject) {
  // Add logic to get topics based on subject
  // This is just a placeholder
  return 'Topics for this subject are not available.';
}
