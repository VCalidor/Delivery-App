import React from 'react';
import 'react-dom';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Products from './pages/products';
import Orders from './pages/orders';
import Register from './pages/register';
import Checkout from './pages/checkout';
import Notfound from './pages/notfound';
import Manage from './pages/manage';
import OrderDetails from './pages/orderDetails';

const App = () => (
  <Routes>
    <Route
      exact
      path="/"
      element={ <Navigate to="/login" replace /> }
    />
    <Route path="/login" element={ <Login /> } />
    <Route path="/customer/products" element={ <Products /> } />
    <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
    <Route path="/customer/orders/" element={ <Orders /> } />
    <Route path="/seller/orders" element={ <Orders /> } />
    <Route path="/admin/manage" element={ <Manage /> } />
    <Route path="/register" element={ <Register /> } />
    <Route path="/customer/checkout" element={ <Checkout /> } />
    <Route path="/seller/orders/:id" element={ <OrderDetails /> } />
    <Route path="*" element={ <Notfound /> } />
  </Routes>
);

export default App;
