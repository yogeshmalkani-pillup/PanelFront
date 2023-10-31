import React from 'react'
import DropDown from './components/DropDown'
import { PANEL_DROPDOWN } from './constants'

export default function Navbar() {
    return (
        <div className='fixed top-0 left-0 w-full bg-[#222222] h-[8vh] px-5'>
           <DropDown heading="Panel" menuItems={PANEL_DROPDOWN} />
        </div>
    )
}
