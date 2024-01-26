
//1. Use the inquirer npm package to get user input.

window.$ = window.jQuery = require('jquery');

function qrgenerator(){

    const url = $("#urlInput").val();
    if (!url) {
        alert('Please enter a URL');
        return;
    }
   //2. Use the qr-image npm package to turn the user entered URL into a QR code image.
   var qr_img = new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 200,
    height: 200,
});
    
    alert('QR Code generated successfully!');
    $("#qrcode").addClass("positionimg");
    //3. Create a txt file to save the user input using the native fs node module.
  }
  