

import React from 'react'
import OrderCount from './OrderCount'
import TableRow from './TableRow'

function Orders() {
  return (
    <div className='w-[80%] h-[90%] bg-white rounded-sm'>
            <p className='font-bold mb-2'>Orders</p>
            <hr />
            <div className='w-[100%] h-[30%] flex justify-center items-center '>
                <OrderCount name={'Apple'} count={'10'} />
                <OrderCount name={'Apple'} count={'10'} />
                <OrderCount name={'Apple'} count={'10'} />
            </div>
            <div className='w-full pr-3 flex justify-end gap-2'>
            <select  className=''>
                <option value="30">Last 30 days</option>
                <option value="15">Last 15 days</option>
                <option value="7">Last 7 days</option>
            </select> 
                <button className='px-7 py-1 text-white bg-red-400'>Filter</button>
            </div>
            {/* <div className='w-[100%] h-[70%] grid grid-cols-5 mt-2 border-2 border-black'>
                <div className='h-2 border-2 border-black'>Order Details</div>
                <div className='h-2 border-2 border-black'>Customer Details</div>
                <div className='h-2 border-2 border-black'>Package Details</div>
                <div className='h-2 border-2 border-black'>Payment Details</div>
                <div className='h-2 border-2 border-black'>Actions</div>
            </div> */}
            <table className='w-full mt-3'>
              <tr>
                <th className='p-2'>Order Details</th>
                <th className='p-2'>Customer Details</th>
                <th className='p-2'>Package Details</th>
                <th className='p-2'>Payment Details</th>
                <th className='p-2'>Actions</th>  
              </tr>
              {/* od,cd,pkd,pmd */}
              <TableRow 
                  od={"Russia"}
                  cd={"Neel Chalke"}
                  pkd={"Phone"}
                  pmd={"N.C.Kelkar road"} 
              />
            </table>
    </div>
  )
}

export default Orders