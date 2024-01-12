import React, { useState } from 'react'
import TitleBar from '../../../Components/TitleBar/TitleBar'
import SideBar from '../../../Components/Sidebar/SideBar'
import './Manager.scss'
import { Outlet } from 'react-router-dom';
import { ManagerSidebarData } from '../../../Constants/Constants';


function Manager() {
    const [selectSide,setSelectedSide]=useState('Home')
    
    return (
        <div className='manager-container'>
                <SideBar SidebarData={ManagerSidebarData} selectSide={selectSide} setSelectedSide={setSelectedSide}/>
            <div className='titleOutlet'>
                <div className='Title'><TitleBar/></div>
                <div className='Outlet'><Outlet/></div>
            </div>
        </div>
    )
}

export default Manager