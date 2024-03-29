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
    useEffect(()=>{
        if(item.qty>=0){
            document.getElementById(`${item.id}`).style.color='green';
        }
        else{
            document.getElementById(`${item.id}`).style.color='red';

        }
    },[item.qty])
    
    return (
        <React.Fragment>
            <div className="item" >
                <div className="left-i" onClick={handleItem}>
                    <div id="name">
                        {item.item_name}
                         <span id="loc">
                            (Location {item.location})
                         </span>
                    </div>
                    <div id="sp">
                        <span id="title">Sale Price</span>
                        <br></br>
                        {item.sale_price} Rs
                    </div>
                    <div id="cp">
                        <span id="title">Purchase Price</span>
                        <br></br>
                        {item.purchase_price} Rs
                    </div>
                    <div id="qty">
                        <span id="title">In Stock</span>
                        <br></br>
                        <span id={item.id}>{item.qty} {item.unit}</span>
                    </div>
                    <div id="locd">
                        <span id="title">Location</span>
                        <br></br>
                        {item.location}
                    </div>
        
                </div> 
                <div className="right-i">
                   
                    <button id="delete" onClick={()=>{props.onDelete(item)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
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