import React from 'react'
import { Link } from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css' 
import { FaBars } from 'react-icons/fa'


export default function Navbar() {
  return (
    <>
      <FaBars className='menu'/>
      <nav className='navBar'>
        <div className='navList'>
            <ul>
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
          </div> 
      </nav>
    </>
  )
}
