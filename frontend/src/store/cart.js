
const ADD_TO_CART = 'cart/ADD_TO_CART'
const UPDATE_COUNT = 'cart/UPDATE_COUNT'
const REMOVE = 'cart/REMOVE'

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id
})

export const updateCount = (id, count) => {

  if (count < 1) {
    return removeFromCart(id)
  }

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

    default:
      return newState
  }
}
