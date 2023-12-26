import React, { useState, useEffect } from 'react';
import * as xlsx from 'xlsx';
import { saveAs } from 'file-saver';

const JsonGeneration = () => {
  const [data, setData] = useState([]);

  const createAndSaveJSONFile = (data, fileName) => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
  
    // Save the file using FileSaver.js
    saveAs(blob, fileName);
  };
  

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            console.log(json[0],'1')
            const unitSorted = json.filter(i => i.Unit === 'Pathappiriyam' || i.Unit === 'PATHAPPIRIYAM' || i.Unit === 'PERUVILKUND' )
            console.log(unitSorted,'unit sorted')
            setData(unitSorted)
            createAndSaveJSONFile(unitSorted, 'filtered_unit_data.json');
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
}


  return (
    <div>
    <form>
    <label htmlFor="upload">Upload File</label>
    <input
        type="file"
        name="upload"
        id="upload"
        onChange={readUploadFile}
    />
</form>
    </div>
  );
};

export default JsonGeneration;
