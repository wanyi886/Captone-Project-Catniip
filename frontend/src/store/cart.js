import { csrfFetch } from "./csrf"

const ADD_TO_CART = 'cart/ADD_TO_CART'
const UPDATE_COUNT = 'cart/UPDATE_COUNT'
const REMOVE = 'cart/REMOVE'
const CLEAR = 'cart/CLEAR'
const PLACE_ORDER = 'cart/PLACE_ORDER'

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id
})

export const updateCount = (id, count) => {

  return {
    type: UPDATE_COUNT,
    id,
    count
  }
}

export const removeFromCart = (id) => ({
  type: REMOVE,
  id
})

export const clearCart = () => ({
  type: CLEAR
})

// const placeOrder = (order) => ({
//   type: PLACE_ORDER,
//   payload: order
// })

// export const createOrder = (data) => async (dispatch) => {

//   console.log("hi from createOrder thunk")
//   console.log("data.userId", data.userId)

//   const res = csrfFetch(`/api/orders/users/${data.userId}`, {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(data)
//   })

//   if (res.ok) {
//     const order = await res.json();
//     await dispatch(placeOrder(order))
//   }
// }


// ========== Reducer ==========
const initialState = JSON.parse(window.localStorage.getItem('cart')) || {}

export default function cartReducer(state = initialState, action) {
  const newState = {...state}

  switch (action.type) {
    case ADD_TO_CART:
      newState[action.id] = { id: action.id, count: 1}
      window.localStorage.setItem('cart', JSON.stringify(newState))
      return newState;

    case UPDATE_COUNT:
      newState[action.id].count = action.count;
      window.localStorage.setItem('cart', JSON.stringify(newState))
      return newState;

    case REMOVE:
      delete newState[action.id]
      window.localStorage.setItem('cart', JSON.stringify(newState))
      return newState;

    case CLEAR:
      const emptyState = {}
      window.localStorage.setItem('cart', JSON.stringify(emptyState))
      return emptyState

    // case PLACE_ORDER:
    //   console.log('Hi from place order reducer case')
    //   // TODO: clear out the items in cart????
    //   return newState;

    default:
      return newState
  }
}
