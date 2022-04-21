import './EditProductForm.css';

import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { productTypes } from '../AddProductFormModal/ProductTypeList'
import { updateOneProduct } from '../../store/products'

function EditProductForm({ product, hideForm }) {
  const dispatch = useDispatch();
  // console.log("product passed into edit form", product)
  // console.log("product title:", product.title)
  // console.log("productS!!!", products)

  const [imgUrl, setImgUrl] = useState(product.imgUrl);
  const [type, setType] = useState(product.type)
  const [title, setTitle] = useState(product.title)
  const [description, setDescription ] = useState(product.description)
  const [detail, setDetail ] = useState(product.detail)
  const [price, setPrice] = useState(product.price)
  const [inventory, setInventory] = useState(product.inventory)
  const [errors, setErrors] = useState([])

  const sessionUser = useSelector(state => state.session.user)

  const validationErrors = () => {
    const errors = [];
    if (!imgUrl) errors.push("Image cannot be empty.")
    if (!title) errors.push("Title cannot be empty.")
    if (!description) errors.push("Description cannot be empty.")
    if (!price || price < 0) errors.push("Price cannot be less than 0.")
    if (price > 1000000) errors.push("Price cannot be over 1,000,000.")
    if (inventory < 1 || inventory > 10000) errors.push("Inventory cannot be less than 1 or greater than 10,000")

    return errors
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validationErrors();
    if (validateErrors) {
      setErrors(validateErrors)
    }

    const payload = {
      ...product,
      type,
      sellerId: sessionUser?.id,
      title,
      detail,
      description,
      imgUrl,
      price,
      inventory
    }
    // console.log("payload in form", payload)
    // await dispatch(addOneProduct(payload))

    const result = await dispatch(updateOneProduct(payload))

    if (result) {
      hideForm()
    }
  }


  return (

    <div className='new-product-modal'>
      <h1 className='new-product-h1'>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <ul className='error-list'>
          {errors && errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
        <div className='product-form-label'>
          <label htmlFor='image'>Product Image Url</label>
        </div>
        <div className='product-form-input'>
          <input
            type="text"
            name='image'
            value={imgUrl}
            onChange={e => setImgUrl(e.target.value)}
          >
          </input>
        </div>

        <div className='product-form-label'>
          <label htmlFor='title'>Title</label>
        </div>
        <div className='product-form-input'>
          <input
            name="title"
            onChange={e => setTitle(e.target.value)}
            value={title}
          >
          </input>
        </div>

        <div className='product-form-label'>
          <label htmlFor='type'>Product Type</label>
        </div>

        <div className='product-form-input'>
          <select
            name="type"
            onChange={e => setType(e.target.value)}
            value={type}
          >
            {productTypes.map(productType => (
              <option key={productType}>{productType}</option>
            ))}
          </select>
        </div>

        <div className='product-form-label'>
          <label htmlFor='description'>Description</label>
        </div>

        <div className='product-form-input des'>
          <textarea
            name="description"
            onChange={e => setDescription(e.target.value)}
            value={description}
          >
          </textarea>
        </div>

        <div className='product-form-label'>
          <label htmlFor='detail'>Detail</label>
        </div>

        <div className='product-form-input'>
          <input
            name="detail"
            onChange={e => setDetail(e.target.value)}
            value={detail}
          >
          </input>
        </div>

        <div className='product-form-label'>
          <label htmlFor='price'>Price</label>
        </div>

        <div className='product-form-input'>
          <input
            name="price"
            onChange={e => setPrice(e.target.value)}
            value={price}
          >
          </input>
        </div>

        <div className='product-form-label'>
          <label htmlFor='inventory'>Inventory</label>
        </div>

        <div className='product-form-input'>
          <input
            name="inventory"
            onChange={e => setInventory(e.target.value)}
            value={inventory}
          >
          </input>
        </div>

        <div className='new-product-btn-area'>
          {/* <button type='submit' disabled={errors.length > 0} className="new-product-submit">Submit</button> */}
          <button type='submit' className="new-product-submit">Submit</button>
          <button type="button" onClick={hideForm} className="new-product-cancel">Cancel</button>
        </div>

      </form>
    </div>
  )
}

export default EditProductForm
