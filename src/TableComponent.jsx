import React, { useEffect, useState } from 'react'
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import SearchBar from './Searchbar'
const TableComponent = ({ data , highlight, setHighlight , selected ,onSelect, handleSearch }) => {
 

//   useEffect(()=>{
//     localStorage.setItem('selectedArray',JSON.stringify(selected))
//   },[selected])

  return (
    <div className='overflow-x-auto pb-[100px]'>
      <table className='min-w-full bg-white'>
        <thead>
          <tr className='sticky top-0 bg-gray-100'>
            <th className='px-6 py-3 border-b-2 border-gray-300 text-left'>
              ID
            </th>
            <th className='px-6 py-3 border-b-2 border-gray-300 text-left'>
              Name
            </th>
            <th className='px-6 py-3 border-b-2 border-gray-300 text-left'>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.__EMPTY} className={`${highlight && !selected.includes(row.__EMPTY) ? 'bg-[tomato] text-white ':'bg-white'}`}>
              <td className='px-6 py-4 border-b border-gray-300'>
                {row.__EMPTY}
              </td>
              <td className='px-6 py-4 border-b border-gray-300'>{row.Name}</td>
              <td className='px-6 py-4 border-b border-gray-300'>
                <Toggle checked={selected.includes(row.__EMPTY)} onChange={()=>onSelect(row.__EMPTY)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div onClick={()=>setHighlight(prev => !prev)} className='absolute bottom-[40px] right-[0px] w-24 h-12 grid place-items-center bg-[tomato] border-1 border-[black] rounded-tl-[10px] rounded-bl-[10px] text-[white] font-bold'>
        {selected.length}/{data.length}
      </div>
      <SearchBar handleSearch={handleSearch} />
      {/* <input name='search' type="text" placeholder="Search..." autocomplete="off"
       class="absolute bottom-[100px] right-[0px] rounded-md bg-gray-400 border-gray-200
       border-2 text-gray-800 p-1 w-[20px] h-[20px] focus:bg-white
       focus:flex-1 focus:pr-12
       transition-all duration-500 transform focus:w-64 focus:h-12"  onChange={handleSearch}/> */}
    </div>
  )
}

export default TableComponent
