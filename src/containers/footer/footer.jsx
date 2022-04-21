import React from 'react'
import './style/footer.css'
import {motion} from 'framer-motion'

function footer() {
  return (
    // start footer
    <footer className='footer section-padding section-margin'>
      <div className="footer-header flex flex-col items-center justify-center">
        <div class="wrapper">
          <h1>Do you want to step in to the<br/> future before others</h1>
        </div>
        <motion.button whileHover={{boxShadow: "10px 10px 0 rgba(255, 255, 255, 0.4)"}} whileTap={{scale: 0.8}}>Request Early Access</motion.button>
      </div>
      <div className="footer-links flex justify-between items-center">
        <div className="first-col">
          <h1>GPT-3</h1>
          <p>SeifSameh, All Rights Reserved</p>
        </div>
        <div className="second-col">
          <h1>Links</h1>
          <div className="links flex flex-col">
            <a href="#home" class="underline">
                <span>Overons</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a>
            <a href="#home" class="underline">
                <span>Social Media</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a>
            <a href="#home" class="underline">
                <span>Counters</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a>
            <a href="#home" class="underline">
                <span>Contact</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a>
          </div>
        </div>
        <div className="third-col">
          <h1>Company</h1>
          <div className="links flex flex-col">
            <a href="#home" class="underline">
                <span>Terms & Conditions</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a>
            <a href="#home" class="underline">
                <span>Privacy Policy</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a>
            <a href="#home" class="underline">
                <span>Contact</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a>
          </div>
        </div>
        <div className="fourth-col">
          <h1>Get in touch</h1>
          <div className="links flex flex-col">
            <a href="#home" class="underline">
                <span>Madient Nasr</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a>
            <a href="#home" class="underline">
                <span>01116579801</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a>
            <a href="#home" class="underline">
                <span>info@payme.net</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    // end Footer
  )
}

export default footer