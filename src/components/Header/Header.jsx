import React from 'react'
import { useEffect } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import './style.css'


const Header = () => {
  const { scroll } = useLocomotiveScroll();
  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (obj) => {
        let colRef = document.querySelectorAll('.scroll')

        for (let i = 0; i < colRef.length; i++) {
          const element = colRef[i];
          element.style.transform = `translateX(-${obj.scroll.y*((i+1)*.5)}px)`
        }
      })
    }
    return () => {};
  }, [scroll])

  return (
    <section className='header-container' id='home-section' data-scroll-section>
      <ul className='header-menu'>
        <li className="scroll" data-scroll ><a data-scroll-to href="#home-section">Intro</a></li>
        <li className="scroll" data-scroll ><a data-scroll-to href="#about-section">About</a></li>
        <li className="scroll" data-scroll ><a data-scroll-to href="#tech-section">Skills</a></li>
        <li className="scroll" data-scroll ><a data-scroll-to href="#project-section">Projects</a></li>
        <li className="scroll" data-scroll ><a data-scroll-to href="#contact-section">Contact</a></li>
      </ul>
    </section>
  )
}

export default Header
