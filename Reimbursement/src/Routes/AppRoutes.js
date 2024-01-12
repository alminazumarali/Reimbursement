import React, { useState } from 'react'
import Login from '../Pages/Login/LoginPage'
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Manager from '../Pages/Dashboard/Manager/Manager';
import Admin from '../Pages/Dashboard/Admin/Admin';
import Employee from '../Pages/Dashboard/Employee/Employee';
import Team from '../Pages/Dashboard/Manager/Team/Team';
import ExpenseClaim from '../Pages/ExpenseClaim/ExpenseClaim';
import Draft from '../Pages/Draft/Draft';
import Main from '../Pages/Main/Main'

function AppRoutes() {
    const user = useSelector((state) => state.auth.user);
    return (
        // <div className='AppRoutes'>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='Dashboard' element={user.role=='Employee'?<Employee/>:user.role=='Manager'?<Manager/>:<Admin/>}>
                    <Route index element={<Main/>} />
                    <Route path="team" element={<Team/>}/>
                    <Route path="expenseClaim" element={<ExpenseClaim/>}/>
                    <Route path="draft" element={<Draft/>}/>
                </Route>
            </Routes>
        // </div>
    )
}

export default AppRoutes