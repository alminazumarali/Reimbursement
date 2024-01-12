import React,{useState} from 'react'
import './SideBar.scss'
import Logo from '../../Assets/Images/DivumColorLogo.jpeg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Default from '../../Assets/Images/Profile.jpg'


function SideBar({SidebarData,selectSide,setSelectedSide}) {
    const navigate=useNavigate()
    const handleSelected=(link,title)=>{
        setSelectedSide(title)
        navigate(link)
    }
    const user = useSelector((state) => state.auth.user);
    return (
        <div className='SideBar'>
            <div className='SideBar-container'>
                <div className='LogoColor'>
                    <img className='LogoImage' src={Logo} alt='Image'/>
                </div>
                <div className='profile_content_gap'>
                    <div>
                        <div className='ProfileSideBar'>
                            <img className='ProfilePhoto' src={user.profile?user.profile:Default} alt='photo'/>
                        </div>
                        <div className='Name'>
                            Hi {user.FName} {user.LName}
                        </div>
                    </div>
                    <div className='SideBarContent'>
                        <ul className='SidebarList'>
                        {SidebarData.map((val,key)=>{
                            return (
                                <div className={selectSide==val.title?'sideBarValue activeSide':'sideBarValue'} onClick={()=>handleSelected(val.link,val.title)}>
                                    <div>{val.icon}</div>
                                    <div>{val.title}</div>
                                </div>
                        )
                    })}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar