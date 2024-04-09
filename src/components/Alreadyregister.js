import React from 'react'
import "./alreadyregister.css"

const Alreadyregister = () => {
  return (
    <div className='loginContainer'>
        <div className="login">
            <p className='heading'>Signin to your <br />PopX account</p>
            <p className='lorem'>Lorem ipsum dolor sit amet, <br />consecteur adipiscing elit,</p>
            <fieldset>
                <legend>Email Address</legend>
                <p className='marryDoe'>Enter email address</p>
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <p className='marryDoe'>Enter password</p>
            </fieldset>
            <button className='button4'>Login</button>
        </div>
    </div>
  )
}

export default Alreadyregister