import  './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import {userRows} from '../../dummmyChart_data';
import {Link} from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const UserList = () => {


  const  [data,setData] =useState(userRows);


  // This function be used for Delete row in the table
  
  const handleDelete=(id)=>{
    setData(data.filter((item) => item.id !== id) );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User Name', width: 130, renderCell:(params) =>{
      return(
        <div className="userListuser">
          <img  className="userListimg" src={params.row.avatar} alt='/'/>{params.row.username}
        </div>
      )
    } },
    {
      field: 'email',
      headerName: 'Email Id',
      width: 200,
    },
    {
      field:'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
     
      width: 160,

    },
    {
      field:'active',
      headerName: 'Active',
     
      width: 160,
      renderCell:(params) =>{
        return(
         <>
<Link to={"/user/"+params.row.id}>
         <button className='userListedit'>Edit</button></Link>
<DeleteOutlineIcon className='userListdelete' onClick={()=>handleDelete(params.row.id)}/>
         </>
        )
      }
    },
  ];
  
 
  return (
    <div className='userList'>
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

export default UserList
