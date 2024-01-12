import React, { useState } from 'react'
import './UserForm.scss'
import { setUser } from '../../Slices/UserSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Profile from '../../Assets/Images/Profile.jpg'

function UserForm() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [userDetail,setUserDetail]=useState({
        FName:'',
        LName:'',
        Contact:'',
        email:'',
        DOB:'',
        EmpId:'',
        role:'Employee',
        profile:Profile
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(setUser(userDetail))
        navigate('Dashboard')
    }
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setUserDetail({ ...userDetail, [name]: value });
    }
    return (
        <div className='userContainer'>
            <div className='employeeTitle'>
            <div className='TitleUser'>Employee Details</div>
            <div>Enter Your Details As They Appear On Your Claims!</div>
            </div>
            <form className='userDetail' onSubmit={handleSubmit}>
                <div className='row2'>
                    <div className='FormInput'>
                        {/* <label className='label'>First Name*</label> */}
                        <input type='text' className='input1' name='FName' value={userDetail.FName} onChange={handleChange} placeholder='First Name *' required/>
                    </div>
                    <div className='FormInput'>
                        {/* <label className='label'>Last Name*</label> */}
                        <input type='text' className='input1' name='LName' value={userDetail.LName} onChange={handleChange} placeholder='Last Name *' required/>
                    </div>
                </div>
                <div className='row2'>
                    <div className='FormInput'>
                        {/* <label className='label'>Contact*</label> */}
                        <input type='number' className='input1' name='Contact' value={userDetail.Contact} onChange={handleChange} placeholder='Contact *' required/>
                    </div>
                    <div className='FormInput'>
                        {/* <label className='label'>Email*</label> */}
                        <input type='text' className='input1' name='email' value={userDetail.email} onChange={handleChange} placeholder='Email *' required/>
                    </div>
                </div>
                <div className='row2'>
                    <div className='FormInput'>
                        {/* <label className='label'>Date of Birth*</label> */}
                        <input type='date' className='input1' name='DOB' value={userDetail.DOB} onChange={handleChange} placeholder='Date Of Birth *' required/>
                    </div>
                    <div className='FormInput'>
                        {/* <label className='label'>Employee Id*</label> */}
                        <input type='number' className='input1' name='EmpId' value={userDetail.EmpId} onChange={handleChange} placeholder='Employee Id *' required/>
                    </div>
                </div>
                <div>
                    <button className='button-login' type='submit'>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default UserForm