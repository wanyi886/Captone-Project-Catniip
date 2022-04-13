import './MyListing.css'
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import  AddProductForm  from '../AddProductFormModal/AddProductForm';

function MyListingPage(){


  // return (
  //   <div>
  //     <h1>My Listing</h1>
  //     <button>Add New Product</button>
  //     <Modal>
  //       <AddProductForm/>
  //     </Modal>

  //   </div>
  // )

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
