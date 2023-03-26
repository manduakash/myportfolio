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
    <section className='header-container' data-scroll-section>
      <ul className='header-menu'>
        <li className="scroll" data-scroll>Intro</li>
        <li className="scroll" data-scroll>About</li>
        <li className="scroll" data-scroll>Skills</li>
        <li className="scroll" data-scroll>Projects</li>
        <li className="scroll" data-scroll>Contact</li>
      </ul>
    </section>
  )
}

export default Header
