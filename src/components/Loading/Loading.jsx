import React from 'react'
import './style.css'
import aslogo from '../../imgs/aslogo.png'
const Loading = () => {

    return (
        <div className='loading'>
            <div className="loading-container">
                <div className="d-flex justify-content-center py-0 my-0"><lottie-player src="https://assets6.lottiefiles.com/packages/lf20_gbfwtkzw.json" background="transparent" speed="1" style={{ width: "300px", height: "300px" }} loop autoplay></lottie-player>
                </div>
                <div className="d-flex justify-content text-center my-3">
                    <div className='loading-portfolio mx-auto'><div className="loading-aslogo-div"><img src={aslogo} alt="aslogo" /></div><p><span>p</span>ortfolio</p></div>
                </div>
                <div className="loading-text d-flex justify-content text-center">
                    <span className='text-white mx-auto'>Loading . . .</span>
                </div>
            </div>
        </div>
    )
}

export default Loading
