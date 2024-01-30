import React, { useState, useEffect } from "react";
import UpdateParty from './UpdateParty';
import './style/inventory.css';

const Party = (props)=>{
    const item = props.item;
    const [updateform, setupdate] = useState(false);
    const handleItem = ()=>{
        setupdate(true);
      }
    const handleCloseForm = ()=>{
        setupdate(false);
    }
    return (
        <React.Fragment>
            <div className="item" >
                <div className="left-i partyl" onClick={handleItem}>
                    <div id="name ">
                        {item.party_name}
                    </div>
                    <div id="sp">{item.opening_bal} Rs</div>
                    <div id="qty">{item.qty} {item.party_mobile}</div>
                    <div id="loc">{item.party_add}</div>
                </div> 
                <div className="right-i partyr">
    
                    <button id="delete" onClick={()=>{props.onDelete(item)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                    </button>
                </div>
            </div>
            {
                updateform && <UpdateParty onClose={handleCloseForm} onupdate={props.onupdate} cur={item}/>
            }
        </React.Fragment>
    )
}
export default Party;