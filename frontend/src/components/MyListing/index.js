import './MyListing.css'
import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import  AddProductForm  from '../AddProductFormModal/AddProductForm';
import { useDispatch, useSelector} from 'react-redux'
import { loadProductsPage } from '../../store/products';
import * as sessionActions from '../../store/session'
import EditProductForm from '../EditProductFormModal/EditProductForm';
import ConfirmModal from './ConfirmModal'

function MyListingPage(){
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const productsStateData = useSelector(state => state.productsState)
  const products = Object.values(productsStateData);
  const userProducts = products.filter(product => product.sellerId === sessionUser.id)

  const [showModal, setShowModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const [currentProduct, setCurrentProduct] = useState("")

  useEffect(() => {
    dispatch(loadProductsPage())
  }, [dispatch])

  const handleEditClick = (e) => {
    setShowEditForm(true);
    // pass in the click event, to get the event.target.id, which is the index of the userProducts array
    setCurrentProduct(userProducts[e.target.id])
  }

  const handleDeleteClick = (e) => {
    setShowConfirmModal(true);
    console.log("userProducts", userProducts)
    console.log("e.target", e.target)
    console.log("product clicked", userProducts[e.target.id])
    setCurrentProduct(userProducts[e.target.id])
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
          {userProducts.map((userProduct, index )=> (
            <div key={userProduct.id} className='my-product-container'>
              <div className='my-product-id'>{userProduct.id}</div>
              <div className='my-product-title'>{userProduct.title}</div>
              <div className='my-product-description'>Description: {userProduct.description}</div>
              <button type="button" onClick={(e) => handleEditClick(e)} id={index}>Edit</button>
              <button type="button" onClick={(e) => handleDeleteClick(e)} id={index}>Delete</button>
            </div>
          ))
        }
         {showEditForm && (
            <Modal onClose={() => setShowEditForm(false)}>
              <EditProductForm product={currentProduct} hideForm={() => setShowEditForm(false)}/>
            </Modal>
          )}
         {showConfirmModal && (
           <Modal onClose={() => setShowConfirmModal(false)}>
              <ConfirmModal product={currentProduct} hideForm={() => setShowConfirmModal(false)}/>
           </Modal>
         )}

      </div>
    </>
  );
}

export default MyListingPage
