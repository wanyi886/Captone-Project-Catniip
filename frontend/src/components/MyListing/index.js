import './MyListing.css'
import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import  AddProductForm  from '../AddProductFormModal/AddProductForm';
import { useDispatch, useSelector} from 'react-redux'
import { loadProductsPage } from '../../store/products';
import * as sessionActions from '../../store/session'
import EditProductForm from '../EditProductFormModal/EditProductForm';
import ConfirmModal from './ConfirmModal'
import paw from '../../images/paw.png'

function MyListingPage(){
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const productsStateData = useSelector(state => state.productsState)
  const products = Object.values(productsStateData);

  const userProducts = products.filter(product => product.sellerId === sessionUser?.id)


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
    setCurrentProduct(userProducts[e.currentTarget.id])
  }

  const handleDeleteClick = async (e) => {
    setShowConfirmModal(true);
    // console.log("userProducts", userProducts)
    // console.log("e.target", e.target)
    // console.log("product clicked", userProducts[e.target.id])
    setCurrentProduct(userProducts[e.currentTarget.id])
    await dispatch(loadProductsPage())
  }


  let component;

  if (!sessionUser) {
    component = (
      <div className='my-listing-page-body'>
        <h1 className='my-listing-h1'>My Listing</h1>
        <p className='my-listing-not-login'>Please Log In to See Your Listing!</p>
      </div>
    )
  } else {
    component = (
      <div className='my-listing-page-body'>
      <h1 className='my-listing-h1'>My Listing</h1>
      <button onClick={() => setShowModal(true)} className='add-product-btn'>
        <i class="fa-solid fa-plus"></i>
        Add New Product
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddProductForm  hideForm={() => setShowModal(false)}/>
        </Modal>
      )}
      <div className='my-products-outter-container'>
          {userProducts.map((userProduct, index )=> (
            <div key={userProduct.id} className='my-product-container'>
              {/* <div className='my-product-id'>Product #{userProduct.id}</div> */}
              <div className='my-product-img-container'>
                <img src={userProduct.imgUrl}
                    //  onError={(e) => (e.target.onerror = null, e.target.src={paw})}
                     ></img>
              </div>
              <div className='my-product-title'>{userProduct.title}</div>
              <div className='my-product-price'>Price: {userProduct.price}</div>
              <div className='my-product-inventory'>Inventory: {userProduct.inventory}</div>
              <div className='my-product-sold'>Sold: Coming soon{}</div>
              <div className='my-listing-button-area'>
                <button type="button" className='my-listing-edit' onClick={(e) => handleEditClick(e)} id={index}>
                  <i class="fa-solid fa-pen"></i>
                  Edit
                </button>
                <button type="button" className='my-listing-delete' onClick={(e) => handleDeleteClick(e)} id={index}>
                  <i class="fa-solid fa-trash"></i>
                  Delete
                </button>
              </div>
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
    </div>
    )
  }


  // return (
  //   <div className='my-listing-page-body'>
  //     <h1 className='my-listing-h1'>My Listing</h1>
  //     <button onClick={() => setShowModal(true)} className='add-product-btn'>
  //       <i class="fa-solid fa-plus"></i>
  //       Add New Product
  //     </button>
  //     {showModal && (
  //       <Modal onClose={() => setShowModal(false)}>
  //         <AddProductForm  hideForm={() => setShowModal(false)}/>
  //       </Modal>
  //     )}
  //     <div className='my-products-outter-container'>
  //         {userProducts.map((userProduct, index )=> (
  //           <div key={userProduct.id} className='my-product-container'>
  //             {/* <div className='my-product-id'>Product #{userProduct.id}</div> */}
  //             <div className='my-product-img-container'>
  //               <img src={userProduct.imgUrl}></img>
  //             </div>
  //             <div className='my-product-title'>{userProduct.title}</div>
  //             <div className='my-product-price'>Price: {userProduct.price}</div>
  //             <div className='my-product-inventory'>Inventory: {userProduct.inventory}</div>
  //             <div className='my-product-sold'>Sold: Coming soon{}</div>
  //             <div className='my-listing-button-area'>
  //               <button type="button" className='my-listing-edit' onClick={(e) => handleEditClick(e)} id={index}>
  //                 <i class="fa-solid fa-pen"></i>
  //                 Edit
  //               </button>
  //               <button type="button" className='my-listing-delete' onClick={(e) => handleDeleteClick(e)} id={index}>
  //                 <i class="fa-solid fa-trash"></i>
  //                 Delete
  //               </button>
  //             </div>
  //           </div>
  //         ))
  //       }
  //        {showEditForm && (
  //           <Modal onClose={() => setShowEditForm(false)}>
  //             <EditProductForm product={currentProduct} hideForm={() => setShowEditForm(false)}/>
  //           </Modal>
  //         )}
  //        {showConfirmModal && (
  //          <Modal onClose={() => setShowConfirmModal(false)}>
  //             <ConfirmModal product={currentProduct} hideForm={() => setShowConfirmModal(false)}/>
  //          </Modal>
  //        )}

  //     </div>
  //   </div>
  // );
  return component;
}

export default MyListingPage
