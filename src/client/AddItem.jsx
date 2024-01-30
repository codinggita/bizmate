import React from "react";
import bizmateLogo from './assets/logoNobg.png';
import './style/form.css';
const AddIteam = (props)=>{
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newItem = { 
            id:1,
            item_name: document.getElementById('namei').value,
            item_type: document.getElementById('typei').value ,
            sale_price: document.getElementById('spi').value ,
            purchase_price: document.getElementById('cpi').value,
            qty: document.getElementById('qtyi').value,
            unit: document.getElementById('uniti').value,
            location: document.getElementById('loci').value,
          };
          props.onAdd(newItem);
          props.onClose();
        
      };
    return(
        <div className="form">
            <div className="register">
                <div className="form-head">
                    <div className="form-logo">
                        <img src={bizmateLogo}/>
                        <span>New Item</span>
                    </div>
                </div>
                <form id='update' onSubmit={handleSubmit}>

                    <input type='text' id='namei'  placeholder="Item" required>
                    </input>
                    <input type='text' id='typei' placeholder="Type" required>
                        
                    </input>
                    <input type='number' id='spi' placeholder="Sale Price" required>
                        
                    </input>
                    <input type='number' id='cpi' placeholder="Purchase Price"   required>
                        
                    </input>
                    <input type='number' id='qtyi' placeholder="Current Stock" required>
                        
                    </input>
                    <input type='text' id='uniti' placeholder="Unit" required>
                        
                    </input>
                    <input type='text' id='loci'placeholder="Location" required>
                        
                    </input>
                    
                    <div className="but">
                        <button className="entry-button" type="submit">Add Item</button>
                    </div>
                </form>


                <button class="button" onClick={()=> props.onClose()}>
                    <div class="button-box">
                        <span class="button-elem">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                            ></path>
                        </svg>
                        </span>
                        <span class="button-elem">
                        <svg viewBox="0 0 46 40">
                            <path
                            d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                            ></path>
                        </svg>
                        </span>
                    </div>
                </button>

            </div>

        </div>
    );
}
export default AddIteam;