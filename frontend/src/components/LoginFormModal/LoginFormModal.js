import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p onClick={() => setShowModal(true)}>Log In</p>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} className="login-modal">
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
