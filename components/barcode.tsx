'use client'
import Script from 'next/script';
import "./barcode.css"
import JsBarcode from 'jsbarcode';

export default function Home() {
  return (
    <>
    <fieldset>
    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Code Type</h3>
    <ul className="flex-row items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="flex-row border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 w-20">
        <div className="flex items-center pl-3 flex-row">
            <input  id="horizontal-list-radio-license" type="radio" value="code128" name="codetype" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" defaultChecked/>
            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Code-128</label>
        </div>
    </li>
    <li className="flex-row border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 w-20">
        <div className="flex items-center pl-3 flex-row">
            <input id="horizontal-list-radio-id" type="radio" value="code39" name="codetype" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Code-39</label>
        </div>
    </li>
    
</ul>
</fieldset>
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
            console.log(va);
            
            let codetype = document.getElementsByName("codetype");
            for (let i = 0; i < codetype.length; i++) {
              if ((codetype[i] as HTMLInputElement).checked)
                  var codeselected = (codetype[i] as HTMLInputElement).value;
                    
          }
            JsBarcode("#barcode", va,{"format":codeselected});
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
            const svgElement = document.getElementById("barcode");
            const canvas = document.createElement("canvas");
            canvas.width = svgElement.clientWidth;
            canvas.height = svgElement.clientHeight;
            const ctx = canvas.getContext("2d");

            const dataURL = "data:image/svg+xml;base64," + btoa(svgElement.outerHTML);
            const image = new Image();
            image.src = dataURL;
            image.onload = function () {
              ctx.drawImage(image, 0, 0);
              const pngDataURL = canvas.toDataURL("image/png");
              var download = document.createElement('a');
              download.href = pngDataURL;
              download.download = va;
              download.click();
              console.log(pngDataURL);
            };


          }
          catch (err) {
            if (err) {
              alert("Please enter a valid");
            }
          }


        }} id="btn-black" className="stopwatchButton btn-black">Download</button>


<button onClick={(err) => {
          try {
            window.print();
          }
          catch (err) {
            if (err) {
              alert("Something went wrong");
            }
          }


        }} id="btn-black" className="stopwatchButton btn-black">Print</button>
      </div>
        <div>
          <svg id="barcode"></svg>
        </div>
        <Script id = "barcode1" src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"
          onLoad={() => {
            let codetype = document.getElementsByName("codetype");
            (codetype[0] as HTMLInputElement).checked = true;
            JsBarcode("#barcode", "TBA123156789456");
          }}
        >

        </Script>

        
    </>
  )
}


