// grab the orders data from state
  // if no orders data, show "You have no orders now. Go shopping."
// grab user from state
  // if no session user, show "Unauthorized.Please log in.""
//  if user and orders are both exist
  // display each orders with order items in it.

import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';
import { loadUserOrders } from "../../store/orders";
import { useEffect } from "react";


function MyOrders () {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const userOrdersData = useSelector(state => state.orders);
  const userOrdersArray = Object.values(userOrdersData)

  useEffect(() => {
    dispatch(loadUserOrders(sessionUser.id))
  }, [dispatch])

  const handleClick = async () => {
    console.log("sessionUser.id", sessionUser.id)
    await dispatch(loadUserOrders(sessionUser.id))
    console.log("dispatched!!!")
  }

  return (
    <div className="my-orders-page-body">
      <h1 className="my-orders-h1">My Orders</h1>
      {/* {userOrdersArray.map(order => (

      ))} */}
      <button onClick={handleClick}>Get data</button>
    </div>
  )
}

export default MyOrders;
