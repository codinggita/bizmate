import React, { useState, useEffect } from "react";
import bizmate from './assets/bizmate.png';
import bizmateLogo from './assets/logoNobg.png';
import slide1 from './assets/slide1.svg';
import slide2 from './assets/slide2.svg';
import slide3 from './assets/slide3.svg';
import slide4 from './assets/slide4.svg';
import slide5 from './assets/slide5.svg';
import './style/landing.css';

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next slide index
      const nextSlide = (currentSlide % 5) + 1;

      // Hide the current slide
      document.getElementById(`s${currentSlide}`).classList.add('animate__bounceOutLeft');
      document.getElementById(`s${currentSlide}`).style.display = 'none';

      // Show the next slide
      document.getElementById(`s${nextSlide}`).classList.remove('animate__bounceOutLeft');
      document.getElementById(`s${nextSlide}`).style.display = 'flex';
      // Update the current slide index
      setCurrentSlide(nextSlide);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on component unmount

  }, [currentSlide]); // Run the effect when currentSlide changes


  return (
    <div className="landing">
      <div className="blurry-header-helper"></div>
      <div className="header">
        <div className="head-left">
          <div className="logo-head">
              <img src={bizmateLogo} alt="Bizmate Logo" />
              <span>BizMate</span>
          </div>
        </div>
        <div className="head-right">
        <button>
          <a href="#" class="btn2"><span class="spn2">Login</span></a>
        </button>
    
        </div>
      </div>
 
      <div className="land-main">
        <div className="left-part">
          <div className="circle-color  ">
            <img src={bizmate} className="animate__animated animate__pulse animate__infinite"/>
          </div>
        </div>
        <div className="right-part">
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
          <button class="cssbuttons-io-button">
           Get started
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>

        </div>
      </div>
    </div>
  );
}

export default Landing;
