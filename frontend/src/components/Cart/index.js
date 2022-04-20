import './Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loadProductsPage } from '../../store/products'
import { loadUserOrders, createOrder } from '../../store/orders';
import { useEffect } from 'react';
import CartItem from './CartItem';
import carts from '../../images/carts.png'

function Cart () {
  const dispatch = useDispatch();
  const history = useHistory()
  const productData = useSelector(state => state.productsState)
  const cartData = useSelector(state => state.cart)
  const cartItems = Object.values(cartData)
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id
  // console.log("userId", userId)
  // console.log("cartItems", cartItems)

  const mappedCartArray = cartItems.map(item => {
    // combine cart item and product information to an object
    return {...item, ...productData[item.id]}
  })

  // console.log("mappedArray", mappedCartArray)


  const handleCheckout = async () => {

    const orderItems = mappedCartArray.map(item => {
      return { productId: item.id, quantity: item.count, subtotal: Math.round(item.price * item.count * 100)/100 }
    })

    const data = {
      userId,
      total: Math.round(subtotal*100)/100,
      orderItems
    }

    await dispatch(createOrder(data))
    history.push('/my-orders')
  }

  let subtotal = 0;
  for (let i = 0; i < mappedCartArray.length; i++) {
    subtotal += mappedCartArray[i].price * mappedCartArray[i].count
  }

  useEffect(() => {
    dispatch(loadProductsPage());
    dispatch(loadUserOrders(userId))
  }, [dispatch])

  const handleContinue = () => {
    history.push('/products')
  }

  let component

  if (cartItems.length > 0) {
    component = (
      <div className='cart-container'>
        <h1 className='cart-h1'>Shopping Cart</h1>
        <div className='cart-price-total'>
          SUBTOTAL:   $ {Math.round(subtotal*100)/100}
        </div>
        <div className='button-area'>
          <button className='cart-continue' onClick={handleContinue}>
            <i class="fa-solid fa-paw"></i>
            CONTINUE SHOPPING
          </button>
          <button className='cart-checkout' onClick={handleCheckout}>
            <i class="fa-solid fa-paw"></i>
            CHECKOUT
          </button>
        </div>

        <div className='cart-items-container'>
        {mappedCartArray.map(item => (
          <CartItem key={item.id} item={item}/>
        ))}
        </div>
      </div>
    )
  } else {
    component = (
      <div className='empty-cart-container'>
        <h1 className='cart-h1'>Shopping Cart</h1>
        <h2 className='cart-h2'>Your Cart is Empty</h2>
        <button className='empty-cart-btn'>
          <Link to="/products" className='empty-cart-btn-link'>
            <i class="fa-solid fa-paw"></i>
            Return to Shop
          </Link>
        </button>
        <div className='empty-cart-img'>
          <img src={carts} alt="Cart Image"></img>
        </div>
      </div>
    )
  }



  return component
}

export default Cart
