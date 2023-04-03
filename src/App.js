import { useEffect, useRef, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import TechSkills from './components/TechSkills/TechSkills';
import Projects from './components/Projects/Projects';
import Interests from './components/Interests/Interests';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import OffcanvasMenu from './components/OffcanvasMenu/OffcanvasMenu';
import Alert from './components/Alert/Alert';
import Loading from './components/Loading/Loading';

function App() {

  const containerRef = useRef(null);

  // loading state
  const [isLoading, setLoading] = useState(true);

  // timer for loading
  const [timer, setTimer] = useState(3);
  // refrence for time interval
  const id = useRef(null);

  // component mount
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000)
  }, []);

  // component update
  useEffect(() => {
    if (timer === 0) {
      window.clearInterval(id.current);
      setLoading(false);
    }
  }, [timer]);


  // dark mode state
  const [darkMode, setDarkMode] = useState(false);
  // dark mode style state
  const [darkModeStyle, setDarkModeStyle] = useState({ background: '#e4e4e4', color: '#464646' });

  // alert state
  const [alert, setAlert] = useState(null);

  // show alert method
  const showAlert = (isAlert, type, message) => {
    setAlert({ isAlert: isAlert, type: type, message: message });
    // close alert logic
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  // dark mode method
  const darkModeEnable = () => {
    if (!darkMode) {      // dark mode activate logic
      setDarkMode(true);
      setDarkModeStyle({ background: '#212121', color: '#e4e4e4' });
      showAlert(true, 'success', 'Dark mode has been activated successfully.')
    } else {              // dark mode deactivate logic
      setDarkMode(false);
      setDarkModeStyle({ background: '#e4e4e4', color: '#464646' });
      showAlert(true, 'success', 'Dark mode has been deactivated successfully.')
    }
  }

  return (
    <div className="App" style={darkModeStyle}>

      {/* locomotive provider  */}
      <LocomotiveScrollProvider containerRef={containerRef} options={{
        smooth: true, mobile: { smooth: true, multiplier: 1.4, breakpoint: 600 }, tablet: { smooth: !1, breakpoint: 1024 }
      }} watch={[]}>

        {/* main container for data scroll container */}
        <div className="main-container" id="main-container" ref={containerRef} data-scroll-container style={darkModeStyle}>


          {/* loading component */}
          {isLoading && (<Loading data-scroll-section timer={timer} />)}

          {/* navbar component */}
          <Navbar data-scroll-section showAlert={showAlert} />

          {/* side menu bar component */}
          <OffcanvasMenu data-scroll-section showAlert={showAlert} setDarkMode={setDarkMode} darkMode={darkMode} darkModeStyle={darkModeStyle} setDarkModeStyle={setDarkModeStyle} darkModeEnable={darkModeEnable} />

          {/* alert component */}
          {alert && (<Alert data-scroll-section alert={alert} />)}

          {/* Header component */}
          <Header darkModeStyle={darkModeStyle} darkModeEnable={darkModeEnable} darkMode={darkMode} />

          {/* LandingPage component */}
          <LandingPage darkModeStyle={darkModeStyle} />

          {/* About component */}
          <About />

          {/* TechSkills component */}
          <TechSkills />

          {/* Projects component */}
          <Projects darkModeStyle={darkModeStyle} />

          {/* Interests component */}
          <Interests darkModeStyle={darkModeStyle} />

          {/* Contact component */}
          <Contact />

          {/* Footer component */}
          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </div>

  );
}

export default App;
