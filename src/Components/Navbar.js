import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css' 
import { FaBars } from 'react-icons/fa'


export default function Navbar() {

  const [small, setSmall] = useState(false)

  return (
    <>      
      <nav className='navBar'>

        <img className='logo' width='35px' src='https://www.dhresource.com/0x0s/f2-albu-g10-M00-A1-40-rBVaVlwPMKmAUWbKAALis07S17Q786.jpg/tiger-sticker-horror-face-animal-car-car.jpg' alt='logo'></img>

            <ul className={small? 'navLstMobile': 'navLst'}
              onClick={()=> setSmall(false)}
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
          
          <button className='menu' onClick={()=>setSmall(!small)}>
            {small? ("") : (<FaBars />)}
          </button>
      </nav>
    </>
  )
}
