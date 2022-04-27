import { productTypes } from '../AddProductFormModal/ProductTypeList'
import './ShopDropDown.css'

function ShopDropDown () {

  return (
    <div className="shop-dropdown-container">
      <ul className='shop-dropdown-ul'>
        {productTypes.map( type => (
          // TODO: Link to the pages


          <li key={type}>{type}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShopDropDown;
