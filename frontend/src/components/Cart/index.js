import './Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { loadProductsPage } from '../../store/products'
import { useEffect } from 'react';
import CartItem from './CartItem';
import carts from '../../images/carts.png'

function Cart () {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.productsState)
  const cartData = useSelector(state => state.cart)
  const cartItems = Object.values(cartData)
  console.log("cartItems", cartItems)

  const mappedCartArray = cartItems.map(item => {
    // combine cart item and product information to an object
    return {...item, ...productData[item.id]}
  })

  console.log("mappedArray", mappedCartArray)

  let subtotal = 0;
  for (let i = 0; i < mappedCartArray.length; i++) {
    subtotal += mappedCartArray[i].price * mappedCartArray[i].count
  }

  useEffect(() => {
    dispatch(loadProductsPage())
  }, [dispatch])

  let component

  if (cartItems.length > 0) {
    component = (
      <div>
      <h1>Cart</h1>
      <div className='cart-price-total'>
        SUBTOTAL: {Math.round(subtotal*100)/100}
      </div>
      <button>CHECKOUT</button>

      <div className='cart-items-container'>
      {mappedCartArray.map(item => (
        <CartItem key={item.id} item={item}/>
      ))}
      </div>
    </div>
    )
  } else {
    component = (
      <div>
        <h1>Cart</h1>
        <h2>Your Cart is Empty</h2>
        <img src={carts} alt="Cart Image"></img>
        <button>Return to Shop</button>
      </div>
    )
  }



  return component
}

export default Cart
