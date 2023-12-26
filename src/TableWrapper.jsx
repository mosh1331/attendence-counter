import React, { useState, useEffect } from 'react'
import * as xlsx from 'xlsx'
import { saveAs } from 'file-saver'
import TableComponent from './TableComponent'
import jsonData from './filtered_unit_data.json'

const TableWrapper = () => {
  const [data, setData] = useState(jsonData)
  const [selected, setSelected] = useState([])
  const [highlight, setHighlight] = useState(false)

  const onSelect = id => {
    let arr = [...selected]
    if (arr.includes(id)) {
      arr = arr.filter(i => i !== id)
    } else { arr.push(id) }
    setSelected(arr)
  }

  const handleSearch = e => {
    const searchTerm = e.target.value
    // Search function
    const filteredData = data.filter(item =>
      item.Name.toLowerCase().includes(searchTerm.toLowerCase())) // Sorting the filtered data by name
    if (searchTerm.length > 0) {
      setData(filteredData)
    } else {
      setData(jsonData)
    }
    scrollToTop()
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling behavior
    });
  };

  useEffect(() => {
    const storedArray = localStorage.getItem('selectedArray')
    let parsed = JSON.parse(storedArray)
    console.log(parsed, 'storedArray')
    setSelected(parsed)

    return () => localStorage.setItem('selectedArray', JSON.stringify(selected))
  }, [])

  return (
    <div className='bg-white h-screen w-screen overflow-hidden'>
      <div className='border-1 mx-auto w-[95%] md:w-[80%] h-full overflow-auto'>
        <TableComponent handleSearch={handleSearch} onSelect={onSelect} selected={selected} setHighlight={setHighlight} highlight={highlight} data={data} />
      </div>
    </div>
  )
}

export default TableWrapper
