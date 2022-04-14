import './MyListing.css'
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import  AddProductForm  from '../AddProductFormModal/AddProductForm';

function MyListingPage(){

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add New Product</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddProductForm />
        </Modal>
      )}
      
    </>
  );
}

export default MyListingPage
