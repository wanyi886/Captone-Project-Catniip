import './Reviews.css';
import React, { useEffect, useState, useCallback } from 'react';
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
  const allReviews = Object.values(reviewsData);
  const reviews = allReviews.filter( (review) => review.productId === Number(productId))


  // console.log("reviews in component", reviews);
  // console.log("test", test)
  

  

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

  // cannot pass prop for every indivisual modal, so we need to store the data in the variable, and assign it to the prop
  const [modalData, setModalData] = useState(null)

  const showModal = () => {
    if (sessionUser) {
      setShowReview(true)
    } else {
      setShowLogin(true)
    }
  }
  
  // use useCallback hook to memoize the function, make sure the function reference remains the same unless it's changed
  const handleEditClick = useCallback((review) => {
    setShowEditForm(true);
    setModalData(review);
  }, []);


  const handleConfirmClick = useCallback((review) => {
    setShowConfirm(true);
    setModalData(review)
  }, [])

  const hideModal = () => {
    setShowReview(false);
    
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
                  <DisplayStars score={review.score}/>
                </div>
                <div className='review-title'>{review.title}</div>
                <div className='review-description'>{review.description}</div>
                <div className={review.imgUrl !== ""? "review-img-container" : ""}>
                  <img src={review.imgUrl}></img>
                </div>

                {/* <div className="review-img-container">
                  <img src={review.imgUrl}></img>
                </div> */}
                
                {( !sessionUser || sessionUser.id !== review.userId )? "" : 
                <div className='button-area'>
                  <button onClick={() => handleEditClick(review)} className='edit'>Edit</button>
                  {showEditForm && (
                    <Modal onClose={() => setShowEditForm(false)} className="modal" reviewId={review.id}>
                     <EditReviewForm review={modalData} hideModal={() => setShowEditForm(false)}/>
                    </Modal>
                  )}
                  <button onClick={() => handleConfirmClick(review)} className='delete'>Delete</button>
                  {showConfirm && (
                    <Modal onClose={() => setShowConfirm(false)} className="modal">
                      <ConfirmModal review={modalData} hideModal={() => setShowConfirm(false)}/>
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
