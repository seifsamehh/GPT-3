import React,{useState} from 'react'
import './style/nav.css'
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri'
import {motion} from 'framer-motion'

// for menu
const Menu = _ => (
  <>
    <a href='#home'>Home</a>
    <a href='#gpt3'>What is GPT?</a>
    <a href='#possibility'>Open AI</a>
    <a href='#features'>Case Studies</a>
    <a href='#blog'>Library</a>
  </>
)

function Navbar() {
  const [toogleMenu, setToogle] = useState(false)
  return (
    <>
    {/* start nav bar */}
      <nav className='navbar flex justify-between items-center py-8 px-24'>
        <div className='links flex flex-1 justify-start items-center'>
          <div className='logo mr-8'>
            <h1>GPT-3</h1>
          </div>
          <div className='category'>
            <a href="#home">
              Home
              <svg viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
            <a href="#gpt3">
              What is GPT?
              <svg viewBox="0 0 70 36" className='second'>
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
            <a href="#features">
              Case Studies
              <svg viewBox="0 0 70 36" className='fourth'>
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
            <a href="#possibility">
              Open AI
              <svg viewBox="0 0 70 36" className='third'>
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
            <a href="#blog">
              Library
              <svg viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
          </div>
        </div>
        <div className='sign flex'>
          <button className='sign-in mr-6'>Sign in</button>
          <motion.button className='sign-up py-4 px-7' onClick={()=>null} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Sign Up</motion.button>
        </div>
        <div className='menu ml-4'>
          {toogleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToogle(false)} /> : <RiMenu3Line color='#fff' size={27} onClick={() => setToogle(true)} /> }
          {toogleMenu && (
            <div className='menu-container flex justify-end items-end flex-col p-8 mt-4 scale-up-ver-top'>
              <div className='menu-links flex flex-col'>
                <Menu />
                <div className='menu-sign flex'>
                  <button className='menu-sign-in mr-6'>Sign in</button>
                  <motion.button className='menu-sign-up py-4 px-7' onClick={()=>null} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Sign Up</motion.button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    {/* End nav bar */}
    </>
  )
}

export default Navbar