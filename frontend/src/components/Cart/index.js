import './Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { loadProductsPage } from '../../store/products'
import { useEffect } from 'react';

function Cart () {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsState)

  useEffect(() => {
    dispatch(loadProductsPage())
  }, [dispatch])

  return (
    <div>
      <h1>Cart</h1>
    </div>
  )
}

export default Cart
