import React from 'react'
import './style.css'
import aslogo from '../../imgs/aslogo.png'

const Footer = () => {
  return (
    <div className='footer-section' data-scroll-section>
      <div className="footer-container text-white">
        <div className="footer-content row">
          {/* portfolio-logo */}
          <div className="footer-logo col-md-3 mb-3 pb-3 pb-3">
            <div className="portfolio-logo pb-0 mb-0">
              <img className='footer-logo-img d-inline' src={aslogo} alt="aslogo" />
              <h2 className='d-inline py-2 fw-bolder'><span className='text-danger fw-bold fs-1'>P</span>ortfolio</h2>
            </div>
            <div className="para-div">
            <span className='quotes-start'>❝</span>
              <p className='para'>Let's turn your vision into reality with code & <span className='text-danger fs-4'>Innovative Design</span></p>
              <span className='quotes-end'>❞</span>
            </div>
            <div className='d-block py-2'>
              <a className='footer-social-media me-3' href="https://wa.me/qr/6MQ3BWXKIEIKA1"><i className="fa-brands fa-whatsapp"></i></a>
              <a className='footer-social-media me-3' href="https://wa.me/qr/6MQ3BWXKIEIKA1"><i className="fa-brands fa-facebook"></i></a>
              <a className='footer-social-media me-3' href="https://wa.me/qr/6MQ3BWXKIEIKA1"><i className="fa-brands fa-instagram"></i></a>
              <a className='footer-social-media me-3' href="https://wa.me/qr/6MQ3BWXKIEIKA1"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>

          {/* Quick-links */}
          <div className="quick-links col-md-3 mb-3 pb-3 ps-5">
            <h6 className='py-2 fw-bold'>Quick Links</h6>
            <ul>
              <li><a href="#home-section" data-scroll-to>Intro</a></li>
              <li><a href="#about-section" data-scroll-to>About Me</a></li>
              <li><a href="#tech-section" data-scroll-to>Technical Skills</a></li>
              <li><a href="#tech-progress" data-scroll-to>Skill Progress Levels</a></li>
              <li><a href="#project-section" data-scroll-to>Project Details</a></li>
              <li><a href="#interest-section" data-scroll-to>Interests & Hobbies</a></li>
              <li><a href="#contact-section" data-scroll-to>Contact Me</a></li>
            </ul>
          </div>

          {/* Recent-projects */}
          <div className="recent-projs col-md-3 mb-3 pb-3 px-2">
            <h6 className='py-2 fw-bold'>Recent Projects</h6>
            <div className="d-block py-2">
              <ul>
                <li><a href="https://github.com/manduakash/textutils">TextUtils</a></li>
                <li><a href="https://github.com/manduakash/inotebook">iNoteBook</a></li>
                <li><a href="https://github.com/manduakash/myportfolio">Portfolio</a></li>
                <li><a href="https://github.com/manduakash/news-walah">News-Walah</a></li>
                <li><a href="https://github.com/manduakash/AlumniManagementSystem ">Alumni Management System</a></li>
                <li><a href="https://github.com/manduakash/BankManagementSystem">Bank Management System</a></li>
              </ul>
            </div>
          </div>

          {/* Get in touch */}
          <div className="get-in-touch col-md-3 mb-3 pb-3 px-2">
            <h6 className='py-2 fw-bold'>Get in Touch </h6>
            <div className="contact-detail location"><i className="fa-solid me-2 text-danger fa-location-dot"></i><span>Purnea, Bihar (854301), India</span></div>
            <div className="contact-detail phone"><i className="fa-solid me-2 text-danger fa-phone"></i><span>+91 6202734737</span></div>
            <div className="contact-detail email"><i className="fa-solid me-2 text-danger fa-envelope"></i><span>manduakash@gmail.com</span></div>
            <div className="contact-detail linkedin"><i className="fa-brands me-2 text-danger fa-instagram"></i><span>_akash_._singh___</span></div>
            <div className="contact-detail git"><i className="fa-brands me-2 text-danger fa-github"></i><span>https://github.com/manduakash</span></div>
          </div>

        </div>
        <hr />
        <div className="copyright p-0 m-0">Copyright © 2023. All rights reserved.</div>
        <div className="credit text-end p-0 m-0">Design & Developed by <span className='text-danger fw-bold'>Akash</span></div>
      </div>
    </div>
  )
}

export default Footer
