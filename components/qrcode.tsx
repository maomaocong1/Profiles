'use client'
import Script from 'next/script';
import "./qrcode.css";
import qrcode from 'qrcode-generator';

export default function Home() {
  return (
    <>
    
    <Script id= "qrcode1" src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js" />

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
            let va = (document.getElementById("name") as HTMLInputElement).value;
            sessionStorage.setItem("qrcode_data",va);
            
            var typeNumber:TypeNumber = 4;
            var errorCorrectionLevel:ErrorCorrectionLevel = 'L';
            var qr = qrcode(typeNumber, errorCorrectionLevel);
            qr.addData(va);
            qr.make();
            document.getElementById('placeHolder').innerHTML = qr.createImgTag(6,15);
          }
          catch (err) {
            if (err) {
              alert("Please enter a valid");
            }
          }


        }} id="btn-black" className="stopwatchButton btn-black">Generate</button>

        <button onClick={(err) => {
          try {

            
            let va = (document.getElementById("name") as HTMLInputElement).value;
            let img = (document.getElementById("placeHolder").children[0] as HTMLImageElement).currentSrc;

            
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
            let url = (document.getElementById("placeHolder")?.children[0] as HTMLImageElement).currentSrc;
            let data = (document.getElementById("name") as HTMLInputElement).value;
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
        <Script id= "qrcode" src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"
          onLoad={() => {
            let va = sessionStorage.getItem("qrcode_data");
          if(va == null){
            va = (document.getElementById("name") as HTMLInputElement).value;
          }else{
            (document.getElementById("name") as HTMLInputElement).value = va;
          }
            var typeNumber:TypeNumber = 4;
            var errorCorrectionLevel:ErrorCorrectionLevel = 'L';
            var qr = qrcode(typeNumber, errorCorrectionLevel);
            qr.addData(va);
            qr.make();
            document.getElementById('placeHolder').innerHTML = qr.createImgTag(6,15);
          }}

          
          onReady={()=>{
          let va = sessionStorage.getItem("qrcode_data");
          if(va == null){
            va = (document.getElementById("name") as HTMLInputElement).value;
          }else{
            (document.getElementById("name") as HTMLInputElement).value = va;
          }
          
          var typeNumber:TypeNumber = 4;
          var errorCorrectionLevel:ErrorCorrectionLevel = 'L';
          var qr = qrcode(typeNumber, errorCorrectionLevel);
          qr.addData(va);
          qr.make();
          document.getElementById('placeHolder').innerHTML = qr.createImgTag(6,15);}}
        >

        </Script>

    </>
  )
}


