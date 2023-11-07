import './Reviews.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewForm from './ReviewForm';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
import { loadReviews } from '../../store/reviews';
import ConfirmModal from './ConfirmModal';
import EditReviewForm from './EditReviewForm';
import DisplayStars from './DisplayStars';



function Reviews ({productId}) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadReviews(productId))
  }, [dispatch])
  const reviewsData = useSelector(state => state.reviews);
  const reviews = Object.values(reviewsData)

  console.log("reviews in component", reviews)
  

  

  const getAverage = (reviews) => {
    if (reviews.length === 0) return 0
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
        sum += reviews[i].score
    }
    return sum/ reviews.length;
  }

  reviews?.sort( (a, b) => b['id'] - a['id'])
  
  const [showReview, setShowReview] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const showModal = () => {
    if (sessionUser) {
      setShowReview(true)
    } else {
      setShowLogin(true)
    }
  }
  
  const hideModal = () => {
    setShowReview(false)
  }

  return (
    <div className="reviews-area">
        <h1 className="review-h1">Reviews</h1>
        
        {reviews?.length > 0?
          ( <div className="reviews-outter-container">
            <div className='reviews-summary-container'>
              <div className='reviews-summary'>{getAverage(reviews).toFixed(1)}</div>
              <div className='reviews-summary-star'>
                <DisplayStars score={getAverage(reviews)}/>
              </div>
              <div className='reviews-summary-number'>{reviews.length} Ratings</div>
              <button className="review-button" onClick={showModal}>Write a review</button>
              {showReview && (
              <Modal onClose={() => setShowReview(false)} className="modal">
                <ReviewForm productId={productId} hideModal={hideModal}/>
              </Modal>
              )}
              {showLogin && (
              <Modal onClose={() => setShowLogin(false)} className="modal">
                <LoginForm hideModal={() => setShowLogin(false)}/>
              </Modal>
              )
              }
            </div>
            {reviews?.map(review => (
              <div key={review.id} className="review-container">
                <div >{review.User.username} <span className='rating-date'>on {new Date(review.updatedAt).toDateString()}</span></div>
                <div className="ratings-container">
                  {/* {getStars(review.score)} */}
                
                  <DisplayStars score={review.score}/>
                </div>
                <div className='review-title'>{review.title}</div>
                <div className='review-description'>{review.description}</div>
                <div className="review-img-container">
                  <img src={review.imgUrl}></img>
                </div>
                {sessionUser.id !== review.userId? "" : 
                <div className='button-area'>
                  <button onClick={() => setShowEditForm(true)} className='edit'>Edit</button>
                  {showEditForm && (
                    <Modal onClose={() => setShowEditForm(false)} className="modal">
                     <EditReviewForm review={review} hideModal={() => setShowEditForm(false)}/>
                    </Modal>
                  )}
                  <button onClick={() => setShowConfirm(true)} className='delete'>Delete</button>
                  {showConfirm && (
                    <Modal onClose={() => setShowConfirm(false)} className="modal">
                      <ConfirmModal reviewId={review.id} hideModal={() => setShowConfirm(false)}/>
                    </Modal>
                    )}
                </div>
                }
              </div>
            ))}
            </div>
          )
          :
          ( <div className="no-review">No Reviews for this product</div> )
        }
      </div>
  )

}

export default Reviews;
