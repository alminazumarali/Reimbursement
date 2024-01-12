import React from 'react'
import './TitleBar.scss'
import { IoCalendarOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { IoMdNotificationsOutline } from "react-icons/io";
import moment from 'moment';
import { FaPowerOff } from "react-icons/fa6";

function TitleBar() {
    // const date=Date();
    const moment = require('moment');
    const currentDate = moment().format('MM/DD/YYYY');
    const user = useSelector((state) => state.auth.user);
    const handleNotification=()=>{

    }
    return (
        <div className='TitleBarContainer'>
                <div>
                    {user.role}
                </div>
                <div className='TitleDetails'>
                    <div>
                        <IoCalendarOutline/> {currentDate}
                    </div>
                    <div>
                        <button className='notification' onClick={handleNotification}><IoMdNotificationsOutline/></button>
                    </div>
                    <div>
                        <FaPowerOff />
                    </div>
                </div>

        </div>
    )
}

export default TitleBar