import React from 'react'
import "./welcome.css"
import {useNavigate} from 'react-router-dom'


const Welcome = () => {


const navigator = useNavigate()

function handleAccount(){
    navigator("/create-account");
}
function handleLogin(){
    navigator("/Login-Screen")
}

  return (
    <div className='mainContainer'>
        <div className="welcome">
            <p className='heading'>Welcome to PopX</p>
            <p className='lorem'>Lorem ipsum dolor sit amet, <br /> consecteur adipiscingedit,</p>
            <button className="button1" onClick={handleAccount}>Create Account</button> <br />
            <button className="button2" onClick={handleLogin}>Already Registered? Login</button>
        </div>
    </div>
  )
}

export default Welcome