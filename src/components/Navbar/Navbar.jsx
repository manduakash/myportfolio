import React, { useState } from 'react'
import aslogo from '../../imgs/aslogo.png'
import './style.css'

const Navbar = (props) => {
  // state
  const [ onCvHover, setCvHover ] = useState('transparent');

  // method for downloading the cv
  const downloadCV = ()=> {
    const aTag = document.createElement('a');
    aTag.href = 'https://manduakash.github.io/myportfolio/cv_akash_singh.pdf';
    aTag.setAttribute('download', 'cv_akash_singh.pdf');
    aTag.click();
    aTag.remove();
    props.showAlert(true,'success','CV has been downloaded successfully.')
  }
  return (
    <div className='navbar'>
      <a className='menu-btn' type="button" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">Menu</a>
      <div className='portfolio'><div className="aslogo-div"><img src={aslogo} alt="aslogo" /></div>portfolio</div>
      <div className='cv' role='button' onMouseOver={()=>setCvHover('#e44c4cc4')} onMouseLeave={()=>setCvHover('transparent')} onClick={()=>{downloadCV()}}>cv<i className={`fa-solid fa-download fa-sm ms-1 fa-bounce`} style={{color: onCvHover}}></i></div>
    </div>
  )
}

export default Navbar
