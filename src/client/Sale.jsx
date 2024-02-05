import React ,{useEffect,useState} from "react";
import Invoice from "./Invoice";
import AddSale from './AddSale';
import './style/sale.css';
const Sale = (props)=>{
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
                <div className="sale-detail">
                    <button className="add-sale" onClick={handleSale}>
                        Add New Sale
                    </button>
                    {
                        invoice.map((invo)=>{
                            return (
                                <Invoice 
                                item = {props.items}
                                party = {props.partys}
                                sale = {invo}
                                />
                            )
                        })
                    }
                </div>
            </div>}
            {
                addsale && <AddSale
                 onClose={handleCloseForm} 
                 item = {props.items}
                 party = {props.partys}
                 sale = {props.sale}/>
            }
            
        </React.Fragment>
    )
}
export default Sale; 