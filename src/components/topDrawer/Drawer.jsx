import React, { useState } from 'react';

function TopDrawer({ children }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            {!isDrawerOpen && <button
                onClick={toggleDrawer}
                className="bg-blue-500 text-white p-2 rounded-md my-4"
            >
                Basic
            </button>}
                <div  style={{display: isDrawerOpen ? 'block' : 'none'}}>
                    <div className="fixed top-0 left-0 w-full h-full  bg-gray-800 bg-opacity-50 z-40" onClick={toggleDrawer}></div>
                    <div className={` z-50   fixed top-0 left-0 w-full  overflow-hidden bg-white `} style={{height: isDrawerOpen ? 'fit-content': '0',transition: "height 0.2s"}}>
                        {children}
                    </div>
                </div>

        </div >
    );
}

export default TopDrawer;
