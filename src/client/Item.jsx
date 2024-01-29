import React, { useState, useEffect } from "react";
import UpdateItem from "./UpdateItem";
import './style/inventory.css';

const Item = (props)=>{
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
                <div className="left-i" onClick={handleItem}>
                    <div id="name">
                        {item.item_name}
                    </div>
                    <div id="sp">{item.sale_price} Rs</div>
                    <div id="cp">{item.purchase_price} Rs</div>
                    <div id="qty">{item.qty} {item.unit}</div>
                    <div id="loc">{item.location}</div>
                </div>
                <div className="right-i">
                    <button id="plus" onClick={()=>{props.onplus(item)}}>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    </button>
                    <hr></hr>
                    <button id="minus" onClick={()=>{props.onminus(item)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>
                </div>
            </div>
            {
                updateform && <UpdateItem onClose={handleCloseForm} onupdate={props.onupdate} cur={item}/>
            }
        </React.Fragment>
    )
}
export default Item;