import { useRef, useState } from 'react';
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

function App() {

  const containerRef = useRef(null);

  // alert state
  const [ alert , setAlert ] = useState(null);

  // show alert method
  const showAlert = (isAlert, type, message)=>{
    setAlert({isAlert: isAlert, type: type, message: message});
    // close alert logic
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  return (
    <div className="App">
      <LocomotiveScrollProvider containerRef={containerRef} options={{ smooth: true, multiplier: 0.8, opacity: 0}} watch={[]}>
        <div className="main-container" id="main-container" ref={containerRef} data-scroll-container>
          <Navbar showAlert={showAlert}/>
          {alert&&(<Alert alert={alert}/>)}
          <OffcanvasMenu showAlert={showAlert}/>
          <Header/>
          <LandingPage/>
          <About/>
          <TechSkills/>
          <Projects/>
          <Interests/>
          <Contact/>
          <Footer/>
        </div>
      </LocomotiveScrollProvider>
    </div>

  );
}

export default App;
