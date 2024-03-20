import React from 'react'

function TableRow({od,cd,pkd,pmd}) {

  return (
    <tr>
        <td className='text-center p-2'>
            {od}
        </td>
        <td className='text-center p-2'>
            {cd}
        </td>
        <td className='text-center p-2'>
            {pkd}
        </td>
        <td className='text-center p-2'>
            {pmd}
        </td>
        <td className='text-center p-2'>
            <button className='px-7 py-1 text-white bg-red-400'>Ship Now</button>
        </td>
    </tr>
  )
}

export default TableRow