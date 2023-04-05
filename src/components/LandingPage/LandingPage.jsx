import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import './style.css'

const LandingPage = (props) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const myselfRef = useRef(null);

  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (obj) => {
        if (window.innerWidth < 600) {
          titleRef.current.style.transform = `translateY(${obj.scroll.y * .9}px)`
          subtitleRef.current.style.transform = `translateY(${obj.scroll.y * .9}px)`
          myselfRef.current.style.transform = `translateY(${obj.scroll.y * .9}px)`
        }
        if (window.innerWidth > 600) {
          titleRef.current.style.transform = `translateY(${obj.scroll.y * .5}px)`
          subtitleRef.current.style.transform = `translateY(${obj.scroll.y * .5}px)`
          myselfRef.current.style.transform = `translateY(${obj.scroll.y * .5}px)`
        }
        if (obj.scroll.y > 0 && obj.scroll.y < 770) {
          document.getElementById('title').innerHTML = 'Portfolio | Akash Singh';
        }
      })
    }
    return () => { };
  }, [scroll])

  return (
    <section style={props.darkModeStyle} className='landing-page-section' id='landing-page-section' data-scroll-section>

      <div className='header-text container text-center'>
        <div className="title d-flex justify-content-center" >
          <h1 ref={titleRef} data-scroll>welcome to my</h1>
        </div>

        <div className="subtitle d-flex justify-content-center" >
          <h1 ref={subtitleRef} data-scroll>Portfolio</h1>
        </div>
        <div className="myself d-flex justify-content-center" >
          <h5 ref={myselfRef} data-scroll>My name is Akash singh</h5>
        </div>
      </div>


    </section>
  )
}

export default LandingPage
