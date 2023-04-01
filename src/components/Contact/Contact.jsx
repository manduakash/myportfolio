import React, { useEffect, useState } from 'react'
import './style.css'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Contact = () => {
  const [ wpHover, setWpHover ] = useState("fade");
  const [ fbHover, setFbHover ] = useState("fade");
  const [ instaHover, setInstaHover ] = useState("fade");
  const [ linkedinHover, setLinkedinHover ] = useState("fade");
  const [ gitHover, setGitHover ] = useState("fade");

  const { scroll } = useLocomotiveScroll();
  useEffect(()=>{
    if( scroll ){
      scroll.on('scroll', (obj)=>{
        if(obj.scroll.y>5500){
          document.getElementById('title').innerHTML = 'Portfolio | Contact';
        }
      })
    }
  }, [scroll])
  return (
    <div className='contact-section' id='contact-section' data-scroll-section>
        <div className="contact-container container">
          <div className="bg-img"></div>
          {/* heading */}
          <h1 className='contact-heading'><span className='text-danger'>C</span>ontact Me</h1>
          {/* contact details  */}
          <div className="contact-details">
            <div className="contact-detail location"><i className="fa-solid me-2 text-danger fa-location-dot"></i><span>Purnea, Bihar (854301), India</span></div>
            <div className="contact-detail phone"><i className="fa-solid me-2 text-danger fa-phone"></i><span>+91 6202734737</span></div>
            <div className="contact-detail email"><i className="fa-solid me-2 text-danger fa-at"></i><span>manduakash@gmail.com</span></div>
            <div className="contact-detail linkedin"><i className="fa-brands me-2 text-danger fa-instagram"></i><span>_akash_._singh___</span></div>
            <div className="contact-detail git"><i className="fa-brands me-2 text-danger fa-github"></i><span>https://github.com/manduakash</span></div>
          </div>

          {/* social media wp, fb, insta, linkedin, git, */}
          <div className="social-media pt-5 pb-2">
            <a className='social-media-brands rounded-circle' onMouseOver={()=>{setWpHover('bounce')}} onMouseLeave={()=>{setWpHover('fade')}} href="https://wa.me/qr/6MQ3BWXKIEIKA1"><i className={`fa-brands fa-whatsapp fa-${wpHover}`}></i></a>
            <a className='social-media-brands rounded-circle' onMouseOver={()=>{setFbHover('bounce')}} onMouseLeave={()=>{setFbHover('fade')}} href="https://www.facebook.com/profile.php?id=100006570525200"><i className={`fa-brands fa-facebook fa-${fbHover}`}></i></a>
            <a className='social-media-brands rounded-circle' onMouseOver={()=>{setInstaHover('bounce')}} onMouseLeave={()=>{setInstaHover('fade')}} href="https://instagram.com/_akash_._singh___?igshid=ZDdkNTZiNTM="><i className={`fa-brands fa-instagram fa-${instaHover}`}></i></a>
            <a className='social-media-brands rounded-circle' onMouseOver={()=>{setGitHover('bounce')}} onMouseLeave={()=>{setGitHover('fade')}} href="https://github.com/manduakash"><i className={`fa-brands fa-github fa-${gitHover}`}></i></a>
            <a className='social-media-brands rounded-circle' onMouseOver={()=>{setLinkedinHover('bounce')}} onMouseLeave={()=>{setLinkedinHover('fade')}} href="https://www.linkedin.com/in/akash-singh-3349b1184/"><i className={`fa-brands fa-linkedin fa-${linkedinHover}`}></i></a>
          </div>
        </div>
    </div>
  )
}

export default Contact
