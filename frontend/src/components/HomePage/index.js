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
          <h1 className='second-area-h1'>What is Catniip</h1>
          <p className='second-area-words'>Catniip is a One-Stop-Shop for happy and healthy cats. As Cat Lovers, you can buy delecate products from food to carrier. If you have products that could level up cat's life, list it here! </p>
        </div>
        <div className='second-area-image-container'>
          <img src={image2} alt="cat-img-2"/>
        </div>

      </div>

      {/* <div className="second-area">
        <div className='second-area-words-container'>
          <h1 className='second-area-h1'>Where are we</h1>
          <p className='second-area-words'>Catniip is a One-Stop-Shop for happy and healthy cats. As Cat Lovers, you can buy delecate products from food to carrier. If you have products that could level up cat's life, list it here! </p>
        </div>
        <div className='second-area-image-container'>
          <img src={image2} alt="cat-img-2"/>
        </div>

      </div> */}

    </div>
  )
}

export default HomePage
