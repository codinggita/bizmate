import React ,{useEffect,useState} from "react";
import Invoice from "./Invoice";
import AddSale from './AddSale';
import './style/sale.css';
const Purchase = (props)=>{
    const [addsale, setadd] = useState(false);
    const handleSale = ()=>{
        setadd(true); 
      }
    const handleCloseForm = ()=>{
        setadd(false);
    }
    const invoice = props.sale;
    return (
        <React.Fragment>
            {!addsale && <div className="sale">
                <div className="ip">
                    <div className="sale-detail">
                        <button className="add-sale" onClick={handleSale}>
                            Purchase
                        </button>
                        {
                            invoice.map((invo)=>{
                                return (
                                    <Invoice 
                                    item = {props.items}
                                    party = {props.partys}
                                    sale = {invo}
                                    key = {invo.id}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>}
            {
                addsale && <AddSale
                 onClose={handleCloseForm} 
                 item = {props.items}
                 party = {props.partys}
                 sale = {props.sale}
                 addSale = {props.addSale}/>
                 
            }
            
        </React.Fragment>
    )
}
export default Purchase; 