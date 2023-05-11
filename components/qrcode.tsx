'use client'
import Script from 'next/script';
import "./qrcode.css"
//import JsBarcode from 'jsbarcode';


export default function Home() {
  return (
    <>
    
      <div className='h-fit w-screen border-solid border-white border-2 h-30 w-300'>
        <div className='h-fit w-screen'>
        
          <label>Please input the Data: </label>
        </div>
        <div>
          <input type="text" id="name" name="name" defaultValue="TBA123156789456" required
          />

        </div>

        <button onClick={(err) => {
          try {
            let va = document.getElementById("name").value;
            var typeNumber = 4;
            var errorCorrectionLevel = 'L';
            var qr = qrcode(typeNumber, errorCorrectionLevel);
            qr.addData(va);
            qr.make();
            document.getElementById('placeHolder').innerHTML = qr.createImgTag(6,15,15);
          }
          catch (err) {
            if (err) {
              alert("Please enter a valid");
            }
          }


        }} id="btn-black" className="stopwatchButton btn-black">Generate</button>

        <button onClick={(err) => {
          try {
            let va = document.getElementById("name").value;
            let img = document.getElementById("placeHolder")?.children[0].currentSrc;

            
            let download = document.createElement('a');
            download.href = img;
            download.download = va;
            download.click();
            console.log(img);


          }
          catch (err) {
            if (err) {
              alert("Please enter a valid");
            }
          }


        }} id="btn-black" className="stopwatchButton btn-black">Download</button>


      <button onClick={(err) => {
          try {
            let url = document.getElementById("placeHolder")?.children[0].currentSrc;
            let data = document.getElementById("name").value;
            var imageWindow = window.open('', '_blank');
                imageWindow.document.write('<html><head><title>Print Image</title></head><body>');

                imageWindow.document.write('<img src="' + url + '">');

                imageWindow.document.write('<h1>'+ data + '</h1>');
                imageWindow.document.write('</body></html>');
                imageWindow.document.close();

                imageWindow.onload = function() {
                  imageWindow.print();
                  imageWindow.close();
  };
          }
          catch (err) {
            if (err) {
              alert("Something went wrong");
            }
          }


        }} id="btn-black" className="stopwatchButton btn-black">Print</button>
      </div>
        <div>
        <div id="placeHolder"></div>
        </div>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"
          onLoad={() => {
            let va = document.getElementById("name").value;
            var typeNumber = 4;
            var errorCorrectionLevel = 'L';
            var qr = qrcode(typeNumber, errorCorrectionLevel);
            qr.addData(va);
            qr.make();
            document.getElementById('placeHolder').innerHTML = qr.createImgTag(8,5,5);
          }}
        >

        </Script>

        
    </>
  )
}


