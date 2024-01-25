import React, { useState, useEffect } from "react";
import bizmate from './assets/bizmate.png';
import './style/landing.css';

const Landing = () => {
  const [addSlideOutDown, setAddSlideOutDown] = useState(false);

  useEffect(() => {
    // Set a timeout to add the second class after 2.5 seconds
    const timeoutId = setTimeout(() => {
      setAddSlideOutDown(true);
    }, 2300);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  // Concatenate the classes based on the state
  const imageClasses = `animate__animated animate__zoomInDown landing-logo ${addSlideOutDown ? 'animate__slideOutDown' : ''}`;

  return (
    <div className="landing">
      <img src={bizmate} className={imageClasses} alt="Bizmate Logo" />
    </div>
  );
}

export default Landing;
