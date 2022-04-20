import { csrfFetch } from "./csrf";


// ========== get all products ==========
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

// ========== get one product ==========
const GET_ONE_PRODUCT = 'products/GET_ONE_PRODUCT';

const getOneProduct = (product) => ({
  type: GET_ONE_PRODUCT,
  payload: product
})

export const loadOneProduct = (id) => async (dispatch) => {

  const res = await csrfFetch(`/api/products/${id}/detail`);
  if (res.ok) {
    const product = await res.json();
    await dispatch(getOneProduct(product))
  }
}

// ========== create one product ==========
const CREATE_A_PRODUCT = 'products/CREATE_A_PRODUCT';

const createProduct = (product) => ({
  type: CREATE_A_PRODUCT,
  payload: product
})

export const addOneProduct = (data) => async(dispatch) => {

  const res = await csrfFetch('/api/products',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })


  if (res.ok){
    const product = await res.json();
    
    await dispatch(createProduct(product))
    return product
  }
}

// ========== update one product ==========
const UPDATE_A_PRODUCT = 'products/UPDATE_A_PRODUCT';

const updateProduct = (product) => ({
  type: UPDATE_A_PRODUCT,
  payload: product
})

export const updateOneProduct = (data) => async(dispatch) => {
  // console.log("hi from update thunk");
  // console.log("data passed into update thunk", data);
  const res = await csrfFetch(`/api/products/${data.id}`,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  // console.log("res in the update thunk", res)

  if (res.ok){
    const product = await res.json();
    await dispatch(updateProduct(product))
    // if we don't return product, the result const in edit product form would be undefined
    return product;
  }
}

// ========== delete one product ==========
const DELETE_A_PRODUCT = 'products/DELETE_A_PRODUCT';

const deleteProduct = (id) => ({
  type: DELETE_A_PRODUCT,
  payload: id
})

export const removeOneProduct = (id) => async(dispatch) => {
  const res = await csrfFetch(`/api/products/${id}`, {
    method: "DELETE",
  })

  if (res.ok) {
    const productId = await res.json();
    await dispatch(deleteProduct(productId))
  }
}

// ========== Reducer ==========

const initialState = {};

export default function productsReducer(state = initialState, action) {
  const newState = {...state}

  switch (action.type) {

    case GET_ALL_PRODUCTS:
      action.payload.forEach(product => {
        newState[product.id] = product
      })
      return newState;

    case GET_ONE_PRODUCT:
      newState[action.payload.id] = action.payload
      return newState;

    case CREATE_A_PRODUCT:
      newState[action.payload.id] = action.payload
      return newState;

    case UPDATE_A_PRODUCT:
      newState[action.payload.id] = action.payload
      return newState;

    case DELETE_A_PRODUCT:
      delete newState[action.payload]
      return newState

    default:
      return newState
  }
}
