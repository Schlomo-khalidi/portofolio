import React, { useState } from 'react';
import {HiMenuAlt4, HiX } from 'react-icons/hi';
import {motion} from 'framer-motion'


import {images} from '../../constants'
import "./Navbar.scss"
console.log(images)

const Navbar =()=> {
  const [toogle, setToogle] = useState(false);


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo}/>
      </div>
      <ul className='app__navbar-links'>
        {["home", "about", "work", "skills", "contact"].map((item)=>(
          <li className="app__flex p-text" key={`link-${item}`}>
            <div>
              <a href={`#$(item)`}>{item}</a>
            </div>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={()=> setToogle(true)} />

        {toogle && (
            <motion.div
             whileInView={{x:[300, 0]}}
             transition={{duration:0.85, ease:'easeOut'}}
            >
              <HiX onClick={()=> setToogle(false)}/>
              {["home", "about", "work", "skills", "contact"].map((item)=>(
          <li key={item}>
            <div>
              <a href={`#$(item)`} onClick={()=> setToogle(false)}>{item}</a>
            </div>
          </li>
        ))}
            </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar