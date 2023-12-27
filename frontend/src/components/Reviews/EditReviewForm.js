import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { updateOneReview } from "../../store/reviews"
import StarRating from './StarRating';
import Cookies from 'js-cookie';

function EditReviewForm({ review, reviewId, hideModal }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(review.title)
  const [description, setDescription ] = useState(review.description)
  const [imgUrl, setImgUrl] = useState(review.imgUrl);
  const [errors, setErrors] = useState([]);

  const [ selectedStars, setSelectedStars ] = useState(review.score);

  const handleStarClick = (selected) => {
      setSelectedStars(selected)
  }

  const sessionUser = useSelector(state => state.session.user)


  // useEffect(() => {
  //   const errors = [];

  //   if (!title) errors.push("Title cannot be empty.")
  //   if (title.length > 32) errors.push("Title cannot be over 32 characters.")
  //   if (!description) errors.push("Description cannot be empty.")

  //   setErrors(errors)
  // }, [score, title, description])

  const validate = () => {
    const errors = [];
    if (Number(selectedStars) < 1) errors.push("Please click stars to give ratings")
    if (!title) errors.push("Title cannot be empty.")
    if (!description) errors.push("Description cannot be empty.")

    setErrors(errors)
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    // console.log(file)

    const form = new FormData();
    form.append('image', file)
    const res = await fetch('/api/file/upload', {
      method: 'POST',
      headers: {
        // can't use csrfFetch here, cause the image file can't be parsed in 'application/json'
        'XSRF-Token': Cookies.get('XSRF-TOKEN')
      },
      body: form
    })

    const { key } = await res.json();
    setImgUrl(`https://project-catniip.s3.us-west-1.amazonaws.com/${key}`)
    
  }


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // validate()
  }

  const handleDesChange = (e) => {
    setDescription(e.target.value);
    // validate()
  }


  const handleSubmit = async (e) => {
    validate()
    e.preventDefault();
    
    if(errors.length === 0 && title && description) {

      const payload = {
        id: review.id,
        userId: sessionUser?.id,
        productId: review.productId,
        score: Number(selectedStars),
        title,
        description,
        imgUrl,
      }
      // await dispatch(addOneProduct(payload))
      const result = dispatch(updateOneReview(payload))
      // await dispatch(loadProductsPage())
  
      if (result) {
        hideModal()
  
      }
    }

  }

  // return (

  //   <div className='new-review-modal'>
  //     <div className='h1-container'>
  //       <h1 className='new-review-h1'>Edit Your Review</h1>
  //     </div>
  //     <StarRating onStarClick={handleStarClick} score={review.score}/>
  //     <div className='form-container'>
  //       <form onSubmit={handleSubmit}>
  //         <ul className='error-list'>
  //           {errors && errors.map((error) => <li key={error}>{error}</li>)}
  //         </ul>

  //         <div className='form-label'>
  //           <label htmlFor='title'>Title</label>
  //         </div>
  //         <div className='form-input'>
  //           <input
  //             name="title"
  //             onChange={handleTitleChange}
  //             value={title}
  //             type='text'
  //           >
  //           </input>
  //         </div>

  //         <div className='form-label'>
  //           <label htmlFor='description'>Description</label>
  //         </div>

  //         <div className='form-input des'>
  //           <textarea
  //             name="description"
  //             onChange={handleDesChange}
  //             value={description}
  //           >
  //           </textarea>
  //         </div>

  //         <div className='new-review-btn-area'>
  //           <button type='submit' disabled={errors.length > 0 || !title || !description } className="submit">Submit</button>
  //           <button type="button" onClick={hideModal} className="cancel">Cancel</button>
  //         </div>

  //       </form>
  //     </div>

  //   </div>

  // )
  return (

    <div className='new-review-modal'>
      <div className='h1-container'>
        <h1 className='new-review-h1'>Edit Your Review</h1>
      </div>
      <StarRating onStarClick={handleStarClick} score={review.score}/>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <ul className='error-list'>
            {errors && errors.map((error) => <li key={error}>{error}</li>)}
          </ul>

          <div className='form-label'>
            <label htmlFor='upload-image'>Choose another Image</label>
          </div>
          <div className='form-input'>
            <input
              name="upload-image"
              onChange={handleUpload}
              type='file'
            >
            </input>
          </div>

          <div className='form-label'>
            <label htmlFor='title'>Title *</label>
          </div>
          <div className='form-input'>
            <input
              name="title"
              onChange={handleTitleChange}
              value={title}
              type='text'
            >
            </input>
          </div>

          <div className='form-label'>
            <label htmlFor='description'>Description *</label>
          </div>

          <div className='form-input'>
            <textarea
              name="description"
              onChange={handleDesChange}
              value={description}
            >
            </textarea>
          </div>

          <div className='new-review-btn-area'>
            {/* <button type='submit' disabled={errors.length > 0 || !title || !description || Number(selectedStars) < 1} className="submit">Submit</button> */}
            <button type='submit'  className="submit">Submit</button>
            <button type="button" onClick={hideModal} className="cancel">Cancel</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default EditReviewForm
