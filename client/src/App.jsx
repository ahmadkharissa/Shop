import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { io } from "socket.io-client";
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

//components
import Header from './components/header/header';
import Home from './components/home/home';
import Product from './components/category/product/product';
import Cart from './components/cart/cart.jsx';
import Login from './components/auth/login/login';
import Signup from './components/auth/signup/signup';
import Category from './components/category/category';
import Profile from './components/profile/profile';
import Footer from '../src/components/footer/footer';
import About from './components/about/about';

//utils
import isAuth from './utils/isAuth';

//css
import './App.css';

let socket = null;

export const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decodedToken = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp > currentTime;
};

if (localStorage.getItem("token"))
  if (isValidToken(localStorage.getItem("token")))
    socket = io(process.env.REACT_APP_API, {
      auth: {
        token: localStorage.getItem("token"),
      },
    });

function App() {
  const dispatch = useDispatch();

  isAuth(dispatch)

  return (
    <BrowserRouter>
      <Header />
      <div style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Category' exact element={<Category />} />
          <Route path='/Category/:id' exact element={<Product />} />
          <Route path='/About' exact element={<About />} />
          <Route path='/Cart' exact element={<Cart />} />
          <Route path='/Login' exact element={<Login />} />
          <Route path='/Signup' exact element={<Signup />} />
          <Route path='/Profile' exact element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
export { socket };