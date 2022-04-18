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

  // console.log("userOrdersArray", userOrdersArray)
  // console.log("first ele in orders array: order", userOrdersArray[1])
  // console.log("orderItems of first order", userOrdersArray[1].OrderItems)

  /* userOrdersArray[ order[ ]

  ]
 */
  useEffect(() => {
    dispatch(loadUserOrders(sessionUser.id))
  }, [dispatch])


  return (
    <div className="my-orders-page-body">
      <h1 className="my-orders-h1">My Orders</h1>
      {userOrdersArray.map( (order, i) => {
        return (
          <div className="order-info" key={i}>
            <div className="order-number">Order # {order.id}</div>
            <div className="order-total">$ {order.total}</div>
            {/* <div></div> */}
            {order.OrderItems.map((orderItem, i) => {
              return (
                <div key={i} className="order-item">
                  <div className="order-item-title">{orderItem.Product.title}</div>
                  <div className="order-item-qty">Qty: {orderItem.quantity}</div>
                  <div className="order-item-subtotal">Subtotal: {orderItem.subtotal}</div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default MyOrders;
