import { updateCount, removeFromCart } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react';

function CartItem ({item}) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  console.log("cart!!", cart)
  const [finalCount, setFinalCount] = useState(cart[item.id].count)
  console.log("finalCount", finalCount)

  const handleAdd = async () => {
    const count = item.count
    await dispatch(updateCount(item.id, count + 1))
    setFinalCount(prev => prev + 1)
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
        {/* <img src={item.imgUrl}></img> */}
      </div>
      <div className='cart-item-title'>
        {item.title}
      </div>

      <div className='cart-item-price'>
        Price: {item.price}
      </div>

      <div className='cart-item-count-area'>
        <span className='cart-item-count-decreate' onClick={handleSubstract}>
          -
        </span>
        <span className='cart-item-count-number'>
          {item.count}
        </span>
        <span className='cart-item-count-increase' onClick={handleAdd}>
          +
        </span>
      </div>

      <div className='cart-item-total-price'>
        Subtotal: {total}
      </div>
      <button onClick={handleRemove}>Remove</button>

    </div>

  )
}

export default CartItem
