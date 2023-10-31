import React, { useState } from 'react'
import {AiFillCaretDown} from "react-icons/ai"

export default function DropDown({heading,menuItems}) {
    const [isDropped, setIsdropped] = useState(false);
    return (
        <div className='cursor-pointer h-full flex flex-col  justify-center items-center w-fit relative '>
            <div className='flex flex-row gap-2 text-white items-center h-full' onClick={() => setIsdropped(!isDropped)}>
                <p className='font-semibold text-lg'>{heading}</p>
                <AiFillCaretDown />
            </div>
            {isDropped && <ul className=' bg-white text-black w-fit border-x border-b border-black absolute top-[8vh] text-left'>
                {menuItems.map((item)=>{
                    return(
                        <li className='border-b border-l border-r border-gray-300 px-5' >{item}</li>
                    )
                })}
            </ul>}
        </div>
    )
}
