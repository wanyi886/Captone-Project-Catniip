import './HomePage.css'
import image1 from '../../images/homepage/cat-with-glasses.jpg'
import image2 from '../../images/homepage/different-colors-eyes.jpg'
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
          <img src={image1} alt="cat-img-1"></img>
        </div>
        <div className='go-shopping-words-container'>
          <h1 className='home-page-go-shopping-h1'>Color Comes Alive!</h1>
          <h3 className='home-page-go-shopping-h3'>It’s time for a style refresh. Find your signature color with our Carriers, Toys and more, and secure a seasonal fit for you and your cat!</h3>
          <button onClick={handleShopping} className="go-shopping-btn">Go Shopping</button>
        </div>
      </div>

      <div className="second-area">
        <div className='second-area-words-container'>
          <h1 className='second-area-h1'>Why Catniip</h1>
          <p className='second-area-words'>Catnup is the award-winning cat lifestyle brand for happy and healthy cats. Our innovative and delicate design and premium food recipe have won over 1 million cat parents' love.</p>
        </div>
        <div className='second-area-image-container'>
          <img src={image2} alt="cat-img-2"/>
        </div>

      </div>

    </div>
  )
}

export default HomePage
