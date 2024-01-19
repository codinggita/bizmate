import React from "react";
import bizmate from './assets/logoNobg.png';
import bizmatew from './assets/bizmate.png';
import businessloho from './assets/ls.png';
import './style/dashboard.css';

class Dashboard extends React.Component{
    render(){
        return(
            <div className="dashboard animate__animated animate__fadeIn">
                <aside>
                    <div className="logo">
                        <img src={bizmate}/>
                        <span>BizMate</span>
                    </div>
                    <div className="side-action-bar">
                        <button>Dashboard</button>
                        <button>Inventory</button>
                        <button>Sale</button>
                        <button>Purchase</button>
                        <img src={bizmatew}/>
                    </div>
                </aside>
                <main>
                    <header>
                        <span className="gradient-text">Laxmi Sales</span>
                        <img src={businessloho}/>
                    </header>
                </main>
            </div>
        );
    }
}
export default Dashboard;