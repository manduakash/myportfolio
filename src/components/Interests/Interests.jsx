import React from 'react'
import './style.css'
import { useEffect, useRef } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import travelling from '../../imgs/travelling.jpg'
import coding from '../../imgs/coding.png'
import guitar from '../../imgs/guitar.jpg'

const PersonalDetails = () => {
  const interestTitleRef = useRef(null);
  const interestSubtitleRef = useRef(null);

  const { scroll } = useLocomotiveScroll();

  // useEffect for elements loco scroll logic
  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (obj) => {
        let temp1 = obj.scroll.y - 4400;
        let temp2 = obj.scroll.y - 4800;
        let temp1M = obj.scroll.y - 6000;
        let temp2M = obj.scroll.y - 5000;
        // heading scroll
        if(window.innerWidth<600){
        interestTitleRef.current.style.transform = `translateX(${temp1M * 0.5}px)`
        interestSubtitleRef.current.style.transform = `translateX(-${temp2M * 0.5}px)`
        }
        if(window.innerWidth>600){
          interestTitleRef.current.style.transform = `translateX(${temp1 * 0.5}px)`
          interestSubtitleRef.current.style.transform = `translateX(-${temp2 * 0.5}px)`
          }
        // setting title
        if (obj.scroll.y>4400 && obj.scroll.y<5500 ) {
          document.getElementById('title').innerText = 'Portfolio | Interests & Hobbies';
      }
      })
    }
    return () => { };
  }, [scroll])
  return (
    <section className='Interests-section container-fluid' data-scroll-section id='interest-section'>
      <div className="interests-container">
        {/* ----------------------header----------------------- */}
        <div className="interests-header">

          <div className="interests-title d-flex justify-content-center">
            <h1 data-scroll ref={interestTitleRef}>--- Interests ---</h1>
          </div>
          <div className="interests-subtitle d-flex justify-content-center">
            <h1 data-scroll ref={interestSubtitleRef}>--- That I love to do ---</h1>
          </div>

        </div>

        {/* ----------------------header----------------------- */}
        {/* react */}
        <div className="row text-center px-1 py-5">
          {/* travelling */}
          <div className='col-md-4 pb-3 justify-content-center' data-scroll>
            <div className='intrst-img-div'>
              <img className='intrst-img' src={travelling} alt="react" />
            </div>
            <p className='intrst-heading'><span className='text-danger fs-4'>T</span>ravelling</p>
          </div>

          {/* coding */}
          <div className='col-md-4 pb-3 justify-content-center' data-scroll>
            <div className='intrst-img-div'>
              <img className='intrst-img' src={coding} alt="react" />
            </div>
            <p className='intrst-heading'><span className='text-danger fs-4'>C</span>oding</p>
          </div>

          {/* guitar */}
          <div className='col-md-4 pb-3 justify-content-center' data-scroll>
            <div className='intrst-img-div'>
              <img className='intrst-img' src={guitar} alt="react" />
            </div>
            <p className='intrst-heading'><span className='text-danger fs-4'>P</span>laying <span className='text-danger'>g</span>uitar</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PersonalDetails
