import React,{useState} from 'react'
import Login from '../../Components/Login/Login'
import './LoginPage.scss'
import Logo from '../../Assets/Images/Divum_Logo.svg'
import UserForm from '../../Components/UserForm/UserForm'
import Png from '../../Assets/Images/png.jpg'

function LoginPage() {
    const [login,setLogin]=useState(false)
    const handleLogin=()=>{
        setLogin(true)
    }
    return (
        <div className='Login-Dashboard'>
            <div className='pngContainer'>
                <img className='pngImage' src={Png} alt='png'/>
            </div>
            <div className='LoginContainer'>
                {login?<UserForm/>:
                <Login handleLogin={handleLogin}/>}
            </div>
        </div>
    )
}

export default LoginPage