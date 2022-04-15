import { updateCount, removeFromCart } from '../../store/cart'

function CartItem ({item}) {
  return (
    <div className='cart-item-container'>
      <div className='cart-item-image-container'>
        {/* <img src={item.imgUrl}></img> */}
      </div>
      <div className='cart-item-title'>
        {item.title}
      </div>

      <div className='cart-item-price'>
        {item.price}
      </div>

      <div className='cart-item-count-area'>
        <span className='cart-item-count-decreate'>
          -
        </span>
        <span className='cart-item-count-number'>
          {item.count}
        </span>
        <span className='cart-item-count-increase'>
          +
        </span>
      </div>

    </div>

  )
}

export default CartItem
