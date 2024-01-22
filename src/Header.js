import React from 'react';
import "./Header.css";
import { Outlet, Link, NavLink } from "react-router-dom";
import {useStateValue} from "./StateProvider";
// import { auth } from "./firebase.js";
function Header() {
  const [{basket,user},dispatch]= useStateValue();
  
  return (
    <nav className='header'>
       
      <Link to="/"> 
        <img className="header_logo" src="../newlogo.webp" alt=''></img>
      </Link>

      <div className='header_search'>
          <input type='text' className='header_searchInput'/> 
          <img className="header_searchicon" src='../search.jpeg'></img>
      </div>
      
      <div className='header_nav'>
        <NavLink to="/login" className="header_link">
          <div className='header_option'>
            <span className="header_optionLineone">Hello Mayur</span>
            <span className="header_optionLinetwo">Sign In</span>
          </div>
         </NavLink>
         
         <NavLink to="/login" className="header_link">
          <div className='header_option'>
            <span className="header_optionLineone">Returns</span>
            <span className="header_optionLinetwo">& Orders</span>
          </div>
         </NavLink>
         
         <NavLink to="/Login" className="header_link">
          <div className='header_option'>
            <span className="header_optionLineone">Your</span>
            <span className="header_optionLinetwo">Prime</span>
          </div>
         </NavLink>

         <NavLink to="/checkout" className="header_link">
          <div className='header_optionBasket'>
            <img className='header_logo header_basketlogo' src='../Shopping.png'></img>
            <span className="header_optionLinetwo .header_basketCount" >{basket?.length}</span>
          </div>
         </NavLink>

      </div>
     
    </nav>
  );
};

export default Header;
