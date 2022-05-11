import { csrfFetch } from "./csrf";

// ========== get all reviews for a product ==========
const GET_ALL_REVIEWS = 'products/GET_ALL_REVIEWS';

const getReviews = (reviews) => ({
  type: GET_ALL_REVIEWS,
  payload: reviews
})

export const loadReviews = (productId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${productId}/reviews`);
  if (res.ok) {
    const reviews = await res.json();
    dispatch(getReviews(reviews))
  }
}

// ========== Create a review ==========
const CREATE_A_REVIEW = 'products/CREATE_A_REVIEW';

// ========== Update a review ==========
const UPDATE_A_REVIEW = 'products/UPDATE_A_REVIEW';

// ========== Delete a review ==========
const DELETE_A_REVIEW = 'products/DELETE_A_REVIEW';
 