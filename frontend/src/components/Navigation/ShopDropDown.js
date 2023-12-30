import { productTypes } from '../AddProductFormModal/ProductTypeList'
import './ShopDropDown.css'
import { Link } from 'react-router-dom'

function ShopDropDown () {

  return (
    <div className="shop-dropdown-container">
      <div className='shop-dropdown-items'>
          <ul className='shop-dropdown-ul'>
            <Link to='/products'>
              <li>All Products</li>
            </Link>
            {productTypes.map( type => (
              <Link key={type} to={`/products/${type}`}>
                <li >{type}</li>
              </Link>

            ))}
          </ul>
      </div>
    </div>
  )
}

export default ShopDropDown;
