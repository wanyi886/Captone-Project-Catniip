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
    dispatch(sessionActions.logout());
  };

  return (
    <div className='profile-button-container'>
      <div onClick={openMenu} className='profile-button-icon'>
        <i className="fas fa-user-circle" />
      </div>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>Welcome, {user.username} !</li>
          <li><Link to="/my-listing">My Listing</Link></li>
          <li><Link to="/my-orders">My Orders</Link></li>
          <li onClick={logout} className='logout-button'>Log Out</li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
