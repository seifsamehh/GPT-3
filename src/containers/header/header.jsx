import React from 'react'
import './style/header.css'
import {motion} from 'framer-motion'
import { Animator, ScrollContainer, ScrollPage, Move, ZoomOut } from "react-scroll-motion";
import people from '../../images/people.png'
import ai from '../../images/ai.png'


function header() {
  return (
    // start header
    <ScrollContainer>
      <ScrollPage page={0}>
        <header className='header section-padding' id='home'>
          <div className='container mx-auto flex items-center'>
            <Animator animation={Move(200)}>
              <div className='content'>
                <div className='special'>
                  <h1>
                    Let’s<br/> Build Something<br/> amazing with GPT-3<br/> OpenAI
                  </h1>
                </div>
                <p className='main-para my-7'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className='input-field flex mb-4'>
                  <input type="email" placeholder="Your Email Address" />
                  <motion.button className='py-4 px-7' onClick={()=>null} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Get Started</motion.button>
                </div>
                <div className='people flex items-center'>
                  <img src={people} alt="people"></img>
                  <p className='ml-2'>1,600 people requested access a visit in last 24 hours</p>
                </div>
              </div>
            </Animator>
            <Animator animation={ZoomOut()}>
              <div className='img flex justify-center'>
                <motion.img src={ai} alt="ai" 
                  drag
                  dragConstraints={{
                    top: -50,
                    left: -50,
                    right: 50,
                    bottom: 50,
                  }}/>
              </div>
            </Animator>
          </div>
        </header>
      </ScrollPage>
    </ScrollContainer>
    // end header
  )
}

export default header