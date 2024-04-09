import React from 'react'
import "./createaccount.css"
import {useNavigate} from 'react-router-dom'

const CreateAccount = () => {

const navigator = useNavigate();

function handleSetting(){
    navigator("/account-setting")
}

  return (
    <div className='accntContainer'>
        <div className="createAccnt">
            <p className='popx'>Create your <br /> PopX account</p>
            <fieldset>
                <legend >Full Name*</legend>
                <p className='marryDoe'>Marry Doe</p>
            </fieldset>
            <fieldset>
                <legend>Phone number*</legend>
                <p className='marryDoe'>Marry Doe</p>
            </fieldset>
            <fieldset>
                <legend>Email address*</legend>
                <p className='marryDoe'>Marry Doe</p>
            </fieldset>
            <fieldset>
                <legend>Password*</legend>
                <p className='marryDoe'>Marry Doe</p>
            </fieldset>
            <fieldset>
                <legend>Company name</legend>
                <p className='marryDoe' >Marry Doe</p>
            </fieldset>
            <p>Are you an Agency</p>
            <input type="radio" name='agency'/>
            <span className='yes'>Yes</span>
            <input type="radio" name='agency'/>
            <span>No</span> <br />
            <button className='button3' onClick={handleSetting}>Create Account</button>
        </div>
    </div>
  )
}

export default CreateAccount