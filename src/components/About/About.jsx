import React from 'react'
import { useEffect, useRef } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Typed from 'react-typed'
import './style.css'

const About = () => {
  const titleRef2 = useRef(null);
  const subtitleRef2 = useRef(null);
  const details = useRef(null);

  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (obj) => {
        let temp = obj.scroll.y-770;
        titleRef2.current.style.transform = `translateY(${temp * 0.5}px)`
        subtitleRef2.current.style.transform = `translateY(${temp * 0.5}px)`
        details.current.style.transform = `translateX(${temp * .5}px)`
        if(obj.scroll.y>770 && obj.scroll.y<1000){
          document.getElementById('title').innerText = 'Portfolio | About';
        }
      })
    }
    return () => { };
  }, [scroll])
  return (

    <section className='about-section' id='about-section' data-scroll-section>
      <div className='about-text container text-center'>
        <div className="title2 d-flex justify-content-start py-auto" >
          <h1 ref={titleRef2} data-scroll>I am a</h1>
        </div>

        <div className="subtitle2 d-flex justify-content-start py-auto" >
          <h1 ref={subtitleRef2} data-scroll data-scroll-repeat>
            <Typed strings={[`web <span style="color: #ffffff00; -webkit-text-stroke: 2px red;">developer</span>`, `react <span style="color: #ffffff00; -webkit-text-stroke: 2px red;">developer</span>`, 'web designer', `full-stack <span style="color: #ffffff00; -webkit-text-stroke: 2px red;">developer</span>`, `mern-stack <span style="color: #ffffff00; -webkit-text-stroke: 2px red;">developer</span>`]}
              typeSpeed={60} backSpeed={40} loop>
            </Typed>
          </h1>
        </div>
      </div>
        <div ref={details} data-scroll className="details-section text-muted d-flex justify-content-start w-75 text-break border-top pt-2">
          <Typed typeSpeed={20} backSpeed={1} loop strings={['I am a computer science engineer. Quest to work and learn in a real professional and vying ambience that enables me to cope with the emerging as well as latest technology and scope for widening the spectrum of my knowledge. ']}></Typed>
        </div>
    </section>
  )
}
export default About
