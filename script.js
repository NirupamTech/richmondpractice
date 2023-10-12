function loadPdfMakeLibrary(callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/pdfmake.min.js';
  script.onload = function() {
    // After pdfmake is loaded, load vfs_fonts as well
    const scriptVfs = document.createElement('script');
    scriptVfs.type = 'text/javascript';
    scriptVfs.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/vfs_fonts.js';
    scriptVfs.onload = callback;
    document.head.appendChild(scriptVfs);
  };
  document.head.appendChild(script);
}

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

  // Generate the content for the PDF
  const content = [
    { text: `Subject: ${subject}\nDifficulty: ${difficulty}\nTotal Study Time: ${studyTime} minutes`, style: 'header' },
    { text: 'Important Topics:', style: 'subheader' },
    { text: topicsContent },
    { text: 'Formulas:', style: 'subheader' },
    { text: formulasContent }
  ];


  if (typeof pdfmake !== 'undefined') {
      const docDefinition = {
        content: [
          // PDF content definition
        ]
      };

      pdfmake.createPdf(docDefinition).download('study_timetable.pdf');
    } else {
      console.error('pdfmake is not available.');
    }
  });

  
  // Define PDF document definition
  const docDefinition = {
    content: content,
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 5]
      }
    }
  };

  // Generate PDF using pdfmake
  pdfmake.createPdf(docDefinition).download('study_timetable.pdf');
}
