import React from 'react'
import './style/possibility.css'
import {motion} from 'framer-motion'
import photo from '../../images/possibility.png'
import { Animator, ScrollContainer, ScrollPage, Move, ZoomIn } from "react-scroll-motion";

function possibility() {
  return (
    // start possibility
    <ScrollContainer>
      <ScrollPage page={3}>
        <section className='possibility section-padding flex justify-between items-center' id='possibility'>
          <Animator animation={ZoomIn()}>
            <div className="left-part">
              <motion.img src={photo} alt="possibility"
                  drag
                  dragConstraints={{
                    top: -50,
                    left: -50,
                    right: 50,
                    bottom: 50,
                  }} />
            </div>
          </Animator>
          <Animator animation={Move(-200)}>
            <div className="right-part">
              <h5>Request Early Access to Get Started</h5>
              <div class="wrapper">
                <h1>The possibilities are beyond your imagination</h1>
              </div>
              <p className='main-content mb-5'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order<br/> allow asked of.</p>
              <div>
                <p>
                  <span>Request Early Access to Get Started</span>
                </p>
              </div>
            </div>
          </Animator>
        </section>
      </ScrollPage>
    </ScrollContainer>
    // end possibility
  )
}

export default possibility