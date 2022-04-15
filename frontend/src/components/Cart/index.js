import './Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { loadProductsPage } from '../../store/products'
import { useEffect } from 'react';
import CartItem from './CartItem';

function Cart () {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.productsState)
  const cartData = useSelector(state => state.cart)
  const cartItems = Object.values(cartData)

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

  return (
    <div>
      <h1>Cart</h1>
      <div className='cart-items-container'>
      {mappedCartArray.map(item => (
        <CartItem item={item}/>
      ))}

      </div>

      <div className='cart-price-total'>
        SUBTOTAL: {Math.round(subtotal*100)/100}
      </div>
    </div>
  )
}

export default Cart
