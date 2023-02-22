import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css' 
import { FaBars } from 'react-icons/fa'


export default function Navbar() {

  const {isMobile, setIsMobile} = useState(false)

  return (
    <>      
      <nav className='navBar'>

            <ul className={isMobile? 'navLstMobile': 'navLst'}
              onClick={()=> setIsMobile(false)}
            >
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About Me</Link>
                </li>

                <li>
                    <Link to="/projects">Projects</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                <li>
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
          
          <button className='menu' onClick={()=>setIsMobile(!isMobile)}>
            {isMobile? "" : <FaBars />}
          </button>
      </nav>
    </>
  )
}
