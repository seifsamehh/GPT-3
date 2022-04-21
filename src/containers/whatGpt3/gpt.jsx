import React from 'react'
import './style/gpt.css'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, MoveIn, ZoomIn} from "react-scroll-motion";

function gpt() {
  return (
    // start gpt
    <ScrollContainer>
      <ScrollPage page={1}>
        <section className='gpt section-margin p-9 flex justify-center flex-col' id='gpt3'>
        <div className='upper flex justify-between'>
          <Animator animation={batch(Fade(),ZoomIn(10))}>
            <h1>What is GPT-3</h1>
          </Animator>
          <Animator animation={MoveIn(400,200)}>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His <br /> defective nor convinced residence own. Connection has put impossible own apartments<br/> boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
          </Animator>
        </div>
        <Animator animation={Fade()}>
          <div className="middle flex justify-between py-40">
            <Animator animation={MoveIn(200,0)}>
              <div class="wrapper">
                <h1>The possibilities are beyond<br/> your imagination</h1>
              </div>
            </Animator>
            <div class="Title">
              <h1>Explore The Library</h1>
              <div class="Title__underline"></div>
              <div aria-hidden class="Title__filled">Explore The Library</div>
            </div>
          </div>
        </Animator>
        <Animator animation={Move(100,400)}>
          <div className="last flex justify-between">
            <div className="box">
              <h1>Chatbots</h1>
              <p>We so opinion friends me message as<br/> delight. Whole front do of plate heard oh ought. </p>
            </div>
            <div className="box">
              <h1>Knowledge<br/>base</h1>
              <p>At jointure ladyship an insisted so humanity<br/> he. Friendly bachelor entrance to on by. As put impossible own apartments</p>
            </div>
            <div className="box">
              <h1>Education</h1>
              <p>At jointure ladyship an insisted so humanity<br/> he. Friendly bachelor entrance to on by. As put impossible own apartments</p>
            </div>
          </div>
        </Animator>
      </section>
      </ScrollPage>
    </ScrollContainer>
    // end gpt
  )
}

export default gpt