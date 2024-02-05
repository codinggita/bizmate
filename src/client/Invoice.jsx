import React ,{useEffect,useState} from "react";
import './style/sale.css';
const Invoice = (props) =>{
    const party = props.party.find(party => party.id===props.sale.party_id)
    const invo = props.sale;
    return (
        <React.Fragment>
            <div className="invoice">
                <div className="left-in">
                    <div id="name">
                        {party.party_name}
                        <span >
                            # {invo.id}
                        </span>
                    </div>
                    <div className="sub-felid">
                        <span id="title">Total</span>
                        <br></br>
                        {invo.total} Rs
                    </div>
                    <div className="sub-felid">
                        <span id="title">Balance</span>
                        <br></br>
                        {invo.balance} Rs
                    </div>
                    <div className="sub-felid">
                        <span id="title">Date</span>
                        <br></br>
                        {invo.date.toLocaleDateString()}
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}
export default Invoice;