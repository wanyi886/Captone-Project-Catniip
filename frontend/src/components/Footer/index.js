import './Footer.css'
import { Link } from 'react-router-dom'

function Footer () {
  return (
      <div className='footer-body'>
        <div className='footer-des-container'>
          <h1 className='footer-h1'>Want to know more about Catniip and Wan-Yi?</h1>
        </div>
        <div className='footer-icon-container'>
          <a href="https://www.linkedin.com/in/wan-yi-lee/" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/wanyi886/Captone-Project-Catniip" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://wanyi886.github.io/" target="_blank">
            <i class="fa-solid fa-folder-open"></i>
          </a>
        </div>
      </div>

  )
}

export default Footer
