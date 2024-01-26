import React, { useState } from "react";
import bizmate from './assets/logoNobg.png';
import bizmatew from './assets/bizmate.png';
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";
import Sale from "./Sale";
import Purchase from "./Purchase";
import Header from "./Header";
import './style/home.css';

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="dashboard animate__animated animate__fadeIn">
      <aside>
        <div className="logo">
          <img src={bizmate} alt="Bizmate Logo" />
          <span>BizMate</span>
        </div>
        <div className="side-action-bar">
          <button onClick={() => handleButtonClick("dashboard")}>Dashboard</button>
          <button onClick={() => handleButtonClick("inventory")}>Inventory</button>
          <button onClick={() => handleButtonClick("sale")}>Sale</button>
          <button onClick={() => handleButtonClick("purchase")}>Purchase</button>
          <img src={bizmatew} alt="Bizmate Logo White" />
        </div>
      </aside>
      <main>
        <Header title={"test"}/>
        {activeComponent === "dashboard" && <Dashboard />}
        {activeComponent === "inventory" && <Inventory />}
        {activeComponent === "sale" && <Sale />}
        {activeComponent === "purchase" && <Purchase />}
      </main>
    </div>
  );
};

export default Home;
