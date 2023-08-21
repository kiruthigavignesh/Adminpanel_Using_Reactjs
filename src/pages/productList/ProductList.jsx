import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import {productRows} from '../../dummmyChart_data';
import {Link} from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const ProductList = () => {

  const  [data,setData] =useState(productRows);

  const handleDelete=(id)=>{
    setData(data.filter((item) => item.id !== id) );
  };


 
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'productname', headerName: 'productname', width: 130, renderCell:(params) =>{
      return(
        <div className="productListuser">
          <img  className="productListimg" src={params.row.img} alt='/'/>{params.row.productname}
        </div>
      )
    } },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 200,
    },
    {
      field:'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'Price',
      headerName: 'Price',
     
      width: 160,

    },
    {
      field:'active',
      headerName: 'Active',
     
      width: 160,
      renderCell:(params) =>{
        return(
         <>
<Link to={"/products/"+params.row.id}>
         <button className='productListedit'>Edit</button></Link>
<DeleteOutlineIcon className='productListdelete' onClick={()=>handleDelete(params.row.id)}/>
         </>
        )
      }
    },
  ];



  return (
    <div className='productList'>
     <DataGrid
        rows={data} disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList
