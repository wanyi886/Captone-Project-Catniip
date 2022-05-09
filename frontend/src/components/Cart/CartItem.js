import { updateCount, removeFromCart } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Cart.css'

function CartItem ({item}) {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)

  const [finalCount, setFinalCount] = useState(cart[item.id].count)


  const handleAdd = async () => {
    const count = item.count

    if (count === item.inventory) {
      return;
    } else {
      await dispatch(updateCount(item.id, count + 1))
      setFinalCount(prev => prev + 1)
    }
  }

  const handleSubstract = async () => {
    const count = item.count
    if (count === 1) {
      dispatch(removeFromCart(item.id))
    } else {
      await dispatch(updateCount(item.id, count - 1))
      setFinalCount(prev => prev - 1)
    }
  }

  const handleRemove = async () => {
    await dispatch(removeFromCart(item.id))
  }

  const total = Math.round(item.price * finalCount * 100) /100

  return (
    <div className='cart-item-container'>

      <div className='cart-item-image-container'>
        <img
          src={item?.imgUrl}
          onError={(event) => {
            event.target.src = "/imgs/paw.png";
            event.onerror = null;
          }}
        />
      </div>

      <div className='cart-item-info-container'>
        <div className='cart-item-title'>
          <Link to={`/products/${item.id}/detail`}>
          {item.title}
          </Link>
        </div>
        <div className='cart-item-price'>
           ${item?.price}
        </div>
        <div className='cart-item-inventory'>
          {item?.inventory} piece(s) available
        </div>
      </div>

      <div className='cart-item-count-area'>
        <span className='cart-item-count-decrease' onClick={handleSubstract}>
          <i class="fa-solid fa-square-minus"></i>
        </span>
        <span className='cart-item-count-number'>
          {item?.count}
        </span>
        <span className='cart-item-count-increase' onClick={handleAdd}>
          <i class="fa-solid fa-square-plus"></i>
        </span>
      </div>

      <div className='cart-item-total-price-area'>
         $ {total}
      </div>

      <div className='cart-item-remove'>
        <button onClick={handleRemove} className='remove-btn'>Remove</button>
      </div>

    </div>

  )
}

export default CartItem
