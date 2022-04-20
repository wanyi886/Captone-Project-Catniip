// grab the orders data from state
  // if no orders data, show "You have no orders now. Go shopping."
// grab user from state
  // if no session user, show "Unauthorized.Please log in.""
//  if user and orders are both exist
  // display each orders with order items in it.

import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';
import { loadUserOrders, cancelOrder } from "../../store/orders";
import { useEffect } from "react";
import './MyOrders.css'


function MyOrders () {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const userOrdersData = useSelector(state => state.orders);
  const userOrdersArray = Object.values(userOrdersData);
  const sortListFunc = array => {
    return array
      .sort((userOrderA, userOrderB) => {
        return userOrderB.id - userOrderA.id
      })
  }

  sortListFunc(userOrdersArray);

  // console.log("userOrdersArray", userOrdersArray)
  // console.log("first ele in orders array: order", userOrdersArray[1])
  // console.log("orderItems of first order", userOrdersArray[1].OrderItems)


  useEffect(() => {
    if (sessionUser) {
      dispatch(loadUserOrders(sessionUser.id))
    }
  }, [dispatch])

  const handleCancelOrder = async (e) => {

    await dispatch(cancelOrder(e.currentTarget.id))
  }

  let component;

  if (!sessionUser) {
    component = (
      <div className="my-orders-page-body">
        <h1 className="my-orders-h1">My Orders</h1>
        <div >Please Log In to See Your Order History.</div>
      </div>
    )
  }

  if (!userOrdersData) {
    component = (
      <div className="my-orders-page-body">
        <h1 className="my-orders-h1">My Orders</h1>
        <div className="no-order-records">You haven't bought anything on Catniip yet.</div>
        <button>Return to Shop</button>
      </div>
    )
  }

  if (sessionUser && userOrdersData) {
    component = (
      <div className="my-orders-page-body">
        <h1 className="my-orders-h1">My Orders</h1>
        {userOrdersArray.map( (order, i) => {
          return (
            <div className="order-info" key={i}>
              <div className="order-number-container">
                <div className="order-number">Order # {order.id}</div>
                <div className="order-date">{new Date(order.createdAt).toDateString()}</div>
                <div className="order-total">Total: $ {order.total}</div>
                <button className="cancel-order-btn" onClick={handleCancelOrder} id={order.id}>Cancel Order</button>
              </div>
              {order.OrderItems.map((orderItem, i) => {
                return (
                  <div key={i} className="order-item-area">
                    <div className="order-item-img-container">
                      <img src={orderItem.Product.imgUrl}></img>
                    </div>
                    <div className="order-item-title-price-area">
                      <div className="order-item-title">{orderItem.Product.title}</div>
                      <div className="order-item-price">$ {orderItem.Product.price}</div>
                    </div>
                    <div className="order-item-qty">Qty: {orderItem.quantity}</div>
                    <div className="order-item-subtotal">Subtotal: $ {orderItem.subtotal}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
    </div>
    )
  }

  return component
}

export default MyOrders;
