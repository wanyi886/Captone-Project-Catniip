import { csrfFetch } from "./csrf";

// ========== get all reviews for a product ==========
const GET_REVIEWS_FOR_A_PRODUCT = 'products/GET_REVIEWS_FOR_A_PRODUCT';

const getReviews = (reviews) => ({
  type: GET_REVIEWS_FOR_A_PRODUCT,
  payload: reviews
})


export const loadReviews = (productId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/product/${productId}/`);
  if (res.ok) {
    const reviews = await res.json();
    dispatch(getReviews(reviews))
  }
}

// ========== Create a review ==========
const CREATE_A_REVIEW = 'products/CREATE_A_REVIEW';

const createReview = (review) => ({
  type: CREATE_A_REVIEW,
  payload: review
})

export const addOneReview = (data) => async(dispatch) => {

  const res = await csrfFetch(`/api/reviews`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })


  if (res.ok){
    const review = await res.json();

    await dispatch(createReview(review))
    return review
  }
}

// ========== Update a review ==========
const UPDATE_A_REVIEW = 'products/UPDATE_A_REVIEW';

const updateReview = (review) => ({
  type: UPDATE_A_REVIEW,
  payload: review
})

export const updateOneReview = (data) => async(dispatch) => {
  // console.log("hi from update thunk");
  // console.log("data passed into update thunk", data);
  const res = await csrfFetch(`/api/reviews/${data.id}`,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  // console.log("res in the update thunk", res)

  if (res.ok){
    const review = await res.json();
    console.log("updated review??", review)
    await dispatch(updateReview(review[0]))
    // if we don't return product, the result const in edit product form would be undefined
    return review[0];
  }
}

// ========== Delete a review ==========
const DELETE_A_REVIEW = 'products/DELETE_A_REVIEW';

const deleteReview = (id) => ({
  type: DELETE_A_REVIEW,
  payload: id
})

export const removeOneReview = (id) => async(dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE",
  })

  if (res.ok) {
    const reviewId = await res.json();
    dispatch(deleteReview(reviewId))
  }
}



const initialState = {};

export default function reviewsReducer(state = initialState, action) {
  const newState = {...state}

  switch (action.type) {
    case GET_REVIEWS_FOR_A_PRODUCT:
      
      action.payload.forEach(review => {
        newState[review.id] = review
      })
      return newState;

    case CREATE_A_REVIEW:
      newState[action.payload.id] = action.payload
      return newState;

    case UPDATE_A_REVIEW:
      newState[action.payload.id] = action.payload
      return newState;

    case DELETE_A_REVIEW:
      delete newState[action.payload]
      return newState

    default:
      return newState
  }
}
