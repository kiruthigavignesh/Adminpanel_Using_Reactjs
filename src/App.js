import React from 'react';
import Home from './pages/home/Home';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import UserList from './pages/userlist/UserList';
import User from './pages/user/User';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import NewUser from './pages/newPage/NewUser';
import Newproduct from './pages/newProduct/Newproduct';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <Sidebar />
    

 <Routes>
 <Route path="/">
 <Route path="/" element={<Home/>}/>
  <Route path="users" element={<UserList/>}/>
  <Route path="/user/:userId" element={<User/>}/>
  <Route path="/newUser" element={<NewUser/>}/>
  <Route path="/products" element={<ProductList/>}/>
  <Route path="/products/:productId" element={<Product/>}/>
  <Route path="/newproduct" element={<Newproduct/>}/>

  </Route>
  </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;