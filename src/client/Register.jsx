import bizmateLogo from './assets/logoNobg.png';
import React from "react";
import './style/form.css';
const Register = (props)=>{
    return(
        <div className="form">
            <div className="register">
                <div className="form-head">
                    <div className="form-logo">
                        <img src={bizmateLogo}/>
                        <span>Register</span>
                    </div>
                </div>
                <form>
                    <lable for="name">Business Name</lable>
                    <input type="text" id="name"/>
                    <br></br>
                    <br></br>
                    <lable for="type">Business Type</lable>
                    <input type="text" id="type"/>
                    <br></br>
                    <br></br>
                    <lable for="mobile">Mobile No.</lable>
                    <input type="text" id="mobile"  maxLength={10} minLength={10}/>
                    <br></br>
                    <br></br>
                    
                    <lable for="gstin">GSTIN</lable>
                    <input type="text" id="gstin"/>
                    <br></br>
                    <br></br>
                    <lable for="add">Address</lable>
                    <input type="text" id="add"/>
                    <br></br>
                    <br></br>
                    <div className="but">
                        <button className="entry-button" type="submit">Deal 🤝 </button>
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