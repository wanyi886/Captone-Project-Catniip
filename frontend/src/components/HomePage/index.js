import './HomePage.css'
import image1 from '../../images/homepage/pink-bg-cat.jpg'
import { Link, useHistory } from 'react-router-dom'

function HomePage() {

  const history= useHistory()

  const handleShopping = () => {
    history.push('/products')
  }

  return (
    <div className='home-page-body'>
      {/* <h1>HomePage</h1> */}
      <div className='home-page-first-go-shopping-area'>
        <div className='go-shopping-img-container'>
          <img src={image1}></img>
        </div>
        <div className='go-shopping-words-container'>
          <h1 className='home-page-go-shopping-h1'>Color Comes Alive!</h1>
          <h3 className='home-page-go-shopping-h3'>It’s time for a style refresh. Find your signature color with our Carriers, Toys and more, and secure a seasonal fit for you and your cat!</h3>
          <button onClick={handleShopping} className="go-shopping-btn">Go Shopping</button>
        </div>

      </div>

    </div>
  )
}

export default HomePage
