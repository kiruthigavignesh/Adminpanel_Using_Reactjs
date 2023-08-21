import React from 'react';
import './newProduct.css';

const Newproduct = () => {
  return (
    <div className='newproduct'>
   <div className='newProduct'>
<h1 className="newProducttitle">New Product</h1>   

<form  className="newProductform">
    <div className="newProductitem">

        <label >Image</label>
        <input type="file" style={{border:'none'}}/>
        <label >User Name</label>
        <input type="text" placeholder='Enter your Name' />
    </div>
    <div className="newProductitem">
        <label >Stock</label>
        <input type="text" placeholder='1234' />
    </div>
   
 
   

    <div className="newProductitem">
    <label>Active</label>
    <select className='newProductselect' name="active" id="">
        <option className='newProductoption' value="yes">Yes</option>
        <option className='newProductoption' value="no">No</option>

    </select>
</div>
    
</form>
<button className="newProductbutton">Create</button>

 </div>
    </div>
  )
}

export default Newproduct
