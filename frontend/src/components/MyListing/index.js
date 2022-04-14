import './MyListing.css'
import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import  AddProductForm  from '../AddProductFormModal/AddProductForm';
import { useDispatch, useSelector} from 'react-redux'
import { loadProductsPage } from '../../store/products';
import * as sessionActions from '../../store/session'
import EditProductForm from '../EditProductFormModal/EditProductForm';

function MyListingPage(){
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const productsStateData = useSelector(state => state.productsState)
  const products = Object.values(productsStateData);
  const userProducts = products.filter(product => product.sellerId === sessionUser.id)

  const [showModal, setShowModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    dispatch(loadProductsPage())
  }, [dispatch])

  const handleEditClick = () => {
    setShowEditForm(true);
    setShowModal(false);
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add New Product</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddProductForm  hideForm={() => setShowModal(false)}/>
        </Modal>
      )}
      <div className='my-product-outter-container'>
          {userProducts.map(userProduct => (
            <div key={userProduct.id} className='my-product-container'>
              <div className='my-product-id'>{userProduct.id}</div>
              <div className='my-product-title'>{userProduct.title}</div>
              <div className='my-product-description'>Description: {userProduct.description}</div>
              <button type="button" onClick={handleEditClick}>Edit</button>
                {showEditForm && (
                  <Modal onClose={() => setShowEditForm(false)}>
                    <EditProductForm product={userProduct}/>
                  </Modal>
                )}
              <button type="button">Delete</button>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default MyListingPage
