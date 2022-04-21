// frontend/src/components/Navigation/index.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import logo from '../../images/logo-removebg.png'


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

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
        <div className='navbar-logo-tray'></div>
          <Link to="/">
            <img src={logo} className="navbar-logo" alt="logo"/>
          </Link>
        <div className='navbar-right-container'>
          <div className='navbar-icon-tray'>
            <Link to="/products">
              <i class="fa-solid fa-store"></i>
            </Link>
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
