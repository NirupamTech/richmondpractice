function generateTimetable() {
  const subject = document.getElementById('subject').value;
  const difficulty = document.getElementById('difficulty').value;
  const studyTime = parseInt(document.getElementById('studyTime').value);

  // Customize formulas and topics based on the selected subject
  let formulasContent, topicsContent;

  switch (subject) {
    case 'math':
      formulasContent = 'Math Formulas:\nFormula 1: ...\nFormula 2: ...';
      topicsContent = 'Math Topics:\nTopic 1: ...\nTopic 2: ...';
      break;
    case 'physics':
      formulasContent = 'Physics Formulas:\nFormula 1: ...\nFormula 2: ...';
      topicsContent = 'Physics Topics:\nTopic 1: ...\nTopic 2: ...';
      break;
    case 'chemistry':
      formulasContent = 'Chemistry Formulas:\nFormula 1: ...\nFormula 2: ...';
      topicsContent = 'Chemistry Topics:\nTopic 1: ...\nTopic 2: ...';
      break;
    case 'bio':
      formulasContent = 'Biology Formulas:\nFormula 1: ...\nFormula 2: ...';
      topicsContent = 'Biology Topics:\nTopic 1: ...\nTopic 2: ...';
      break;
    default:
      formulasContent = 'Formulas:\nFormula 1: ...\nFormula 2: ...';
      topicsContent = 'Topics:\nTopic 1: ...\nTopic 2: ...';
  }

  // Generate timetable message
  const timetableMessage = `Subject: ${subject}\nDifficulty: ${difficulty}\nTotal Study Time: ${studyTime} minutes\n\nImportant Topics:\n\n${topicsContent}\n\n${formulasContent}`;

  // Create a jsPDF instance for the timetable
  const pdf = new jsPDF();

  pdf.setFontSize(12);
  pdf.text(timetableMessage, 10, 10);

  // Create a jsPDF instance for the formulas and topics
  const pdfFormulasTopics = new jsPDF();

  pdfFormulasTopics.setFontSize(12);
  pdfFormulasTopics.text(formulasContent, 10, 10);

  // Save the timetable PDF with a specific name
  pdf.save('study_timetable.pdf');

  // Save the formulas/topics PDF with a specific name
  pdfFormulasTopics.save('formulas_topics.pdf');
}
