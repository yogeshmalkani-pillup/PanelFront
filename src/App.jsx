import { useEffect, useState } from 'react'
import './App.css'
import Drawer from './components/topDrawer/Drawer'
import BasicForm from './components/basic/BasicForm'
import ToastMessage from './toastMessage'
import SavedLayouts from './components/savedLayouts/SavedLayouts'
import CustomModal from './components/common/CustomModal'
import Navbar from './components/navBar/Navbar'

function App() {
    return (
        <div className='w-full h-full'>
            {/* <CustomModal /> */}
            <ToastMessage />
            <SavedLayouts/>
            <Navbar/>
            <Drawer>
                <BasicForm/>
            </Drawer>
        </div>
    )
}

export default App
