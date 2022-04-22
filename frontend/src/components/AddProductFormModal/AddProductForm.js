import './AddProductForm.css';

import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { productTypes } from './ProductTypeList'
import { addOneProduct } from '../../store/products'
import validator from 'validator';

function AddProductForm({ hideForm }) {
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState("");
  const [type, setType] = useState(productTypes[0])
  const [title, setTitle] = useState("")
  const [description, setDescription ] = useState("")
  const [detail, setDetail ] = useState("")
  const [price, setPrice] = useState(0)
  const [inventory, setInventory] = useState(1)
  const [errors, setErrors] = useState([])

  const sessionUser = useSelector(state => state.session.user)

  // const validationErrors = () => {
  //   const errors = [];
  //   if (!imgUrl) errors.push("Image URL cannot be empty.")
  //   if (!validator.isURL(imgUrl)) errors.push("Please enter a valid URL.")
  //   if (!title) errors.push("Title cannot be empty.")
  //   if (!description) errors.push("Description cannot be empty.")
  //   if (typeof price !== 'number') errors.push("Price should be a number.")
  //   if (!price || price < 0) errors.push("Price cannot be less than 0.")
  //   if (price > 1000000) errors.push("Price cannot be over 1,000,000.")
  //   if (typeof inventory !== 'number') errors.push("Inventory should be a number.")
  //   if (inventory < 1 ) errors.push("Inventory cannot be less than 1.")
  //   if (inventory > 100000) errors.push("Inventory cannot be greater than 100,000.")

  //   return errors
  // }

  useEffect(() => {
    const errors = [];
    if (!imgUrl) errors.push("Image URL cannot be empty.")
    // if (!validator.isURL(imgUrl)) errors.push("Please enter a valid URL.")
    if (!title) errors.push("Title cannot be empty.")
    if (!description) errors.push("Description cannot be empty.")
    // if (typeof price !== 'number') errors.push("Price should be a number.")
    if (!price || price < 0) errors.push("Price cannot be less than 0.")
    if (price > 1000000) errors.push("Price cannot be over 1,000,000.")
    // if (typeof inventory !== 'number') errors.push("Inventory should be a number.")
    if (inventory < 1 ) errors.push("Inventory cannot be less than 1.")
    if (inventory > 100000) errors.push("Inventory cannot be greater than 100,000.")

    setErrors(errors)
  }, [imgUrl, title, description, price, inventory])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const validateErrors = validationErrors();
    // if (validateErrors) {
    //   setErrors(validateErrors)
    // }

    const payload = {
      type,
      sellerId: sessionUser?.id,
      title,
      detail,
      description,
      imgUrl,
      price,
      inventory
    }


    const result = await dispatch(addOneProduct(payload))

    if (result) {
      hideForm()
    }

  }


  return (
    <div className='new-product-modal'>
      <h1 className='new-product-h1'>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <ul className='error-list'>
          {errors && errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
        <div className='product-form-label'>
          <label htmlFor='image'>*Product Image Url</label>
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
          <label htmlFor='title'>*Title</label>
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
          <label htmlFor='type'>*Product Type</label>
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
          <label htmlFor='description'>*Description</label>
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
          <label htmlFor='price'>*Price</label>
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
          <label htmlFor='inventory'>*Inventory</label>
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
          <button type='submit' disabled={errors.length > 0} className="new-product-submit">Submit</button>
          {/* <button type='submit'  className="new-product-submit">Submit</button> */}
          <button type="button" onClick={hideForm} className="new-product-cancel">Cancel</button>
        </div>

      </form>
    </div>
  )
}

export default AddProductForm
