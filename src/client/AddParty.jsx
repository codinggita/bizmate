import React from "react";
import bizmateLogo from './assets/logoNobg.png';
import './style/form.css';
const AddParty = (props)=>{
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newItem = { 
            id:1,
            party_name: document.getElementById('namei').value,
            opening_bal: document.getElementById('spi').value ,
            party_mobile: document.getElementById('uniti').value,
            party_add: document.getElementById('loci').value,
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
                        <span>New Party</span>
                    </div>
                </div>
                <form id='update' onSubmit={handleSubmit}>

                    <input type='text' id='namei'  placeholder="Party Name" required>
                    </input>
                    
                    <input type='number' id='spi' placeholder="Opening Balance" required>
                        
                    </input>
                    
                    <input type='text' id='uniti' placeholder="Contact No." required>
                        
                    </input>
                    <input type='text' id='loci'placeholder="Address" required>
                        
                    </input>
                    
                    <div className="but">
                        <button className="entry-button" type="submit">Add Party</button>
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
export default AddParty;