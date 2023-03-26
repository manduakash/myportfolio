import React from 'react'
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
                let temp1 = obj.scroll.y - 2700;
                let temp2 = obj.scroll.y - 2800;
                // heading scroll
                projecttitleRef.current.style.transform = `translateX(${temp1 * 0.5}px)`
                projectsubtitleRef.current.style.transform = `translateX(-${temp2 * 0.5}px)`

            })
        }
        return () => { };
    }, [scroll])
    return (
        <section className='project-section' data-scroll-section>

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
                        <div className="proj-card col-md-5 text-center m-2 p-2">
                            <img className='proj-img' src={inotebook} alt="iNotebook" />
                            <h4 className='py-2'>iNotebook</h4>
                            <a href='https://github.com/manduakash/inotebook' className="btn btn-dark rounded-pill">Open in Git <i class="fa-brands fa-github fa-lg ms-1"></i></a>
                        </div>

                        {/* cols */}
                        <div className="proj-card col-md-5 text-center m-2 p-2">
                            <img className='proj-img' src={portfolio} alt="portfolio" />
                            <h4 className='py-2'>Portfolio</h4>
                            <a href='https://github.com/manduakash/' className="btn btn-dark rounded-pill">Open in Git <i class="fa-brands fa-github fa-lg ms-1"></i></a>
                        </div>

                        {/* cols */}
                        <div className="proj-card col-md-5 text-center m-2 p-2">
                            <img className='proj-img' src={newswalah} alt="newswalah" />
                            <h4 className='py-2'>News-Walah</h4>
                            <a href='https://github.com/manduakash/news-walah' className="btn btn-dark rounded-pill">Open in Git <i class="fa-brands fa-github fa-lg ms-1"></i></a>
                        </div>

                        {/* cols */}
                        <div className="proj-card col-md-5 text-center m-2 p-2">
                            <img className='proj-img' src={textutils} alt="textutils" />
                            <h4 className='py-2'>textutils</h4>
                            <a href='https://github.com/manduakash/textutils' className="btn btn-dark rounded-pill">Open in Git <i class="fa-brands fa-github fa-lg ms-1"></i></a>
                        </div>

                        {/* cols */}
                        <div className="proj-card col-md-5 text-center m-2 p-2">
                            <img className='proj-img' src={alumnimanagementsystem} alt="ualumnimanagementsystem" />
                            <h4 className='py-2'>Alumni Management System</h4>
                            <a href='https://github.com/manduakash/AlumniManagementSystem ' className="btn btn-dark rounded-pill">Open in Git <i class="fa-brands fa-github fa-lg ms-1"></i></a>
                        </div>

                        {/* cols */}
                        <div className="proj-card col-md-5 text-center m-2 p-2">
                            <img className='proj-img' src={bankmanagementsystem} alt="bankmanagementsystem" />
                            <h4 className='py-2'>Bank Management System</h4>
                            <a href='https://github.com/manduakash/BankManagementSystem' className="btn btn-dark rounded-pill">Open in Git <i class="fa-brands fa-github fa-lg ms-1"></i> </a>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Projects
