import { productTypes } from '../AddProductFormModal/ProductTypeList'
import './ShopDropDown.css'
import { Link } from 'react-router-dom'

function ShopDropDown () {

  return (
    <div className="shop-dropdown-container">
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
  )
}

export default ShopDropDown;
