import React, { useState, useEffect } from "react";
import AddParty from './AddParty';
import './style/inventory.css';
import Party from './Party';
import emptyi from './assets/emptyill.svg'
const Partys = (props)=>{
    const [additem, setadd] = useState(false);
    
    const handleItem = ()=>{
        setadd(true);
      }
    const handleCloseForm = ()=>{
        setadd(false);
    }
    const items = props.partys;
    useEffect(() => {
        // Use useEffect to conditionally show/hide elements based on props.items.length
        const emp = document.querySelector('.empty');
        const ide = document.querySelector('.item-details');
        const addi = document.getElementById('addi');
        if (props.partys.length === 0) {
            emp.style.display = 'flex';
            ide.style.display = 'none';
            addi.classList.add('animate__animated', 'animate__flash', 'animate__infinite','animate__slow');
        } else {
            addi.classList.remove('animate__animated', 'animate__flash', 'animate__infinite','animate__slow');
            emp.style.display = 'none';
            ide.style.display = 'flex';
        }
        
    }, [props.partys.length]);

    return (
        <React.Fragment>
            <div className="inventory" id="inventory">
                <button className="action-add" onClick={handleItem} id="addi">
                    Add Party
                </button>
                <div className="ip">
                    <div className="item-details">
                        { 
                            items.map((item)=>{
                                return(
                                    <Party item = {item} 
                                    key = {item.id}
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
                additem && <AddParty onClose={handleCloseForm} onAdd={props.onAdd}/>
            }
            
        </React.Fragment>
    )
}
export default Partys;