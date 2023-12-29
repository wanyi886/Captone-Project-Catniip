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

      <div className="area second">
        <div className='area-words-container'>
          <h1 className='area-h1'>What is Catniip</h1>
          <p className='area-words'>Catniip is a One-Stop-Shop for happy and healthy cats. As Cat Lovers, you can buy delecate products from food to carrier. If you have products that could level up cat's life, list it here! </p>
        </div>
        <div className='area-image-container'>
          <img src={image2} alt="cat-img-2"/>
        </div>

      </div>

      <div className="area third">
        <div className='area-image-container'>
          <div className='map-responsive'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24113.64011432117!2d-122.1608442309675!3d37.44375689039738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb3471827639%3A0x75895b0f0e878d4!2sStanford%20Shopping%20Center!5e0!3m2!1sen!2sus!4v1703879619484!5m2!1sen!2sus" 
                    width="600" height="450" 
                    style={{border:0}}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
          <div className='area-words-container'>
            <h1 className='area-h1'>Contact Me</h1>
            <div className='info-container'>
              <p className='info-list'>+1 (408)-914-0796 </p>
              <p className='info-list'>wanyilee0805@gmail.com </p>
              <p className='info-list'>660 Stanford Shopping Center, Palo Alto, CA 94304 </p>
            </div>
          </div>
        </div>


    </div>
  )
}

export default HomePage
