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

  // Create a new window to print the content
  const printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Study Timetable</title></head><body>');
  printWindow.document.write('<pre>' + content + '</pre>');
  printWindow.document.write('</body></html>');
  printWindow.document.close();

  // Print the window
  printWindow.print();
}
