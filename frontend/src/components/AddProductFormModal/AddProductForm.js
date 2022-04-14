import './AddProductForm.css';

import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { productTypes } from './ProductTypeList'
import { addOneProduct } from '../../store/products'

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
    const result = await dispatch(addOneProduct(payload))
    if (result) {
      hideForm()
    }
  }


  return (
    <div>
      <h1>Add New Product</h1>
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

export default AddProductForm
