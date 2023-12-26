import React, { useState, useEffect } from 'react';
import * as xlsx from 'xlsx';
import { saveAs } from 'file-saver';
import TableComponent from './TableComponent';
import jsonData from './filtered_unit_data.json';

const TableWrapper = () => {
  const [data, setData] = useState(jsonData);

  return (
    <div className='bg-white h-screen w-screen overflow-hidden'>
        <div className="border-1 mx-auto w-[95%] md:w-[80%] h-full overflow-auto">
            <TableComponent data={data} />
        </div>
    </div>
  );
};

export default TableWrapper;
