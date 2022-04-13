import { csrfFetch } from "./csrf";

const GET_ALL_PRODUCTS = 'products/GET_ALL_PRODUCTS';


const getProducts = (products) => ({
  type: GET_ALL_PRODUCTS,
  payload: products
})

export const loadProductsPage = () => async (dispatch) => {
  const res = await csrfFetch('/api/products');
  if (res.ok) {
    const products = await res.json();
    await dispatch(getProducts(products))
  }
}

const initialState = {};

export default function productsReducer(state = initialState, action) {
  const newState = {...state}

  switch (action.type) {

    case GET_ALL_PRODUCTS:
      action.payload.forEach(product => {
        newState[product.id] = product
      })
      return newState

    default:
      return newState
  }
}
