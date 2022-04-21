import React from 'react'
import './style/features.css'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut } from "react-scroll-motion";

function features() {
  return (
  // start features
    <ScrollContainer>
      <ScrollPage page={2}>
        <Animator animation={batch(MoveOut(-300,300),Fade())}>
          <section className='features section-margin p-9 flex justify-between' id='features'>
            <div className="heading">
              <Animator animation={batch(Fade())}>
                <div class="wrapper">
                  <h1>The Future is Now and<br/> You Just Need To Realize It.<br/> Step into Future Today<br/> & Make it Happen.</h1>
                </div>
              </Animator>
              <div>
                <p>
                  <span>Request Early Access to Get Started</span>
                </p>
              </div>
            </div>
            <div className="features-content">
              <div className="one flex justify-between items-center">
                <h1>Improving end<br/> distrusts instantly </h1>
                <p>From they fine john he give of rich he.<br/> They age and draw mrs like. Improving end<br/> distrusts may instantly was household applauded.</p>
              </div>
              <div className="two flex justify-between items-center mt-6">
                <h1>Become the<br/> tended active</h1>
                <p>Considered sympathize ten uncommonly<br/> occasional assistance sufficient not. Letter of on<br/> become he tended active enable to.</p>
              </div>
              <div className="three flex justify-between items-center my-6">
                <h1>Message or am<br/> nothing</h1>
                <p>Led ask possible mistress relation elegance<br/> eat likewise debating. By message or am nothing<br/> amongst chiefly address.</p>
              </div>
              <div className="four flex justify-between items-center">
                <h1>Really boy law<br/> county</h1>
                <p>Really boy law county she unable her sister. Feet<br/> you off its like like six. Among sex are leave<br/> law built now. In built table in an rapid blush.</p>
              </div>
            </div>
          </section>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
    // end features
  )
}

export default features