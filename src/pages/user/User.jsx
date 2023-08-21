import './user.css';
import {Link} from "react-router-dom";

import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import React from 'react'
import PublishIcon from '@mui/icons-material/Publish';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">
                Edit User
            </h1>
            <Link to="/newUser">
            <button className="userAddbutton">Create</button></Link>
        </div>
<div className="userContainer">
    <div className="userShow"> 
    <div className="userShowtop">
        <img src="https://funylife.in/wp-content/uploads/2022/11/20221105_164643-1024x1024.jpg" alt="" className="usershowimg" />
  
  <div className="userShowToptitle">
    <span className="userShowusername">PriyaDharashini</span>
  <span className="userShowusertitle">Software Engineer</span>
  
  </div>
    </div>

    <div className="userShowbottom">

        <span className="userShowtitle">Account Details</span>
    <div className="userShowinfo">
        <PersonIcon className='userShowicon'/>
        <span className="userShowinfotitle">Priya3345</span>
    </div>
    <div className="userShowinfo">
        <CalendarMonthIcon className='userShowicon'/>
        <span className="userShowinfotitle">10-09-2000</span>
    </div>
    <span className="userShowtitle">Contact Details</span>
    <div className="userShowinfo">
        <MailOutlineIcon className='userShowicon'/>
        <span className="userShowinfotitle">priya@gmail.com</span>
    </div>
    <div className="userShowinfo">
        <PhoneAndroidIcon className='userShowicon'/>
        <span className="userShowinfotitle">923455566</span>
    </div>
    <div className="userShowinfo">
        <LocationOnIcon className='userShowicon'/>
        <span className="userShowinfotitle">Trichy | Tamilnadu</span>
    </div>
    
    </div>
    
    
    </div>


        <div className="userupdate">
<span className="userUpdatetitle">Edit</span>
<form  className="userUpdateform">
    <div className="uderUpdateleft">
        <div className="userUpdateitem">
            <label className='userUpdatelabel'>UserName</label>
            <input type="text" placeholder='Priya321'
             className='userUpdateinput'/>
        </div>
        <div className="userUpdateitem">
            <label className='userUpdatelabel'>Full Name</label>
            <input type="text" placeholder='PriyaDharshini'
             className='userUpdateinput'/>
        </div>
        <div className="userUpdateitem">
            <label className='userUpdatelabel'>Email</label>
            <input type="email" placeholder='Priya@gmail.com'
             className='userUpdateinput'/>
        </div>
        <div className="userUpdateitem">
            <label className='userUpdatelabel'>Phone Number</label>
            <input type="number" placeholder='923455566'
             className='userUpdateinput'/>
        </div>
        <div className="userUpdateitem">
            <label className='userUpdatelabel'>Address</label>
            <input type="text" placeholder='Trichy | Tamilnadu'
             className='userUpdateinput'/>
        </div>
    </div>
    <div className="userUpdateright">

        <div className="userUpdateupload">
            <img src="https://funylife.in/wp-content/uploads/2022/11/20221105_164643-1024x1024.jpg" alt="" className="userUpdateimg" />
       <label htmlFor="file"><PublishIcon className='userUpdateicon'/></label>
       <input type="file" id="file" style={{display:"none"}} />
       
        </div>
        <button className="userUpdatebutton">Update</button>
    </div>
</form>
       
    </div>
</div>



    </div>
  )
}

export default User
