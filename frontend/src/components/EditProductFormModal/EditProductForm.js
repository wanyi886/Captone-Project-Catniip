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
    if (price < 0) errors.push("Price cannot be less than 0.")
    if (!inventory) errors.push("Inventory cannot be less than 1")

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
    console.log("payload", payload)
    const result = await dispatch(updateOneProduct(payload))
    console.log("result from edit", result)
    if (result) {
      hideForm()
    }
  }


  return (
    <div>
      <h1>Edit Your Product</h1>
      <div>{product.id}</div>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors && errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
        <label htmlFor='image'>Product Image Url</label>
        <input
          type="text"
          name='image'
          value={imgUrl}
          onChange={e => setImgUrl(e.target.value)}
        >
        </input>

        <label htmlFor='title'>Title</label>
        <input
          name="title"
          onChange={e => setTitle(e.target.value)}
          value={title}
        >
        </input>

        <label htmlFor='type'>Product Type</label>
        <select
          name="type"
          onChange={e => setType(e.target.value)}
          value={type}
        >
          {productTypes.map(productType => (
            <option key={productType}>{productType}</option>
          ))}
        </select>

        <label htmlFor='description'>Description</label>
        <input
          name="description"
          onChange={e => setDescription(e.target.value)}
          value={description}
        >
        </input>

        <label htmlFor='detail'>Detail</label>
        <input
          name="detail"
          onChange={e => setDetail(e.target.value)}
          value={detail}
        >
        </input>

        <label htmlFor='price'>Price</label>
        <input
          name="price"
          onChange={e => setPrice(e.target.value)}
          value={price}
        >
        </input>

        <label htmlFor='inventory'>Inventory</label>
        <input
          name="inventory"
          onChange={e => setInventory(e.target.value)}
          value={inventory}
        >
        </input>

        <button type='submit' disabled={errors.length > 0}>Submit</button>
        <button type="button" onClick={hideForm}>Cancel</button>

      </form>
    </div>
  )
}

export default EditProductForm
