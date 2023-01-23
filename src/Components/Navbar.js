import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className='unordered'>
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
      </nav>
    </>
  )
}
