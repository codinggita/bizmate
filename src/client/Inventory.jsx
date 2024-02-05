import React, { useState, useEffect } from "react";
import AddIteam from "./AddItem";
import './style/inventory.css';
import Item from "./Item";
import emptyi from './assets/emptyill.svg'
const Inventory = (props)=>{
    const [additem, setadd] = useState(false);
    
    const handleItem = ()=>{
        setadd(true);
      }
    const handleCloseForm = ()=>{
        setadd(false);
    }
    const items = props.items;
    useEffect(() => { 
        // Use useEffect to conditionally show/hide elements based on props.items.length
        const emp = document.querySelector('.empty');
        const ide = document.querySelector('.item-details');
        const addi = document.getElementById('addi');
        if (props.items.length === 0) {
            emp.style.display = 'flex';
            ide.style.display = 'none';
            addi.classList.add('animate__animated', 'animate__flash', 'animate__infinite','animate__slow');
        } else {
            addi.classList.remove('animate__animated', 'animate__flash', 'animate__infinite','animate__slow');
            emp.style.display = 'none';
            ide.style.display = 'flex';
        }
        
    }, [props.items.length]);

    return (
        <React.Fragment>
            <div className="inventory" id="inventory">
                <button className="action-add" onClick={handleItem} id="addi">
                    Add Item
                </button>
                <div className="ip">
                    <div className="item-details">
                    { 
                        items.map((item)=>{
                            return(
                                <Item item = {item} 
                                key = {item.id}
                                onplus ={props.onplus}
                                onminus={props.onminus}
                                onupdate={props.onupdate}
                                onDelete={props.onDelete}
                                />
                            )
                        })
                    }
                    </div>
                    <div className="empty">
                        <div className="illemp">
                            <img src={emptyi}/>
                        </div>
                    </div>
                </div>
                
            </div>
            {
                additem && <AddIteam onClose={handleCloseForm} onAdd={props.onAdd}/>
            }
            
        </React.Fragment>
    )
}
export default Inventory;