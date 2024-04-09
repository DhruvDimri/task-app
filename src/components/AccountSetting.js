import React from 'react'
import "./accountsetting.css"
import image from "./OIP.jpeg"

const AccountSetting = () => {
  return (
    <div className='settingContainer'>
        <div className="setting">
            <p className='account'>Account Setting</p>
            <div className="img">
                <img src={image} alt="sorry can't find" />
                <span className='marryDoe'><span className='marryDoe1'> Marry Doe</span> <br />Marry@Gmail.Com</span>
            </div>
            <p className='about'>Lorem ipsum dolor sit amet consectetur adipisicing  <br />elit. Exercitationem voluptate dolor dignissimos <br /> eveniet, ut a facere suscipit rerum aliquid <br /> quis illum, at  quae, sint quidem atque. Et quam at <br /> maxime. </p>
        </div>
    </div>
  )
}

export default AccountSetting