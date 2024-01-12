import React from 'react'
import './Login.scss'
import { FcGoogle } from "react-icons/fc";
import Logo from '../../Assets/Images/logoDivum.png'
import { MdWavingHand } from "react-icons/md";

function Login({handleLogin}) {
    return (
        <div className='Login'>
            <div className='LogoTitle'>
                <div className='DivumLogo'><img className='Login_logo' src={Logo} alt='Image'/></div>
                <div>Hello There! <MdWavingHand className='handLogo'/></div>
            </div>
            <div className='LoginTitle_OAuth'>
            {/* <div className='LoginTitle'>LOGIN</div> */}
                <div className='LoginOAuth' onClick={handleLogin}><FcGoogle/>Login with Google
                    {/* <div className='LoginContent icon'><FcGoogle/></div>
                    <div className='LoginContent'>Login with Google</div> */}
                </div>
            </div>
        </div>
    )
}

export default Login