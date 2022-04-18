import { csrfFetch } from "./csrf";

const GET_ORDERS = 'orders/GET_ORDERS';

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

const initialState = {}

export default function ordersReducer(state = initialState, action) {
  const newState = {...state}

  switch (action.type) {
    case GET_ORDERS:
      // console.log("hi from get orders reducer")
      // console.log("action.payload", action.payload)
      action.payload.forEach (order => {
        newState[order.id] = order
      })

      return newState

    default:
      return newState
  }
}
