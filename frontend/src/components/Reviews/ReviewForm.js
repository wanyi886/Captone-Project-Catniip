
import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

function ReviewForm({ productId }) {
  const dispatch = useDispatch();

  const [score, setScore] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription ] = useState("")
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState([])

  const sessionUser = useSelector(state => state.session.user)


  useEffect(() => {
    const errors = [];

    const isImage = (url) => {
      return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }

    if (!isImage(imgUrl) || !validator.isURL(imgUrl)) errors.push("Please enter a valid image URL.")
    if (!title) errors.push("Title cannot be empty.")
    if (title.length > 32) errors.push("Title cannot be over 32 characters.")
    if (!description) errors.push("Description cannot be empty.")

    setErrors(errors)
  }, [imgUrl, title, description])


  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const payload = {
      userId: sessionUser?.id,
      productId: productId,
      score,
      title,
      description,
      imgUrl,
    }
    // console.log("payload in form", payload)
    // await dispatch(addOneProduct(payload))
  }

  return (

    <div className='new-review-modal'>
      <h1 className='new-review-h1'>Write a Review</h1>
      <form onSubmit={handleSubmit}>
        <ul className='error-list'>
          {errors && errors.map((error) => <li key={error}>{error}</li>)}
        </ul>


        <div className='form-label'>
          <label htmlFor='score'>Score</label>
        </div>

        <div className='form-input'>
          <input
            name="score"
            onChange={e => setScore(e.target.value)}
            value={score}
          >
          </input>
        </div>

        <div className='form-label'>
          <label htmlFor='image'>Upload Image</label>
        </div>
        <div className='input'>
          <input
            type="text"
            name='image'
            value={imgUrl}
            onChange={e => setImgUrl(e.target.value)}
          >
          </input>
        </div>

        <div className='form-label'>
          <label htmlFor='title'>Title*</label>
        </div>
        <div className='form-input'>
          <input
            name="title"
            onChange={e => setTitle(e.target.value)}
            value={title}
          >
          </input>
        </div>

        <div className='form-label'>
          <label htmlFor='description'>Description*</label>
        </div>

        <div className='form-input des'>
          <textarea
            name="description"
            onChange={e => setDescription(e.target.value)}
            value={description}
          >
          </textarea>
        </div>

        <div className='new-product-btn-area'>
          <button type='submit' disabled={errors.length > 0} className="submit">Submit</button>
          <button type="button" className="cancel">Cancel</button>
        </div>

      </form>
    </div>
  )
}

export default ReviewForm
