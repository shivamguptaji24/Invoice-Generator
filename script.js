// Function to generate invoice total
function generateInvoice() {
    const amount = parseFloat(document.getElementById('amount').value);
    const covidCharge = parseFloat(document.getElementById('covid').value);
    const fuelCharge = parseFloat(document.getElementById('fuel').value);

    // Calculate Grand Total
    const grandTotal = amount + covidCharge + fuelCharge;

    // Display the Grand Total
    document.getElementById('grandTotal').value = grandTotal.toFixed(2);
}

// Function to auto-generate the current date
window.onload = function () {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    document.getElementById('date').value = formattedDate;
};

// Function to download the invoice as a PDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'pt', 'a4'); // Create a new PDF document

    // Fetch values from the form
    const awb = document.getElementById('awb').value;
    const consignee = document.getElementById('consignee').value;
    const destination = document.getElementById('destination').value;
    const net = document.getElementById('net').value;
    const networkNo = document.getElementById('networkNo').value;
    const ds = document.getElementById('ds').value;
    const pcs = document.getElementById('pcs').value;
    const weight = document.getElementById('weight').value;
    const amount = document.getElementById('amount').value;
    const covid = document.getElementById('covid').value;
    const fuel = document.getElementById('fuel').value;
    const grandTotal = document.getElementById('grandTotal').value;
    const date = document.getElementById('date').value;

    // Add content to the PDF
    doc.text("Invoice Details", 20, 30);
    doc.text(`AWB No: ${awb}`, 20, 60);
    doc.text(`Consignee: ${consignee}`, 20, 80);
    doc.text(`Destination: ${destination}`, 20, 100);
    doc.text(`Net: ${net}`, 20, 120);
    doc.text(`Network No: ${networkNo}`, 20, 140);
    doc.text(`D/S: ${ds}`, 20, 160);
    doc.text(`Pcs: ${pcs}`, 20, 180);
    doc.text(`Weight: ${weight} kg`, 20, 200);
    doc.text(`Amount: ${amount}`, 20, 220);
    doc.text(`COVID Charge: ${covid}`, 20, 240);
    doc.text(`Fuel Charge: ${fuel}`, 20, 260);
    doc.text(`Grand Total: ${grandTotal}`, 20, 280);
    doc.text(`Invoice Date: ${date}`, 20, 300);

    // Save the generated PDF
    doc.save("invoice.pdf"); // Download the PDF with the file name 'invoice.pdf'
}
