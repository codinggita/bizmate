import React from "react";
import './style/header.css';
import businesslogo from './assets/ls.png'

const Header = (props)=>{
        return(
            <header>
                <div className="leftheader">
                    <span>{props.title}</span>
                </div>
                <div className="rightheader">
                    <span className="gradient-text">Laxmi Sales</span>
                    <div className="company-logo">
                        <img src={businesslogo}/>
                    </div>
                </div>
            </header>
        );
    
}
export default Header;