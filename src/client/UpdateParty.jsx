import bizmateLogo from './assets/logoNobg.png';
import React from "react";
import './style/form.css';
const UpdateParty = (props)=>{
    const curItem = props.cur;
    const handleSubmit = (e) => {
        e.preventDefault();
     
        const newItem = {
            id:curItem.id,
            party_name: document.getElementById('namei').value || curItem.party_name,
            opening_bal: document.getElementById('spi').value || curItem.opening_bal,
            party_mobile: document.getElementById('uniti').value || curItem.party_mobile,
            party_add: document.getElementById('loci').value || curItem.party_add,
          };
          props.onupdate(newItem);
          props.onClose();
        
      };
    return(
        <div className="form">
            <div className="register">
                <div className="form-head">
                    <div className="form-logo">
                        <img src={bizmateLogo}/>
                        <span>Update</span>
                    </div>
                </div>
                <form id='update' onSubmit={handleSubmit}>

                    <input type='text' id='namei'  placeholder={`Item : ${curItem.party_name}`}>
                    </input>
                    
                    <input type='number' id='spi' placeholder={`Sale : ${curItem.opening_bal}`}>
                        
                    </input>
                    
                    <input type='text' id='uniti' placeholder={`Unit : ${curItem.party_mobile}`}>
                        
                    </input>
                    <input type='text' id='loci'placeholder={`Location : ${curItem.party_add}`}>
                        
                    </input>
                    
                    <div className="but">
                        <button className="entry-button" type="submit">Update</button>
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
export default UpdateParty;