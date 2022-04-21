import React from 'react'
import './style/brand.css'
import {motion} from 'framer-motion'
import google from '../../images/google.png'
import atlassian from '../../images/atlassian.png'
import slack from '../../images/slack.png'
import dropbox from '../../images/dropbox.png'
import shopify from '../../images/shopify.png'

function brand() {
  return (
    // start brand
    <section className='brands flex justify-center section-padding'>
      <div className="container">
        <div className="gallery flex">
          <motion.img src={google} alt="google" whileHover={{scale: 1.3}} whileTap={{scale: 0.8}} />
          <motion.img src={slack} alt="slack" whileHover={{scale: 1.3}} whileTap={{scale: 0.8}} />
          <motion.img src={atlassian} alt="atlassian" whileHover={{scale: 1.3}} whileTap={{scale: 0.8}} />
          <motion.img src={dropbox} alt="dropbox" whileHover={{scale: 1.3}} whileTap={{scale: 0.8}} />
          <motion.img src={shopify} alt="shopify" whileHover={{scale: 1.3}} whileTap={{scale: 0.8}} />
        </div>
      </div>
    </section>
    // end brand
  )
}

export default brand