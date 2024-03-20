import React from 'react'

function OrderCount({name,count}) {
  return (
    <div className='w-[250px] h-[80px] flex flex-col justify-center items-center border-2 border-black rounded-md bg-slate-100 hover:border-red-600'>
        <p className='font-bold'>{name}</p>
        <p className='font-bold'>{count}</p>
    </div>
  )
}

export default OrderCount