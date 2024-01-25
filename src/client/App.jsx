import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import Home from "./Home";
import './style/App.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    // Set a timer to hide the Landing page after 5 seconds
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 3000);

    // Clear the timer when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []); // empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="main-frame">
      {showLanding && <Landing />}
      {!showLanding && <Home />}
    </div>
  );
}

export default App;
