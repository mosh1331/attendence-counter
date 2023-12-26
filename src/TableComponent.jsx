import React, { useEffect, useState } from 'react'
import Toggle from 'react-toggle'
import "react-toggle/style.css"
const TableComponent = ({ data }) => {
  const [selected, setSelected] = useState([])
  const [highlight, setHighlight] = useState(false)

  const onSelect = id => {
    let arr = [...selected]
    if (arr.includes(id)) {
      arr = arr.filter(i => i !== id)
    } else {arr.push(id)}
    setSelected(arr)
  }


  const highlightAbsentees =()=>{
    
  }

  useEffect(()=>{
    const storedArray = localStorage.getItem('selectedArray')
    let parsed =JSON.parse(storedArray)
    console.log(parsed,'storedArray')
    setSelected(parsed)

    return ()=> localStorage.setItem('selectedArray',JSON.stringify(selected))
  },[])

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
      <div onClick={()=>setHighlight(prev => !prev)} className='absolute bottom-[40px] right-[0px] w-24 h-12 grid place-items-center bg-[red] border-1 border-[black] rounded-tl-[10px] rounded-bl-[10px] text-[white] font-bold'>
        0/{data.length}
      </div>
    </div>
  )
}

export default TableComponent
