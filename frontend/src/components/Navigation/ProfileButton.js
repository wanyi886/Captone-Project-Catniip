import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link, NavLink } from 'react-router-dom';
import './ProfileButton.css'


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  let url = "http://localhost:5000/api/session/logout";

  if (process.env.NODE_ENV === 'production') {
    url = "https://catniip-26d640bb2067.herokuapp.com/api/session/logout"
  }

  const logout = (e) => {
    e.preventDefault();
    // window.open("http://localhost:5000/api/session/logout", "_self" ); // for social login
    window.open(url, "_self");
    dispatch(sessionActions.logout()); // for regular login
  };


  return (
    <div className='profile-button-container' onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <div className="username-container">
        <div className="username">{user.displayName || user.username}</div>
      </div>
      <div className='profile-button-icon'>
        {user.photos? 
            <img src={ user.photos[0].value || user.photos[0] } alt="avatar" className="avatar"/> :
            <i className="fas fa-user-circle" />
        }
      </div>
      
      {showMenu && (
        <ul className="profile-dropdown">
          <li><Link to="/my-listing" style={{ textDecoration: 'none' }} className="li">My Listing</Link></li>
          <li><Link to="/my-orders" style={{ textDecoration: 'none' }} className="li">My Orders</Link></li>
          <li onClick={logout} className='logout-button'>Log Out</li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
