import React, { useState } from 'react'
import { useEffect, useRef } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import portfolio from '../../imgs/portfolio.png'
import newswalah from '../../imgs/news-walah.png'
import inotebook from '../../imgs/inotebook.png'
import textutils from '../../imgs/textutils.png'
import alumnimanagementsystem from '../../imgs/alumnimanagementsystem.png'
import bankmanagementsystem from '../../imgs/bankmanagementsystem.png'
import './style.css'

const Projects = () => {
    const projecttitleRef = useRef(null);
    const projectsubtitleRef = useRef(null);

    const { scroll } = useLocomotiveScroll();

    // useEffect for elements loco scroll logic
    useEffect(() => {
        if (scroll) {
            scroll.on('scroll', (obj) => {
                let temp1 = obj.scroll.y - 2450;
                let temp2 = obj.scroll.y - 2800;
                let temp1M = obj.scroll.y - 2850;
                let temp2M = obj.scroll.y - 2100;
                // heading scroll
                if (window.innerWidth < 600) {

                    projecttitleRef.current.style.transform = `translateX(${temp1M * 0.5}px)`
                    projectsubtitleRef.current.style.transform = `translateX(-${temp2M * 0.5}px)`
                }
                if (window.innerWidth > 600) {

                    projecttitleRef.current.style.transform = `translateX(${temp1 * 0.5}px)`
                    projectsubtitleRef.current.style.transform = `translateX(-${temp2 * 0.5}px)`
                }

                // setting title
                if (obj.scroll.y > 2700 && obj.scroll.y < 4400) {
                    document.getElementById('title').innerText = 'Portfolio | Projects';
                }
            });

        }
        return () => { };
    }, [scroll])

    // git bounce effect
    const [textutilsGitHover, setTextutilsGitHover] = useState("");
    const [inotebookGitHover, setInotebookGitHover] = useState("");
    const [portfolioGitHover, setPortfolioGitHover] = useState("");
    const [newswalahGitHover, setNewswalahGitHover] = useState("");
    const [amsGitHover, setAmsGitHover] = useState("");
    const [bmsGitHover, setBmsGitHover] = useState("");

    return (
        <section className='project-section' data-scroll-section id='project-section' >

            <div className="project-container">
                {/* ----------------------header----------------------- */}
                <div className="project-header">

                    <div className="project-title d-flex justify-content-center">
                        <h1 data-scroll ref={projecttitleRef}>--- Projects ---</h1>
                    </div>
                    <div className="project-subtitle d-flex justify-content-center">
                        <h1 data-scroll ref={projectsubtitleRef}>--- Detail ---</h1>
                    </div>

                </div>

                {/* ----------------------projects----------------------- */}
                <div className="projects-container container">
                    {/* row */}
                    <div className="row justify-content-between">


                        {/* cols */}
                        <div onMouseOver={() => setTextutilsGitHover('fa-bounce')} onMouseLeave={() => setTextutilsGitHover("")} className="proj-card col-md-5 text-center my-2">
                            <img className='proj-img' src={textutils} alt="textutils" />
                            <h4 className='proj-heading'>Textutils </h4>
                            <p className='proj-details'>This project is a React web-application and this is a small project. It's architechture totally based upon react function based components. The purpose of this project is to write handwritten assignments. I've used states, prop another hooks. I have also implimented the dark mode in this project. Technologies used for this project are React, Html, CSS, JavaScript, Bootstrap.</p>
                            <a href='https://github.com/manduakash/textutils' className="btn btn-dark rounded-pill">Open in Git <i className={`fa-brands fa-github fa-lg ${textutilsGitHover} ms-1`}></i></a>
                        </div>

                        {/* cols */}
                        <div onMouseOver={() => setInotebookGitHover('fa-bounce')} onMouseLeave={() => setInotebookGitHover("")} className="proj-card col-md-5 text-center my-2">
                            <img className='proj-img' src={inotebook} alt='inotebook' />
                            <h4 className='proj-heading'>iNotebook</h4>
                            <p className='proj-details'>This project is React Full Stack MERN web-application. It's architechture totally based upon react function based components. I've used Express.js for the backend API and React.js for the client-side interface. MongoDB for storing data into the database. I've also used the states, useEffect-hooks, context and props. Notes can be created, deleted, updated by only authorized person who is logged in. Express-validator, bcryptJs, jsonwebtoken for user authentication. Post, Put, Delete and Get http requests are tested by thunder-client (Visual studio code extension).</p>
                            <a href='https://github.com/manduakash/inotebook' className="btn btn-dark rounded-pill">Open in Git <i className={`fa-brands fa-github fa-lg ${inotebookGitHover} ms-1`}></i></a>
                        </div>

                        {/* cols */}
                        <div onMouseOver={() => setPortfolioGitHover('fa-bounce')} onMouseLeave={() => setPortfolioGitHover("")} className="proj-card col-md-5 text-center my-2">
                            <img className='proj-img' src={portfolio} alt="portfolio" />
                            <h4 className='proj-heading'>Portfolio</h4>
                            <p className='proj-details'>This project is a React static web-application. This is my portfolio website. It's architechture totally based upon react function based components. The purpose of this project is to show my skills, projects and personal informations. I have used react-locomotive-scroll for interactive and smooth scrolls and transitions over elements. I've used states, prop another hooks. Technologies used for this project are React, Html, CSS, JavaScript, Bootstrap.</p>
                            <a href='https://github.com/manduakash/myportfolio' className="btn btn-dark rounded-pill">Open in Git <i className={`fa-brands fa-github fa-lg ${portfolioGitHover} ms-1`}></i></a>
                        </div>

                        {/* cols */}
                        <div onMouseOver={() => setNewswalahGitHover('fa-bounce')} onMouseLeave={() => setNewswalahGitHover("")} className="proj-card col-md-5 text-center my-2">
                            <img className='proj-img' src={newswalah} alt="newswalah" />
                            <h4 className='proj-heading'>News-Walah</h4>
                            <p className='proj-details'>This project is a React web-application. It's architechture totally based upon react class based components. I have used newapi from <a href='https://newsapi.org'>https://newsapi.org</a> for the backend API and react js for the client-side interface. I have also used the react-top-loading-bar for loading and react-infinite-scroll-component for pagination. I have categorized the news in navbar tab as business, entertainment, health, science, sports  etc. </p>
                            <a href='https://github.com/manduakash/news-walah' className="btn btn-dark rounded-pill">Open in Git <i className={`fa-brands fa-github fa-lg ${newswalahGitHover} ms-1`}></i></a>
                        </div>

                        {/* cols */}
                        <div onMouseOver={() => setAmsGitHover('fa-bounce')} onMouseLeave={() => setAmsGitHover("")} className="proj-card col-md-5 text-center my-2">
                            <img className='proj-img' src={alumnimanagementsystem} alt="ualumnimanagementsystem" />
                            <h4 className='proj-heading'>Alumni Management System</h4>
                            <p className='proj-details'>It’s a full stack CRUD web-application REST api for backend and angular for frontend and testing done by Junit and postman for JSON Http response testing. Technologies used for this project are Java, Spring-boot, Maven, Rest API, Junit, JPA and for front-end I've used Angular, Html, CSS, JavaScript, Bootstrap. MySQL for storing data into the database.</p>
                            <a href='https://github.com/manduakash/AlumniManagementSystem ' className="btn btn-dark rounded-pill">Open in Git <i className={`fa-brands fa-github fa-lg ${amsGitHover} ms-1`}></i></a>
                        </div>

                        {/* cols */}
                        <div onMouseOver={() => setBmsGitHover('fa-bounce')} onMouseLeave={() => setBmsGitHover("")} className="proj-card col-md-5 text-center my-2">
                            <img className='proj-img' src={bankmanagementsystem} alt="bankmanagementsystem" />
                            <h4 className='proj-heading'>Bank Management System</h4>
                            <p className='proj-details'>It’s a full stack CRUD web-application REST api for backend and angular for frontend and testing done by Junit and postman for JSON Http response testing. Technologies used for this are Java, Spring-boot, Maven, Rest API, Junit, JPA and for front-end I've used Angular, Html, CSS, JavaScript, TypeScript, Bootstrap. MySQL for storing data into the database.</p>
                            <a href='https://github.com/manduakash/BankManagementSystem' className="btn btn-dark rounded-pill">Open in Git <i className={`fa-brands fa-github fa-lg ${bmsGitHover} ms-1`}></i> </a>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Projects
