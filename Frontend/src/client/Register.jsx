import bizmateLogo from './assets/logoNobg.png';
import React from "react";
import './style/form.css';
const Register = (props)=>{
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newUserDetails = {
          business_name: document.getElementById('name_').value,
          business_type: document.getElementById('type').value,
          mobile: document.getElementById('mobile').value,
          gstin: document.getElementById('gstin').value,
          address: document.getElementById('add').value,
          password: document.getElementById('pass').value
        };
    
        // Check for required fields
        if (!newUserDetails.business_name || !newUserDetails.business_type || !newUserDetails.mobile || !newUserDetails.gstin || !newUserDetails.address || !newUserDetails.password) {
          alert('Please fill in all fields.');
        } else {
          props.onClose();
          props.onRegisterSubmit(newUserDetails);
        }
      };
    return(
        <div className="form">
            <div className="register">
                <div className="form-head">
                    <div className="form-logo">
                        <img src={bizmateLogo}/>
                        <span>Register</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <lable for="name_">Business Name</lable>
                    <input type="text" id="name_"/>
                    
                    <lable for="type">Business Type</lable>
                    <input type="text" id="type"/>
                    
                    <lable for="mobile">Mobile No.</lable>
                    <input type="text" id="mobile"  maxLength={10} minLength={10}/>
                    
                    
                    <lable for="gstin">GSTIN</lable>
                    <input type="text" id="gstin"/>
                    
                    <lable for="add">Address</lable>
                    <input type="text" id="add"/>

                    <lable for="pass">New Password</lable>
                    <input type="text" id="pass"/>
                    
                    <div className="but">
                        <button className="entry-button" type="submit">Deal </button>
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
export default Register;