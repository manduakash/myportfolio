import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import TechSkills from './components/TechSkills/TechSkills';
import Projects from './components/Projects/Projects';

function App() {

  const containerRef = useRef(null);


  return (
    <div className="App">
      <LocomotiveScrollProvider containerRef={containerRef} options={{ smooth: true, multiplier: 0.8, opacity: 0}} watch={[]}>
        <div className="main-container" id="main-container" ref={containerRef} data-scroll-container>
          <Navbar />
          <Header/>
          <LandingPage/>
          <About />
          <TechSkills/>
          <Projects/>
        </div>
      </LocomotiveScrollProvider>
    </div>

  );
}

export default App;
