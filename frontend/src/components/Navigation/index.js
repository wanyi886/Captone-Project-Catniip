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
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/my-listing">My Listing</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        {/* <NavLink to="/login">Log In</NavLink> */}
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </>
    );
  }

  return (
    <nav>
      <div className='navbar-container'>
        <Link to="/">
          <img src={logo} className="navbar-logo" alt="logo"/>
        </Link>
        <div className='navbar-right-container'>

        </div>
        {/* <NavLink exact to="/">Home</NavLink> */}
        {isLoaded && sessionLinks}

      </div>
    </nav>
  );
}
export default Navigation;
