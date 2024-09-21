// Get the button element
const downloadButton = document.getElementById('download-pdf');

// Add an event listener to the button
downloadButton.addEventListener('click', () => {
  // Create a new jsPDF instance
  const pdf = new jsPDF();

  // Get the HTML content of the page
  const html = document.documentElement.outerHTML;

  // Convert the HTML to a PDF
  pdf.fromHTML(html, 15, 15, {
    'width': 170,
    'elementHandlers': specialElementHandlers
  });

  // Save the PDF to a file
  const pdfBlob = pdf.output('blob');
  const url = URL.createObjectURL(pdfBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'page.pdf';
  a.click();
});

// Special element handlers for jsPDF
const specialElementHandlers = {
  '#header': function(element, renderer) {
    return true;
  }
};