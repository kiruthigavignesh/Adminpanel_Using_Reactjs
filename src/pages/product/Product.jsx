import React from 'react';
import './product.css';
import {Link} from 'react-router-dom';
import Chart from '../../components/chart/Chart'
import {productData} from '../../dummmyChart_data';
import PublishIcon from '@mui/icons-material/Publish';

const Product = () => {
  return (
    <div className='product'>
     <div className="productTitlecontainer">
        <h1 className="productTitle">Products</h1>
   <Link to="/newproduct">    <button className="productAddbutton">Create</button></Link> 
     </div>

<div className="productTop">
<div className="productTopleft">
    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
</div>
<div className="productTopright">
<div className="productInfoTop">
<img src="https://m.media-amazon.com/images/I/61uA2UVnYWL._SX522_.jpg" alt="" className="productInfoimg" />
<span className="productName">Apple Ipad</span>
</div>


<div className="productInfobottom">
    <div className="productInfoitem">
        <span className="productInfokey">id:</span>
        <span className="productInfovalue">123</span>
    </div>
    <div className="productInfoitem">
        <span className="productInfokey">sales:</span>
        <span className="productInfovalue">41423</span>
    </div>
    <div className="productInfoitem">
        <span className="productInfokey">active:</span>
        <span className="productInfovalue">yes</span>
    </div>
    <div className="productInfoitem">
        <span className="productInfokey">in stock</span>
        <span className="productInfovalue">no</span>
    </div>
</div>
</div>

</div>
<div className="productBottom">

<form className="productForm">
    <div className="productFormleft">
        <label >Product Name</label>
        <input type="text" placeholder='Apple Ipad' className='productinput'/>
        <label >In Stock</label>
        <select name="inStock" id="inStock" className='productinput'>
            <option value="yes">Yes</option>
            <option value="no">No</option>

        </select>

        <label >Active</label>
        <select name="active" id="active" className='productinput'>
            <option value="yes">Yes</option>
            <option value="no">No</option>

        </select>
    </div>

    <div className="productFormright">
<div className="productUpload">
    <img className=" productUploadimg"src="https://m.media-amazon.com/images/I/81gC7frRJyL._SX522_.jpg" alt="" />
<label for="file">
    <PublishIcon/>
</label>
<input type="file" id="file" style={{display:"none"}} />

</div>
<button className="productbutton">
    Update
</button>
    </div>
</form>

</div>
    </div>
  )
}

export default Product
