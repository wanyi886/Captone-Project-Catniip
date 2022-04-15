
const ADD_TO_CART = 'cart/ADD_TO_CART'
const UPDATE_COUNT = 'cart/UPDATE_COUNT'
const REMOVE = 'cart/REMOVE'

const add = (id) => ({
  type: ADD_TO_CART,
  id
})

const updateCount = (id, count) => ({
  type: UPDATE_COUNT,
  id,
  count
})

const remove = (id) => ({
  type: REMOVE,
  id
})



// ========== Reducer ==========
const initialState = {}

export default function cartReducer(state = initialState, action) {
  const newState = {...state}

  switch (action.type) {
    case ADD_TO_CART:
      return newState;

    case UPDATE_COUNT:
      return newState;

    case REMOVE:
      return newState;

    default:
      return newState
  }
}
