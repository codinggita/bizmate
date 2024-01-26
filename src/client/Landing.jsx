import React, { useState, useEffect } from "react";
import bizmate from './assets/bizmate.png';
import bizmateLogo from './assets/logoNobg.png';
import './style/landing.css';

const Landing = () => {
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

        </div>
      </div>
      <div className="extra"></div>
      <div className="land-main">
        <div className="circle-color">
          <img src={bizmate}/>
        </div>
      </div>
    </div>
  );
}

export default Landing;
