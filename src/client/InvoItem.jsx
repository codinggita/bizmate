import React, {useState,useEffect} from "react";
import './style/addsale.css';
const InvoItem = (props)=>{
    const [item,setItem] = useState(null);
    const [iname,setIname] = useState('');
    const [qty,setQty] = useState(0);
    const [rate,setRate] = useState(0);
    const [total,setTotal] = useState(0);
    const ina = document.getElementById(`iname${props.ki}`);
    const qt = document.getElementById(`iqty${props.ki}`);
    const ra = document.getElementById(`irate${props.ki}`);
    const [resulti,setResult] = useState([]);
    
    function Final(item) {
        props.onItemAdded({
          iname: item.item_name,
          iid: item.id,
          iqty: qty,
          irate: rate,
          itotal: total,
        });
      }
    const otherChange = () =>{
        setQty(qt.value);
        setRate(ra.value);
        setTotal(qt.value * ra.value);
    }
    const lookItem = ()=>{
        setItem(null);
        setIname(ina.value);
    }
    useEffect(()=>{
        if(item!==null){
            Final(item);
        }
    },[item,total,qty,rate]);

    useEffect(()=>{
        const filterList = props.items.filter(item => item.item_name.toLowerCase().includes(iname.toLowerCase()));
        setResult(filterList);

    },[iname, props.items]);
    const handleItemSelection = (selectedItem)=>{
        setItem(selectedItem);
        setIname(selectedItem.item_name);
        setQty(1);
        setRate(selectedItem.sale_price);
        setTotal(selectedItem.sale_price);
    };
    
    return(
        <React.Fragment>
            <div className="invo-item">
            <input
                type="text"
                id={`iname${props.ki}`}
                placeholder="Item Name"
                onChange={lookItem}
                style={{ width: '35%' }}
                value={iname}
            />
        
            <input
                type="number"
                id={`iqty${props.ki}`}
                placeholder="Qty"
                onChange={otherChange}
                value={qty}
                style={{
                    borderLeft: 'none',
                    borderRight: 'none',
                }}
            />
                <input type="number" id={`irate${props.ki}`} placeholder="Rate" onChange={otherChange} value={rate}/>
                <input type="number" id={`itotal${props.ki}`} placeholder="Total" onChange={otherChange} value={total}
                style={{
                    borderLeft: 'none',
                }}/>
            </div>
            {item === null &&(
                <div className="suggest" id="suggp">
                    {resulti.map(p => (
                    <h6 key={p.id}
                    onClick={() => handleItemSelection(p)}
                    >{p.item_name} (Price{p.sale_price})</h6>
                    ))}
                </div>
            )}
        </React.Fragment>

        
    );
}
export default InvoItem;