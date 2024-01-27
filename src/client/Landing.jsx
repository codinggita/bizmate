import React, { useState, useEffect } from "react";
import bizmate from './assets/bizmate.png';
import bizmateLogo from './assets/logoNobg.png';
import slide1 from './assets/slide1.svg';
import slide2 from './assets/slide2.svg';
import slide3 from './assets/slide3.svg';
import slide4 from './assets/slide4.svg';
import slide5 from './assets/slide5.svg';
import Login from './Login';
import Register from './Register';
import './style/landing.css';

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [loginstate, setlogin] = useState(false);
  const [registerstate, setregister] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  
  
  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const intervalId = setInterval(() => {
      const nextSlide = (currentSlide % 5) + 1;

      document.getElementById(`s${currentSlide}`).style.display = 'none';
      document.getElementById(`s${nextSlide}`).style.display = 'flex';

      setCurrentSlide(nextSlide);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlide]);

  useEffect(() => {
    if (smallScreen) {
      const leftPartDiv = document.querySelector('.left-part');
      const rightPartDiv = document.querySelector('.right-part');
      setTimeout(() => {
        leftPartDiv.classList.add('animate__fadeOutUp');
        rightPartDiv.classList.add('animate__slideInUp');
        
      }, 3500);
      setTimeout(() => {
        leftPartDiv.style.display = 'none';
      }, 4000);
    }
  }, [smallScreen]);

  const handleLogin = ()=>{
    document.getElementById('welcome').style.pointerEvents = 'none';
    setlogin(true);
  }
  const handleRegister = ()=>{
    document.getElementById('welcome').style.pointerEvents = 'none';
    setregister(true);
  }
  const handleCloseForm = ()=>{
    setlogin(false);
    setregister(false);
  }
  return (
    <React.Fragment>
      <div className="landing" id="welcome">
      <div className="blurry-header-helper"></div>
      <div className="header">
        <div className="head-left">
          <div className="logo-head">
              <img src={bizmateLogo} alt="Bizmate Logo" />
              <span>izMate</span>
          </div>
        </div>
        <div className="head-right">
          <button className="entry-button" id="login" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
 
      <div className="land-main">
        <div className="left-part animate__animated">
          <div className="circle-color  ">
            <img src={bizmate} className="animate__animated animate__pulse animate__infinite"/>
          </div>
        </div>
        <div className="right-part animate__animated">
          <div className="slideshow">
            <div className="slide animate__animated animate__fadeInLeft " id="s1">
              <h3>Effortless Invoicing</h3>
              <p>Generate professional invoices in seconds.</p>
              <img src={slide1}/>
            </div>
            <div className="slide animate__animated animate__fadeInDown" id="s2">
              <h3>Inventory Control</h3>
              <p>Manage your stock with ease.</p>
              <img src={slide2}/>
            </div>
            <div className="slide animate__animated animate__fadeInLeft" id="s3">
              <h3>Secure Data</h3>
              <p>Your business information is always safe with us.</p>
              <img src={slide3}/>
            </div>
            <div className="slide animate__animated animate__fadeInDown" id="s4">
              <h3>Accessible Anywhere</h3>
              <p>Access your data from any device, anytime, anywhere.</p>
              <img src={slide4}/>
            </div>
            <div className="slide animate__animated animate__zoomInDown" id="s5">
              <h3>Get Started Today</h3>
              <p>Sign up for a free trial and experience the power of BizMate!</p>
              <img src={slide5}/>
            </div>
          </div>
          <button className="entry-button" onClick={handleRegister}>
            Let's Get Started
          </button>
        </div>
      </div>
    </div>
    {loginstate && <Login onClose={handleCloseForm} />}
    {registerstate && <Register onClose={handleCloseForm} />}
    </React.Fragment>
  );
}

export default Landing;
