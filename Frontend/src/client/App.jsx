import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import Home from "./Home";
import './style/App.css';

function App() {
  const[allowUser, SetAllowUser] = useState(false);
  const[user, setUser] = useState({
    business_name : 'BizMate',
    business_type : 'Retaile Shop',
    mobile : '9302310053',
    gstin : 'XXXXXXXXXXXXXXX',
    address : 'LPU',
    password : 'bizmate'
  });
  const updateUserDetails = (newUserDetails) => {
    setUser((prevUser) => ({ ...prevUser, ...newUserDetails }));
  };

  const handleRegisterSubmit = (newUserDetails) => {
    updateUserDetails(newUserDetails);
    alert(`Welcome to Bizmate, ${newUserDetails.business_name}!`);
    SetAllowUser(true);
  };

  const handleLoginSubmit = (enteredMobile, enteredPassword) => {
    if (enteredMobile === user.mobile && enteredPassword === user.password) {
      SetAllowUser(true);
    } else {
      alert('Wrong credentials. Please try again.');
    }
  
  };
  const handleLogout = ()=> {
    alert(`Should I close, ${user.business_name} .`);
    SetAllowUser(false);
  }
  return (
    <div className="main-frame">
      {allowUser ? (
        <Home user={user} onCloseShop={handleLogout}/>
      ) : (
        <Landing
          onRegisterSubmit={handleRegisterSubmit}
          onLoginSubmit={handleLoginSubmit}
        />
      )}
    </div>
  );
}

export default App;
