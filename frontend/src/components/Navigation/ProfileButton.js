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

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    window.open("http://localhost:5000/api/session/logout", "_self" ); // for social login
    dispatch(sessionActions.logout()); // for regular login
  };

  return (
    <div className='profile-button-container'>
      <div onClick={openMenu} className='profile-button-icon'>
        <i className="fas fa-user-circle" />
      </div>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className="welcome">Hi, {user.displayName || user.username}</li>
          <li><Link to="/my-listing" style={{ textDecoration: 'none' }} className="li">My Listing</Link></li>
          <li><Link to="/my-orders" style={{ textDecoration: 'none' }} className="li">My Orders</Link></li>
          <li onClick={logout} className='logout-button'>Log Out</li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
