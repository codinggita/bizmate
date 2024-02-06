import React, {useState,useEffect} from "react";
import InvoItem from "./InvoItem";
import './style/addsale.css';
const AddSale = (props)=>{
  const partys = props.party;
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [resultp, setResultp] = useState([]);
  const [partyNameInput, setPartyNameInput] = useState('');
  const [party,setParty] = useState(null);
  const [t,sett] = useState(0);
  const [clickCount, setClickCount] = useState(1);
  const [currI , setCurr] = useState({});
  const [itemlist,setItemList] = useState([]);
  const [paid ,setPaid] = useState(0);
  const paying = ()=>{
    setPaid(document.getElementById('paid').value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalsale = {
      id:-1,
      party_id:party.id,
      date:new Date(date),
      total:t,
      balance:t - paid,
      item:itemlist
    }
    props.addSale(finalsale);
    props.onClose();
  };
  const onItemAdded = (newItem) => {
    setCurr(newItem);
  };

  const onAddI = ()=>{
    sett(pre=>pre+parseInt(currI.itotal));

    setClickCount((prevCount) => prevCount + 1);
    if(currI!==null){
      const il = itemlist;
      il.push(currI);
      setItemList(il);
    }
  }
  const lookPart = () => {
    setParty(null);
    setPartyNameInput(document.getElementById('pname').value);
  };

  useEffect(() => {
    const filteredPartys = partys.filter(party => party.party_name.toLowerCase().includes(partyNameInput.toLowerCase()));
    setResultp(filteredPartys);
  }, [partyNameInput, partys]);

  const handlePartySelection = (selectedParty) => {
    setParty(selectedParty);
    setPartyNameInput(selectedParty.party_name);
  };
  
    return (
        <React.Fragment>
          <button class="button" id="can" onClick={props.onClose}>
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
        <div className="addSale">
           <div className="addSaleInner">
            <div className="action-invo">
                <div className="save">
                  <button className="add-sale" id="sav" onClick={handleSubmit}>Save</button>
                </div>
                <div className="paid">
                  <lable>Paid</lable>
                  <input type="number" id="paid" onChange={paying} value={paid}/>
                  Rs
                </div>
            </div>
            <div className="containent">
                <form action="">
                    <div className="f1">
                        <div className="topin">
                          <input id="datei" type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          required
                          />
                          <div className="total">
                            Total : {t}Rs
                          </div>
                        </div>
                        

                        <lable>Party Name</lable>
                        <input type="text" id="pname" onChange={lookPart} value={partyNameInput}>
                        </input>

                        {party === null && (
                        <div className="suggest" id="suggp">
                            {resultp.map(p => (
                            <h6 key={p.party_name}
                            onClick={() => handlePartySelection(p)}
                            >{p.party_name} </h6>
                            ))}
                        </div>
                        )}
                        
                    </div>
                    
                    <div className="divider"></div>
                    <div className="item-selected">
                      {
                        Array.from({ length: clickCount }).map((_, index) => (
                          <InvoItem
                            key={index}
                            ki = {index}
                            items={props.item}
                            onItemAdded={onItemAdded} // Pass the callback function
                          />
                        ))
                      }
                    </div>
                    <div className="addi" onClick={onAddI}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/></svg>
                    </div>
                </form>
            </div>
           </div>
        </div>
    </React.Fragment>
    );
}
export default AddSale; 