// Get the input field, button, and image elements
const textInput = document.getElementById('text');
const generateButton = document.getElementById('button_code_id');
const downloadButton = document.getElementById('download_button');
const barcodeImage = document.getElementById('box').querySelector('img');

// Add an event listener to the generate button
generateButton.addEventListener('click', generateBarcode);

// Add an event listener to the download button
downloadButton.addEventListener('click', downloadBarcode);

// Function to generate the barcode
function generateBarcode() {
  // Get the text from the input field
  const text = textInput.value.trim();

  // Use JsBarcode to generate the barcode
  JsBarcode(barcodeImage, text, {
    // Options pour personnaliser le code-barres
    format: 'code128',
    width: 2,
    height: 50,
    fontSize: 18,
    lineColor: '#000',
    backgroundColor: '#fff'
  });
}

// Function to download the barcode
function downloadBarcode() {
  // Get the src attribute of the barcode image
  const barcodeSrc = barcodeImage.src;

  // Create a new link element
  const link = document.createElement('a');
  link.href = barcodeSrc;
  link.download = 'codebar.png';
  link.click();
}