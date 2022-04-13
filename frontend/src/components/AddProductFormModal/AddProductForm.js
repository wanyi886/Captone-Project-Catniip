import './AddProductForm.css';

import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { productTypes } from './ProductTypeList'

function AddProductForm() {
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState("");
  const [type, setType] = useState(productTypes[0])
  const [title, setTitle] = useState("")
  const [description, setDescription ] = useState("")
  const [detail, setDetail ] = useState("")
  const [price, setPrice] = useState(0)
  const [inventory, setInventory] = useState(0)

  console.log("type", type)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hi")
  }

  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
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

        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default AddProductForm
