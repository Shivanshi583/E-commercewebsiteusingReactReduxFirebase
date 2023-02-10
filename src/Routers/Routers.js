import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Checkout from '../Pages/Checkout';
import ProductDetails from '../Pages/ProductDetails';
import Login from '../Pages/Login';
import Shop from '../Pages/Shop';
import Signup from '../Pages/Signup';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return <Routes>
     <Route path='/' element={<Navigate to='home'/>}/> 
    <Route path='home' element={<Home/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={
      <ProtectedRoute>
         <Checkout/>
      </ProtectedRoute>
   }/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='shop/:id' element={<ProductDetails/>}/>
    

  </Routes>
}

export default Routers
