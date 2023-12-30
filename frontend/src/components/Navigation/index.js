// frontend/src/components/Navigation/index.js
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import logo from '../../images/logo-removebg.png'
import ShopDropDown from './ShopDropDown';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [showDropDown, setShowDropDown] = useState(false);

  const mouseEnterHandler = ()  => {
    setShowDropDown(true);
  }

  const mouseLeaveHandler = ()  => {
    setShowDropDown(false);
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        {/* <NavLink to="/login">Log In</NavLink> */}
        <NavLink to="/signup" className={"nav-bar-signup"}>Sign Up</NavLink>
      </>
    );
  }

  return (
    // <nav>
      <div className='navbar-container sticky'>
        <div className='navbar-left-container'></div>
          <div className='logo-container'>
            <Link to="/">
              <img src={logo} className="navbar-logo" alt="logo"/>
            </Link>
          </div>
        <div className='navbar-middle-container'>
          <Link onMouseEnter={mouseEnterHandler}  onMouseLeave={mouseLeaveHandler} className="navbar-SHOP-Link" to="/products">
              <div className='navbar-SHOP'>SHOP</div>
              {showDropDown &&
                <ShopDropDown />
              }
          </Link>
        </div>
        <div className='navbar-right-container'>
          <div className='navbar-icon-tray'>
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
            {isLoaded && sessionLinks}
          </div>

          </div>

      </div>
    // </nav>
  );
}
export default Navigation;
