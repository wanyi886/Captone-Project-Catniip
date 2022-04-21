import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeOneProduct } from '../../store/products'
import './ConfirmModal.css'

function ConfirmModal({ product, hideForm }) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(removeOneProduct(product.id))
    hideForm()
  }

  return (
    <div className='delete-product-modal'>

      <h1 className='delete-product-title'>
        Delete Product
      </h1>

      <div className='delete-product-confirm'>
        Are you sure you want to delete this product?
      </div>

      <div className='delete-product-modal-buttons'>
        <button id='delete-product-modal-delete' onClick={deleteHandler}>Delete</button>
        <button id='delete-product-modal-cancel' onClick={hideForm}>Cancel</button>
      </div>

    </div>

  )
}

export default ConfirmModal;
