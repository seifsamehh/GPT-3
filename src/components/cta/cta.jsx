import React from 'react'
import './style/style.css'
import {motion} from 'framer-motion'
import { Animator, ScrollContainer, ScrollPage, ZoomOut } from "react-scroll-motion";

function cta() {
  return (
    // start cta
    <ScrollContainer>
      <ScrollPage page={4}>
        <Animator animation={ZoomOut()}>
          <section className='cta section-margin flex justify-between items-center'>
            <div className="left-content">
              <h5>Request Early Access to Get Started</h5>
              <p>Register today & start exploring the endless possiblities.</p>
            </div>
            <motion.button whileHover={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.4)"}} whileTap={{scale: 0.8}}>Get Started</motion.button>
          </section>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
    // end cta
  )
}

export default cta