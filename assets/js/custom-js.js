document.addEventListener('DOMContentLoaded', () => {

    // Get the PDF download button
    const downloadBtn = document.getElementById('downloadResume');

    // Check if button exists
    if (!downloadBtn) {
        console.log('Did not find the PDF resume download button');
        return;
    }

    // Handler to download PDF file
    function downloadPDF(e) {
        e.preventDefault(); // Prevent default action (if needed)

        console.log('Download initiated by:', e.target);

        // Step1: Generate PDF path
        const pdfFilePath = 'assets/data/my_resume.pdf';

        // Step2: Create a temporary link element
        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.target = 'blank';
        link.download = 'My_Resume.pdf'; // Set downloaded file name
        document.body.appendChild(link); // Append to body
        link.click(); // Trigger download
        document.body.removeChild(link); // Remove after clicking
    }

    // Add click event listener to the button
    downloadBtn.addEventListener('click', downloadPDF);
});
