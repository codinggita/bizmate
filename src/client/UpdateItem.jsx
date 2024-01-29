import bizmateLogo from './assets/logoNobg.png';
import React from "react";
import './style/form.css';
const Update = (props)=>{
    const curItem = props.cur;
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newItem = {
            id:curItem.id,
            item_name: document.getElementById('namei').value || curItem.item_name,
            item_type: document.getElementById('typei').value || curItem.item_type,
            sale_price: document.getElementById('spi').value || curItem.sale_price,
            purchase_price: document.getElementById('cpi').value || curItem.purchase_price,
            qty: document.getElementById('qtyi').value || curItem.qty,
            unit: document.getElementById('uniti').value || curItem.unit,
            location: document.getElementById('loci').value || curItem.location,
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

                    <input type='text' id='namei'  placeholder={`Item : ${curItem.item_name}`}>
                    </input>
                    <input type='text' id='typei' placeholder={`Type : ${curItem.item_type}`}>
                        
                    </input>
                    <input type='number' id='spi' placeholder={`Sale : ${curItem.sale_price}`}>
                        
                    </input>
                    <input type='number' id='cpi' placeholder={`Purchase : ${curItem.purchase_price}`}>
                        
                    </input>
                    <input type='number' id='qtyi' placeholder={`Qty : ${curItem.qty}`}>
                        
                    </input>
                    <input type='text' id='uniti' placeholder={`Unit : ${curItem.unit}`}>
                        
                    </input>
                    <input type='text' id='loci'placeholder={`Location : ${curItem.location}`}>
                        
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
export default Update;