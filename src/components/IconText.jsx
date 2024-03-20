import React from 'react'
import { IoAlertCircleOutline } from "react-icons/io5";

function IconText({Icon, text}) {
  return (
    <>
    <div className='flex flex-col items-center  p-4  hover:bg-red-800'>
        <Icon 
            width={30}
            height={30}
        />
        <p>{text}</p>
    </div>
    </>
  )
}

export default IconText