import logo from './logo.svg';
import React from "react";
import Login from './pages/Login';
import Header from "./Header"
import './App.css';

import Home from './pages/Home';
import checkout from './pages/Checkout';
import {BrowserRouter ,Routes,Router, Switch,Route } from "react-router-dom";
import Checkout from './pages/Checkout';

function App() {
  return (
   
    <div className="app">
      
      <Header />
      
      <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path='/checkout' element={<Checkout/>}/>
          {/* <Route path="/cart" element={<Cart/>} /> */}
          <Route path="/login" element={<Login/>} />

      </Routes>
     
      
    </div>
  
   
  );
}

export default App;
