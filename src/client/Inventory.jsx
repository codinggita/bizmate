import React, { useState, useEffect } from "react";
import './style/inventory.css';
import Item from "./Item";
const Inventory = (props)=>{
    const items = props.items;
    return (
        <React.Fragment>
            <div className="inventory" id="inventory">
                <button className="action-add">
                    Add Item
                </button>
                <div className="item-details">
                    {
                        items.map((item)=>{
                            return(
                                <Item item = {item} 
                                key = {item.id}
                                onplus ={props.onplus}
                                onminus={props.onminus}
                                onupdate={props.onupdate}
                                />
                            )
                        })
                    }
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default Inventory;