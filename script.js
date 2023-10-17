function generateTimetable() {
  const subject = document.getElementById('subject').value;
  const difficulty = document.getElementById('difficulty').value;
  const studyTime = parseInt(document.getElementById('studyTime').value);

  const formulasContent = getFormulasBySubject(subject);

  const content = [
    {
      text: `Subject: ${subject}\nDifficulty: ${difficulty}\nTotal Study Time: ${studyTime} minutes`,
      style: 'subheader',
      alignment: 'center'
    },
    {
      text: 'Important Topics:',
      style: 'subheader',
      alignment: 'center'
    },
    {
      text: getTopicsBySubject(subject),
      alignment: 'center'
    },
    {
      text: 'Formulas:',
      style: 'subheader',
      alignment: 'center'
    },
    {
      text: formulasContent,
      alignment: 'center'
    }
  ];

  const docDefinition = {
    content: content,
    styles: {
      header: {
        fontSize: 24,
        bold: true,
        margin: [0, 0, 0, 10],
        color: 'blue'
      },
      subheader: {
        fontSize: 18,
        bold: true,
        margin: [0, 10, 0, 5]
      }
    }
  };

  const pdf = pdfMake.createPdf(docDefinition);
  pdf.download('study_timetable.pdf');
}

// Function to get topics based on subject
function getTopicsBySubject(subject) {
  // Add logic to get topics based on subject
  // This is just a placeholder
  return 'Topics for this subject:\nTopic 1: ...\nTopic 2: ...';
}
