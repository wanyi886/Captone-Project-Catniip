import { csrfFetch } from "./csrf";

const GET_ORDERS = 'orders/GET_ORDERS';
const PLACE_ORDER = 'cart/PLACE_ORDER'

const getOrders = (orders) => ({
  type: GET_ORDERS,
  payload: orders
})

export const loadUserOrders = (userId) => async(dispatch) => {

  const res = await csrfFetch(`/api/orders/users/${userId}`);

  if (res.ok) {
    const orders = await res.json();
    // console.log("orders in loadUserorder thunk", orders)
    await dispatch(getOrders(orders))
  }
}

const placeOrder = (order) => ({
  type: PLACE_ORDER,
  payload: order
})

export const createOrder = (data) => async (dispatch) => {

  // console.log("hi from createOrder thunk")
  // console.log("data.userId", data.userId)

  const res = csrfFetch(`/api/orders/users/${data.userId}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })

  if (res.ok) {
    const order = await res.json();
    console.log("order from res", order)
    await dispatch(placeOrder(order))
  }
}


const initialState = {}

export default function ordersReducer(state = initialState, action) {
  const newState = {...state}
  console.log("order state", newState)

  switch (action.type) {
    case GET_ORDERS:
      // console.log("hi from get orders reducer")
      // console.log("action.payload", action.payload)
      action.payload.forEach (order => {
        newState[order.id] = order
      })

    case PLACE_ORDER:
      console.log("hi from reducer case Place-order")
      console.log("action.payload", action.payload)
      // newState[action.payload.id] = action.payload
      return newState

    default:
      return newState
  }
}
