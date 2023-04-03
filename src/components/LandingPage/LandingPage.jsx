import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import './style.css'

const LandingPage = (props) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const subtitleO = useRef(null);
  const subtitleP = useRef(null);
  const myselfRef = useRef(null);
  const svgRef = useRef(null);

  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (obj) => {
        if(window.innerWidth<600){
          titleRef.current.style.transform = `translateY(${obj.scroll.y * .9}px)`
        subtitleRef.current.style.transform = `translateY(${obj.scroll.y * .9}px)`
        subtitleO.current.style.transform = `translateY(${obj.scroll.y * .9}px)`
        subtitleP.current.style.transform = `translateY(${obj.scroll.y * .9}px)`
        myselfRef.current.style.transform = `translateY(${obj.scroll.y * .9}px)`
        svgRef.current.style.transform = `translateY(${obj.scroll.y * .9}px)`
        }
        if(window.innerWidth>600){
        titleRef.current.style.transform = `translateY(${obj.scroll.y * .5}px)`
        subtitleRef.current.style.transform = `translateY(${obj.scroll.y * .5}px)`
        subtitleO.current.style.transform = `translateY(${obj.scroll.y * .5}px)`
        subtitleP.current.style.transform = `translateY(${obj.scroll.y * .5}px)`
        myselfRef.current.style.transform = `translateY(${obj.scroll.y * .5}px)`
        svgRef.current.style.transform = `translateY(${obj.scroll.y * 8}px)`
        }
        if(obj.scroll.y>0 && obj.scroll.y<770){
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
          <div className="svg w-100" data-scroll>
            <svg ref={svgRef} data-scroll width="547" height="120" viewBox="0 0 547 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id='svg' d="M69.1073 41C75.233 42.9815 84.1222 43.3932 90.4971 43.9745C151.698 49.5557 215.873 43.7482 277.486 43.9745C351.655 44.2469 424.052 48.9866 498.201 50.4643C500.254 50.5053 532.97 50.5099 535.972 50.5319C537.04 50.5398 507.711 50.3951 506.647 50.3291C475.627 48.4059 450.349 50.8181 419.239 50.4347C340.19 49.4604 261.112 49.7249 182.053 49.7249C168.426 49.7249 148.702 47.0842 135.076 47.0842C131.327 47.0842 120.163 46.6295 123.831 47.1518C142.275 49.778 163.425 48.6608 182.053 48.9095C216.319 49.3669 319.126 50.1263 284.854 50.1263C211.945 50.1263 138.844 48.9723 65.9589 50.1601C65.3637 50.1698 63.6949 50.4046 64.2597 50.5319C70.662 51.9753 78.5118 52.6203 84.9997 53.3712C134.219 59.0685 184.03 63.5996 233.878 64.303C268.803 64.7958 303.939 65.3043 338.878 64.7762C367.13 64.3492 282.678 57.4819 254.468 56.3457C192.72 53.8588 130.998 53.1684 69.1573 53.1684C53.4815 53.1684 6.53509 52.0922 22.1299 53.1684C119.264 59.8722 217.157 58.0358 314.689 58.0358C340.274 58.0358 365.867 58.144 391.453 58.0358C406.864 57.9707 360.637 57.4971 345.225 57.4612C256.552 57.2544 167.876 57.4274 79.2025 57.4274C-4.19941 57.4274 245.98 59.832 329.382 59.8611C377.776 59.8779 445.404 59.8621 493.798 59.8621C550.432 56.3457 475.071 53.1019 474.855 53.1019C399.592 53.1019 320.814 52.9592 245.552 53.1684C224.412 53.2272 187.821 60.0259 165.711 60.5709C160.457 60.7004 155.193 60.8164 149.969 61.2131C142.903 61.7496 148.325 62.7369 151.468 62.9032C172.433 64.0127 225.1 64.247 237.227 64.3228C312.537 64.7938 387.856 64.7284 463.168 64.7284C473.347 64.7284 472.168 64.7284 482.346 64.7284" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <div id='P' ref={subtitleP} data-scroll>P</div>
          <h1 ref={subtitleRef} data-scroll><div>O</div><div>R</div><div>T</div><div>F</div><div>O</div><div>L</div><div>I</div></h1>
          <div id='O' ref={subtitleO} data-scroll>O</div>
        </div>
        <div className="myself d-flex justify-content-center" >
          <h5 ref={myselfRef} data-scroll>My name is Akash singh</h5>
        </div>
      </div>


    </section>
  )
}

export default LandingPage
