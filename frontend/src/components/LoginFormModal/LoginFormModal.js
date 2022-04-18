import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p onClick={() => setShowModal(true)} className='navbar-login'>Log In</p>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} className="login-modal">
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
