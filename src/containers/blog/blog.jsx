import React from 'react'
import './style/blog.css'
import blog1 from '../../images/blog01.png'
import blog2 from '../../images/blog02.png'
import blog3 from '../../images/blog03.png'
import blog4 from '../../images/blog04.png'
import blog5 from '../../images/blog05.png'
import { Animator, ScrollContainer, ScrollPage, batch, MoveOut, ZoomOut } from "react-scroll-motion";

function blog() {
  return (
    // start blog
    <>
    <ScrollContainer>
      <ScrollPage page={5}>
        <Animator animation={batch(MoveOut(-500,500),ZoomOut())}>
          <div class="wrapperr">
            <h1>A lot is happening,<br/> We are blogging about it.</h1>
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
      <section className='blog section-margin flex items-center justify-between' id='blog'>
        <div className="left">
            <div className="card mr-9">
              <img src={blog1} alt="first blog" />
              <h5 className='mt-10 pl-4'>Sep 26, 2021</h5>
              <p className='mt-14 pl-4 pb-4'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
            </div>
        </div>
        <div className="right">
          <div className="up flex justify-between">
            <div className="card-1 mr-6">
              <img src={blog2} alt="second blog" />
              <h5 className='mt-10 pl-4'>Sep 26, 2021</h5>
              <p className='mt-14 pl-4 pb-4'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
            </div>
            <div className="card-2">
              <img src={blog3} alt="third blog" />
              <h5 className='mt-10 pl-4'>Sep 26, 2021</h5>
              <p className='mt-14 pl-4 pb-4'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
            </div>
          </div>
          <div className="down flex justify-between">
            <div className="card-1 mr-6">
              <img src={blog4} alt="second blog" />
              <h5 className='mt-10 pl-4'>Sep 26, 2021</h5>
              <p className='mt-14 pl-4 pb-4'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
            </div>
            <div className="card-2">
              <img src={blog5} alt="third blog" />
              <h5 className='mt-10 pl-4'>Sep 26, 2021</h5>
              <p className='mt-14 pl-4 pb-4'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
            </div>
          </div>
        </div>
      </section>
    </>
    // end blog
  )
}

export default blog