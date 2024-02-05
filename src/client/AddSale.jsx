import React, {useState,useEffect} from "react";
import './style/addsale.css';
const AddSale = (props)=>{
  const partys = props.party;
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [resultp, setResultp] = useState([]);
  const [partyNameInput, setPartyNameInput] = useState('');
  const [party,setParty] = useState(null);
  const [total,setTotal] = useState(0);
  const [itemS,setitemS] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

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
                  <button className="add-sale" id="sav">Save</button>
                </div>
                <div className="paid">
                  
                  <input type="number" placeholder=" Paid"/>
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
                            Total : {total}Rs
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

                    </div>
                    {/* <div className="divider"></div> */}
                </form>
            </div>
           </div>
        </div>
    </React.Fragment>
    );
}
export default AddSale; 