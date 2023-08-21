import './newUser.css';
import React from 'react'

const NewUser = () => {
  return (
    <div className='newUser'>
<h1 className="newUsertitle">New User</h1>   
<form  className="newUserform">
    <div className="newUseritem">
        <label >UserName</label>
        <input type="text" placeholder='Arun' className='newUserinput'/>
    </div>
    <div className="newUseritem">
        <label >Full Name</label>
        <input type="text" placeholder='Enter Your Name' className='newUserinput' />
    </div>
    <div className="newUseritem">
        <label >Email Id</label>
        <input type="email" placeholder='Enter your Email Id' className='newUserinput' />
    </div>
    <div className="newUseritem">
        <label >Password</label>
        <input type="password" placeholder='Password'className='newUserinput' />
    </div>
    <div className="newUseritem">
        <label >Phone Number</label>
        <input type="number" placeholder='Enter Mobile Number' className='newUserinput' />
    </div>
    <div className="newUseritem">
        <label >Address</label>
        <input type="text" placeholder='Enter Address'  className='newUserinput'/>
    </div>

    <div className="newUseritem">
    <label>Active</label>
    <select className='newUserselect' name="active" id="" >
        <option className='newUseroption' value="yes">Yes</option>
        <option className='newUseroption' value="no">No</option>

    </select>
</div>
    
    <div className="newUseritem">
        <label >Gender</label>
        <div className="newUsergender">
        <input type="radio" name='gender' id="male" value="male"/>
        <label for="Male">Male</label>
        <input type="radio" name='gender' id="female" value="female"/>
        <label for="Female">Female</label>
        <input type="radio" name='gender' id="others" value="others"/>
        <label for="Other">Other</label>
        </div>
    </div>


</form>
<button className="newUserbutton">Create</button>

 </div>
  )
}

export default NewUser
