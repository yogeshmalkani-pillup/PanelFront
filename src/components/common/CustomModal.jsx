import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai"

export default function CustomModal({ children,heading }) {
    return (
        <div className='w-full h-full'>
            <div className="fixed top-0 left-0 w-full h-full  bg-gray-800 bg-opacity-50 z-40" ></div>
            <div className='z-50 absolute top-20 left-50 bg-white bg-opacity-100 h-[50vh] w-[80vw]'>
                <div className='bg-[#d3ddfc] h-20'>
                    <div className='cursor-pointer p-2'>
                        <AiOutlineCloseCircle  />
                    </div>
                    {heading}
                </div>
                {children}
            </div>
        </div>
    )
}
