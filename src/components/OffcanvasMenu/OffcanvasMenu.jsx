import React, { useState } from 'react'
import './style.css'

const OffcanvasMenu = (props) => {
    // canvas close logic
    const canvasClose = () => {
        document.getElementById('closeOffcanvas').click();
    }
    // state
    const [ onMenuCvHover, setMenuCvHover ] = useState('transparent');

    // method for downloading the cv
    const downloadCV = ()=> {
        const aTag = document.createElement('a');
        aTag.href = 'https://manduakash.github.io/myportfolio/cv_akash_singh.pdf';
        aTag.setAttribute('download', 'cv_akash_singh.pdf');
        aTag.click();
        aTag.remove();
        canvasClose();
        props.showAlert(true,'success','CV has been downloaded successfully.')
    }
    return (
        <div className='offcanvas offcanvas-start' tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" className="btn-close" id='closeOffcanvas' data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body menu">
                <ul>
                    <li className="menu-item"><a data-scroll-to onClick={()=>{canvasClose()}} href="#home-section">Intro</a></li>
                    <li className="menu-item"><a data-scroll-to onClick={()=>{canvasClose()}} href="#about-section">About</a></li>
                    <li className="menu-item"><a data-scroll-to onClick={()=>{canvasClose()}} href="#tech-section">Skills</a></li>
                    <li className="menu-item"><a data-scroll-to onClick={()=>{canvasClose()}} href="#project-section">Projects</a></li>
                    <li className="menu-item"><a data-scroll-to onClick={()=>{canvasClose()}} href="#contact-section">Contact</a></li>
                    <li className="menu-item">
                        <div className='cv' role='button' onMouseOver={()=>setMenuCvHover('#e44c4cc4')} onMouseLeave={()=>setMenuCvHover('transparent')} onClick={()=>{downloadCV()}}>cv<i className={`fa-solid fa-download fa-sm ms-1 fa-bounce`} style={{color: onMenuCvHover}}></i></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OffcanvasMenu
