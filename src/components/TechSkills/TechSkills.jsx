import React from 'react'
import { useEffect, useRef } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import './style.css'
import react from "../../imgs/react.png";
import angular from "../../imgs/angular.png";
import bootstrap from "../../imgs/bootstrap.jpg";
import css from "../../imgs/css.png";
import express from "../../imgs/express.png";
import html from "../../imgs/html.png";
import java from "../../imgs/java.png";
import javascript from "../../imgs/javascript.png";
import mongodb from "../../imgs/mongodb.png";
import mysql from "../../imgs/mysql.png";
import nodejs from "../../imgs/nodejs.png";
import python from "../../imgs/python.jpg";

const TechSkills = () => {
  const techtitleRef = useRef(null);
  const techsubtitleRef = useRef(null);

  const { scroll } = useLocomotiveScroll();

  // useEffect for elements loco scroll logic
  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (obj) => {
        let temp1 = obj.scroll.y - 700;
        let temp2 = obj.scroll.y - 999;
        let temp1M = obj.scroll.y - 1550;
        let temp2M = obj.scroll.y - 500;
        let skillbubble = obj.scroll.y - 1350;
        let progress = obj.scroll.y - 2300;
        let progressM = obj.scroll.y - 2100;
        // heading scroll
        if(window.innerWidth<600){
          techtitleRef.current.style.transform = `translateX(${temp1M * 0.5}px)`
          techsubtitleRef.current.style.transform = `translateX(-${temp2M * 0.5}px)`
        }
        if(window.innerWidth>600){
          techtitleRef.current.style.transform = `translateX(${temp1 * 0.5}px)`
          techsubtitleRef.current.style.transform = `translateX(-${temp2 * 0.5}px)`
        }
        //progress scroll
        if(window.innerWidth>600){
        document.getElementById('progress-React').style.transform = `translateX(${(progress > 20 ? (progress - 20) : 0) * 2.3}px)`
        document.getElementById('progress-Html').style.transform = `translateX(-${(progress > 50 ? (progress - 50) : 0) * 2.3}px)`
        document.getElementById('progress-Css').style.transform = `translateX(${(progress > 100 ? (progress - 100) : 0) * 2.3}px)`
        document.getElementById('progress-JavaScript').style.transform = `translateX(-${(progress > 150 ? (progress - 150) : 0) * 2.3}px)`
        document.getElementById('progress-Bootstrap').style.transform = `translateX(${(progress > 200 ? (progress - 200) : 0) * 2.3}px)`
        document.getElementById('progress-Angular').style.transform = `translateX(-${(progress > 250 ? (progress - 250) : 0) * 2.3}px)`
        document.getElementById('progress-Express').style.transform = `translateX(${(progress > 300 ? (progress - 300) : 0) * 2.3}px)`
        document.getElementById('progress-Node').style.transform = `translateX(-${(progress > 350 ? (progress - 350) : 0) * 2.3}px)`
        document.getElementById('progress-Python').style.transform = `translateX(${(progress > 400 ? (progress - 400) : 0) * 2.3}px)`
        document.getElementById('progress-MySQL').style.transform = `translateX(-${(progress > 450 ? (progress - 450) : 0) * 2.3}px)`
        document.getElementById('progress-MongoDB').style.transform = `translateX(${(progress > 500 ? (progress - 500) : 0) * 2.3}px)`
        document.getElementById('progress-Java').style.transform = `translateX(-${(progress > 550 ? (progress - 550) : 0) * 2.3}px)`
        }
        if(window.innerWidth<600){
        document.getElementById('progress-React').style.transform = `translateX(${(progressM > 20 ? (progressM - 20) : 0) * 2.3}px)`
        document.getElementById('progress-Html').style.transform = `translateX(-${(progressM > 50 ? (progressM - 50) : 0) * 2.3}px)`
        document.getElementById('progress-Css').style.transform = `translateX(${(progressM > 100 ? (progressM - 100) : 0) * 2.3}px)`
        document.getElementById('progress-JavaScript').style.transform = `translateX(-${(progressM > 150 ? (progressM - 150) : 0) * 2.3}px)`
        document.getElementById('progress-Bootstrap').style.transform = `translateX(${(progressM > 200 ? (progressM - 200) : 0) * 2.3}px)`
        document.getElementById('progress-Angular').style.transform = `translateX(-${(progressM > 250 ? (progressM - 250) : 0) * 2.3}px)`
        document.getElementById('progress-Express').style.transform = `translateX(${(progressM > 300 ? (progressM - 300) : 0) * 2.3}px)`
        document.getElementById('progress-Node').style.transform = `translateX(-${(progressM > 350 ? (progressM - 350) : 0) * 2.3}px)`
        document.getElementById('progress-Python').style.transform = `translateX(${(progressM > 400 ? (progressM - 400) : 0) * 2.3}px)`
        document.getElementById('progress-MySQL').style.transform = `translateX(-${(progressM > 450 ? (progressM - 450) : 0) * 2.3}px)`
        document.getElementById('progress-MongoDB').style.transform = `translateX(${(progressM > 500 ? (progressM - 500) : 0) * 2.3}px)`
        document.getElementById('progress-Java').style.transform = `translateX(-${(progressM > 550 ? (progressM - 550) : 0) * 2.3}px)`
        }

        // skill bubble scroll
        document.getElementById('f-skill1').style.transform = `scale(0.7) translateX(-${(skillbubble > 250 ? (skillbubble - 250) : 0) * 8}px)`
        document.getElementById('f-skill2').style.transform = `scale(0.7) translateX(-${(skillbubble > 250 ? (skillbubble - 250) : 0) * 8}px)`
        document.getElementById('f-skill3').style.transform = `scale(0.7) translateX(${(skillbubble > 250 ? (skillbubble - 250) : 0) * 8}px)`
        document.getElementById('f-skill4').style.transform = `scale(0.7) translateX(${(skillbubble > 250 ? (skillbubble - 250) : 0) * 8}px)`
        document.getElementById('f-skill5').style.transform = `scale(0.7) translateX(-${(skillbubble > 500 ? (skillbubble - 500) : 0) * 8}px)`
        document.getElementById('f-skill6').style.transform = `scale(0.7) translateX(-${(skillbubble > 500 ? (skillbubble - 500) : 0) * 8}px)`
        document.getElementById('f-skill7').style.transform = `scale(0.7) translateX(${(skillbubble > 500 ? (skillbubble - 500) : 0) * 8}px)`
        document.getElementById('f-skill8').style.transform = `scale(0.7) translateX(${(skillbubble > 500 ? (skillbubble - 500) : 0) * 8}px)`
        document.getElementById('f-skill9').style.transform = `scale(0.7) translateX(-${(skillbubble > 700 ? (skillbubble - 700) : 0) * 8}px)`
        document.getElementById('f-skill10').style.transform = `scale(0.7) translateX(-${(skillbubble > 700 ? (skillbubble - 700) : 0) * 8}px)`
        document.getElementById('f-skill11').style.transform = `scale(0.7) translateX(${(skillbubble > 700 ? (skillbubble - 700) : 0) * 8}px)`
        document.getElementById('f-skill12').style.transform = `scale(0.7) translateX(${(skillbubble > 700 ? (skillbubble - 700) : 0) * 8}px)`

        // setting title
        if (obj.scroll.y>1350 && obj.scroll.y<2300) {
          document.getElementById('title').innerText = 'Portfolio | Technical Skills';
        }
        // setting title
        if (obj.scroll.y>2300 && obj.scroll.y<2800) {
          document.getElementById('title').innerText = 'Portfolio | Skill Levels';
        }
      })
    }
    return () => { };
  }, [scroll])
  return (
    <section className='technical-skill-section' id='tech-section' data-scroll-section>

      <div className="tech-container">

        {/* ----------------------header----------------------- */}
        <div className="tech-header">

          <div className="tech-title d-flex justify-content-center">
            <h1 data-scroll ref={techtitleRef}>--- Technical ---</h1>
          </div>
          <div className="tech-subtitle d-flex justify-content-center">
            <h1 data-scroll data-scroll-repeat ref={techsubtitleRef}>--- Skills ---</h1>
          </div>

        </div>

        {/* ---------------------skills------------------------ */}
        <div className="tech-skills d-flex justify-content-center w-100 py-5">

          {/* col-1 */}
          <div className="d-flex flex-column pt-2 col-3">
            {/* react */}
            <div className="d-flex justify-content-center text-center p-1 m-1">
              <div className='d-flex flex-column f-skills' id='f-skill1' data-scroll>
                <img src={react} alt="react" />
                <p className='skill-p'>React.js</p>
              </div>
            </div>
            {/* item-2 */}
            <div className="d-flex justify-content-center text-center p-1 m-1">
              <div className='d-flex flex-column f-skills' id='f-skill5' data-scroll>
                <img src={angular} alt="react" />
                <p className='skill-p'>Angular</p>
              </div>
            </div>
            {/* item-3 */}
            <div className="d-flex justify-content-center text-center p-1 m-1">
              <div className='d-flex flex-column f-skills' id='f-skill9' data-scroll>
                <img src={javascript} alt="react" />
                <p className='skill-p'>Javascript</p>
              </div>
            </div>
          </div>

          {/* col-2 */}
          <div className="d-flex flex-column pt-2 col-3">
            {/* react */}
            <div className="d-flex justify-content-center text-center p-1 m-1">
              <div className='d-flex flex-column f-skills' id='f-skill2' data-scroll>
                <img src={bootstrap} alt="react" />
                <p className='skill-p'>Bootstrap</p>
              </div>
            </div>
            {/* item-2 */}
            <div className="d-flex justify-content-center text-center p-1 m-1">
              <div className='d-flex flex-column f-skills' id='f-skill6' data-scroll>
                <img src={python} alt="react" />
                <p className='skill-p'>Python</p>
              </div>
            </div>
            {/* item-3 */}
            <div className="d-flex justify-content-center text-center p-1 m-1">
              <div className='d-flex flex-column f-skills' id='f-skill10' data-scroll>
                <img src={mongodb} alt="react" />
                <p className='skill-p'>MongoDB</p>
              </div>
            </div>
          </div>

          {/* col-3 */}
          <div className="d-flex flex-column pt-2 col-3">
            {/* react */}
            <div className="d-flex justify-content-center text-center p-1 m-1">
              <div className='d-flex flex-column f-skills' id='f-skill3' data-scroll>
                <img src={css} alt="react" />
                <p className='skill-p'>CSS</p>
              </div>
            </div>
            {/* item-2 */}
            <div className="d-flex justify-content-center text-center p-1 m-1">
              <div className='d-flex flex-column f-skills' id='f-skill7' data-scroll>
                <img src={express} alt="react" />
                <p className='skill-p'>Express.js</p>
              </div>
            </div>
            {/* item-3 */}
            <div className="d-flex justify-content-center text-center p-1 m-1">
              <div className='d-flex flex-column f-skills' id='f-skill11' data-scroll>
                <img src={mysql} alt="react" />
                <p className='skill-p'>MySQL</p>
              </div>
            </div>
          </div>

          {/* col-4 */}
          <div className="d-flex flex-column pt-2 col-3">
            {/* react */}
            <div className="d-flex justify-content-center text-center p-1 m-1">
              <div className='d-flex flex-column f-skills' id='f-skill4' data-scroll>
                <img src={html} alt="react" />
                <p className='skill-p'>Html</p>
              </div>
            </div>
            {/* item-2 */}
            <div className="d-flex justify-content-center text-center p-1 m-1">
              <div className='d-flex flex-column f-skills' id='f-skill8' data-scroll>
                <img src={java} alt="react" />
                <p className='skill-p'>Java</p>
              </div>
            </div>
            {/* item-3 */}
            <div className="d-flex justify-content-center text-center p-1 m-1">
              <div className='d-flex flex-column f-skills' id='f-skill12' data-scroll>
                <img src={nodejs} alt="react" />
                <p className='skill-p'>Node.js</p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------skills progress------------------------ */}
        <div className="tech-skill-progress container" id='tech-progress'>

          <label htmlFor="progress-React">React</label>
          <div className="progress rounded-pill mb-3" role="progressbar" id='progress-React' data-scroll>
            <div className="progress-bar rounded-pill bg-info progress-bar-striped progress-bar-animated" style={{ width: "80%" }}>80%</div>
          </div>

          <label htmlFor="progress-Html">Html</label>
          <div className="progress rounded-pill mb-3" role="progressbar" id='progress-Html' data-scroll>
            <div className="progress-bar rounded-pill bg-primary progress-bar-striped progress-bar-animated" style={{ width: "85%" }}>85%</div>
          </div>

          <label htmlFor="progress-Css">Css</label>
          <div className="progress rounded-pill mb-3" role="progressbar" id='progress-Css' data-scroll>
            <div className="progress-bar rounded-pill bg-success progress-bar-striped progress-bar-animated" style={{ width: "90%" }}>90%</div>
          </div>

          <label htmlFor="progress-JavaScript">JavaScript</label>
          <div className="progress rounded-pill mb-3" role="progressbar" id='progress-JavaScript' data-scroll>
            <div className="progress-bar rounded-pill bg-warning progress-bar-striped progress-bar-animated" style={{ width: "70%" }}>70%</div>
          </div>

          <label htmlFor="progress-Bootstrap">Bootstrap</label>
          <div className="progress rounded-pill mb-3" role="progressbar" id='progress-Bootstrap' data-scroll>
            <div className="progress-bar rounded-pill bg-info progress-bar-striped progress-bar-animated" style={{ width: "85%" }}>85%</div>
          </div>

          <label htmlFor="progress-Angular">Angular</label>
          <div className="progress rounded-pill mb-3" role="progressbar" id='progress-Angular' data-scroll>
            <div className="progress-bar rounded-pill bg-danger progress-bar-striped progress-bar-animated" style={{ width: "60%" }}>60%</div>
          </div>

          <label htmlFor="progress-Express">Express</label>
          <div className="progress rounded-pill mb-3" role="progressbar" id='progress-Express' data-scroll>
            <div className="progress-bar rounded-pill bg-secondary progress-bar-striped progress-bar-animated" style={{ width: "65%" }}>65%</div>
          </div>

          <label htmlFor="progress-Node">Node</label>
          <div className="progress rounded-pill mb-3" role="progressbar" id='progress-Node' data-scroll>
            <div className="progress-bar rounded-pill bg-success progress-bar-striped progress-bar-animated" style={{ width: "65%" }}>65%</div>
          </div>

          <label htmlFor="progress-Python">Python</label>
          <div className="progress rounded-pill mb-3" role="progressbar" id='progress-Python' data-scroll>
            <div className="progress-bar rounded-pill bg-info progress-bar-striped progress-bar-animated" style={{ width: "50%" }}>50%</div>
          </div>

          <label htmlFor="progress-MySQL">MySQL</label>
          <div className="progress rounded-pill mb-3" role="progressbar" id='progress-MySQL' data-scroll>
            <div className="progress-bar rounded-pill bg-warning progress-bar-striped progress-bar-animated" style={{ width: "70%" }}>70%</div>
          </div>

          <label htmlFor="progress-MongoDB">MongoDB</label>
          <div className="progress rounded-pill mb-3" role="progressbar" id='progress-MongoDB' data-scroll>
            <div className="progress-bar rounded-pill bg-success progress-bar-striped progress-bar-animated" style={{ width: "75%" }}>75%</div>
          </div>

          <label htmlFor="progress-Java">Java</label>
          <div className="progress rounded-pill mb-3" role="progressbar" id='progress-Java' data-scroll>
            <div className="progress-bar rounded-pill bg-danger progress-bar-striped progress-bar-animated" style={{ width: "60%" }}>60%</div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default TechSkills
