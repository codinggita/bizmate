import React, { useState, useEffect } from "react";
import logo from './assets/logoNobg.png';
import './style/home.css'
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";
import Sale from "./Sale";
import Partys from "./Partys";
import Purchase from "./Purchase";
import profile from './assets/profiledetails.svg'
import dill from './assets/dashboard.svg';
import sill from './assets/sale.svg';
import pill from './assets/purchase.svg';
import paill from './assets/party.svg'
import ig from './assets/inventory.gif';
const Home = (props)=>{
    //item object
    const[shop, setShop] = useState(
        {
            dashboard: {
                get: 0,
                give: 0,
                sale: 0,
                purchase: 0,
                montlysale: [],
                stockVale: 0,
                lowstock: 0,
                lowstockItem: [],
                mon:[],
                val:[],
            },
            items : [
                {
                    id:0,
                    item_name : "Sample Item",
                    item_type :"Sample Type",
                    sale_price:0,
                    purchase_price:0,
                    qty:0,
                    unit:"PCs",
                    location:"A-10" 
                }
            ],
            partys : [
                {
                    id:0,
                    party_name : "Mr.Narayan Tripathi",
                    opening_bal : 0,
                    party_mobile: "9302310053",
                    party_add : "Phagwara"
                }
            ],
            sale:[
                
            ],
            purchase:[
                
            ]
        }
    );
    
    const AddSale = (sale)=>{
        const newI = shop.items;
        sale.item.map(item => {
            const ii = shop.items.findIndex((i)=>i.id===item.iid);
            newI[ii].qty = parseInt(newI[ii].qty) - parseInt(item.iqty);
            newI[ii].sale_price = item.irate;
            
        })
        setShop({...shop,items:newI});
        const pi = shop.partys.findIndex((p) => p.id === sale.party_id);
        if(pi !== -1){
            const uitems = shop.partys;
            uitems[pi].opening_bal = uitems[pi].opening_bal + sale.balance;
            setShop({...shop,
                partys: uitems});
        }
        const usale = shop.sale;
        const len = usale.length;
        if(len===0){
            const newId = 1;
            sale.id = newId;
            usale.push(sale);
        }
        else{
            const newId = usale[len-1].id + 1;
            sale.id = newId;
            usale.push(sale);
        }
        setShop({...shop, sale:usale});
    }
    const AddPur = (sale)=>{
        const newI = shop.items;
        sale.item.map(item => {
            const ii = shop.items.findIndex((i)=>i.id===item.iid);
            newI[ii].qty = parseInt(newI[ii].qty) + parseInt(item.iqty);
            newI[ii].purchase_price = item.irate;
            
        })
        setShop({...shop,items:newI});
        const pi = shop.partys.findIndex((p) => p.id === sale.party_id);
        if(pi !== -1){
            const uitems = shop.partys;
            uitems[pi].opening_bal = uitems[pi].opening_bal - sale.balance;
            setShop({...shop,
                partys: uitems});
        }
        const usale = shop.purchase;
        const len = usale.length;
        if(len===0){
            const newId = 1;
            sale.id = newId;
            usale.push(sale);
        }
        else{
            const newId = usale[len-1].id + 1;
            sale.id = newId;
            usale.push(sale);
        }
        setShop({...shop, purchase:usale});
    }
    const increaseStock = (item) => {
        item.qty =  parseInt(item.qty);
        const itemIndex = shop.items.findIndex((i) => i.id === item.id);
    
        if (itemIndex !== -1) {
          const updatedItems = [...shop.items];
        
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            qty: updatedItems[itemIndex].qty +1,
          };
    
          setShop({
            ...shop,
            items: updatedItems,
          });
        }
      };
      const decreaseStock = (item) => {
        item.qty =  parseInt(item.qty);
        const itemIndex = shop.items.findIndex((i) => i.id === item.id);
    
        if (itemIndex !== -1 && shop.items[itemIndex].qty > 0) {
          const updatedItems = [...shop.items];
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            qty: updatedItems[itemIndex].qty - 1,
          };
    
          setShop({
            ...shop,
            items: updatedItems,
          });
        }
      };
      const updateItem = (item) => {
        const itemIndex = shop.items.findIndex((i) => i.id === item.id);
        if(itemIndex !== -1){
            const uitems = shop.items;
            uitems[itemIndex] = item;
            setShop({...shop,
                items: uitems});
            }
      };
      const addItem = (item) =>{
        const uitem = shop.items;
        const len = uitem.length;
        if(len===0){
            const newId = 1;
            item.id = newId;
            uitem.push(item);
        }
        else{
            const newId = uitem[len-1].id + 1;
            item.id = newId;
            uitem.push(item);
        }
        setShop({...shop, items:uitem});
      }
      const deleteItem = (item)=>{
        const itemIndex = shop.items.findIndex((i) => i.id === item.id);
        if(itemIndex !== -1){
            const uitems = shop.items;
            uitems.splice(itemIndex,1);
            setShop({...shop,
                items: uitems});
        }

      }
      const deleteParty = (party)=>{
        const itemIndex = shop.partys.findIndex((i) => i.id === party.id);
        if(itemIndex !== -1){
            const uitems = shop.partys;
            uitems.splice(itemIndex,1);
            setShop({...shop,
                partys: uitems});
        }

      }
      const addParty = (party)=>{
        const uparty = shop.partys;
        const len = uparty.length;
        if(len===0){
            const newId = 1;
            party.id = newId;
            uparty.push(party);
        }
        else{
            const newId = uparty[len-1].id + 1;
            party.id = newId;
            uparty.push(party);
        }
        setShop({...shop, partys:uparty});
      }
      const updateParty = (item) => {
        const itemIndex = shop.partys.findIndex((i) => i.id === item.id);
        if(itemIndex !== -1){
            const uitems = shop.partys;
            uitems[itemIndex] = item;
            setShop({...shop,
                partys: uitems});
            }
        };
        const [activeComponent, setActiveComponent] = useState('dashboard');
        
        useEffect(() => {
            let getSum = 0;
            let giveSum = 0;
            let saleTotal = 0;
            let purchaseTotal = 0;
            const monthlySaleMap = {};
            let stockValue = 0;
            let lowStockCount = 0;
            const lowStockItems = [];
            const mon_= [];
            const val_=[];

            shop.partys.forEach(party => {
                const openingBal = party.opening_bal;
                if (openingBal >= 0) {
                    getSum += openingBal;
                } else {
                    giveSum += (-1 * openingBal);
                }
            });

            shop.sale.forEach(sale => {
                saleTotal += sale.total;
                const saleDate = new Date(sale.date);
                const month = saleDate.getMonth();
                const year = saleDate.getFullYear();
                const key = `${year}-${month}`;
                if (!monthlySaleMap[key]) {
                    monthlySaleMap[key] = 0;
                }
                monthlySaleMap[key] += sale.total;
            });

            shop.purchase.forEach(purchase => {
                purchaseTotal += purchase.total;
            });

            const monthlySale = Object.keys(monthlySaleMap).map(key => ({
                month: key,
                total: monthlySaleMap[key]
            }));
            monthlySale.forEach(item => {
                mon_.push(item.month);
                val_.push(item.total);
                console.log(mon_);
                console.log(val_);
            });
            // Calculate stock value and low stock count
            shop.items.forEach(item => {
                if(item.qty > 0){
                    stockValue += item.purchase_price * item.qty;
                }
                if (item.qty < 0) {
                    lowStockCount++;
                    lowStockItems.push(item);
                }
            });

            setShop(prevState => ({
                ...prevState,
                dashboard: {
                    get: parseInt(getSum),
                    give: parseInt(giveSum),
                    sale: parseInt(saleTotal),
                    purchase: parseInt(purchaseTotal),
                    montlysale: monthlySale,
                    stockVale: stockValue,
                    lowstock: lowStockCount,
                    lowstockItem: lowStockItems,
                    mon:mon_,
                    val:val_,
                }
            }));
           
        
        }, [shop.partys, shop.sale, shop.purchase,activeComponent]);
    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'dashboard':
                return <Dashboard 
                company = {props.user}
                dash = {shop.dashboard}
                />;
            case 'inventory':
                return <Inventory 
                items = {shop.items} 
                onplus={increaseStock}
                onminus={decreaseStock}
                onupdate={updateItem}
                onAdd={addItem}
                onDelete={deleteItem}
                />;
            case 'sale':
                return <Sale 
                items = {shop.items}
                partys = {shop.partys}
                sale = {shop.sale}
                addSale = {AddSale}
                />;
            case 'purchase':
                return <Purchase 
                items = {shop.items}
                partys = {shop.partys}
                sale = {shop.purchase}
                addSale = {AddPur}
                />;
            case 'party':
                return <Partys 
                partys = {shop.partys}
                onupdate={updateParty}
                onAdd={addParty}
                onDelete={deleteParty}
                />;
            default:
                return <Dashboard />;
        }
    };
    const handleButtonClick = (component) => {
        const d = document.getElementById('dashill');
        const i = document.getElementById('invenill');
        const s = document.getElementById('saleill');
        const p = document.getElementById('purchill');
        const pa = document.getElementById('paill');
        d.style.display = 'none';
        i.style.display = 'none';
        s.style.display = 'none';
        p.style.display = 'none';
        pa.style.display = 'none';
        if(component==='purchase'){
            p.style.display = 'block';
        }
        else if(component==='inventory'){
            i.style.display = 'block';
        }
        else if (component==='sale'){
            s.style.display = 'block';
        }
        else if(component ==='party'){
            pa.style.display = 'block';
        }
        else{
            // dashboard 
            d.style.display = 'block';
        }
        setActiveComponent(component);
    };
    const handleCdetails = ()=>{
        document.querySelector('.comp-details').style.display = 'block';
        document.querySelector('.clogo').style.display = 'none';
        document.querySelector('.backcomp').style.display = 'block';
    }
    const handleCclose = () =>{
        document.querySelector('.comp-details').style.display = 'none';
        document.querySelector('.clogo').style.display = 'block';
        document.querySelector('.backcomp').style.display = 'none';
    }
    return(
        <React.Fragment>
            <div id="home"className="home">

                <div className="extra-logo">
                    <div className="home-logo">
                        <img src={logo}/>
                        <span>izmate</span>
                    </div>
                </div>
                <div className="comp-details animate__animated animate__slideInDown">
                    <div className="com-head">
                        Company Details
                    </div>
                    <div className="felid">
                        <div className="result">
                            {props.user.business_name}
                        </div>
                        <div className="result">
                            {props.user.business_type}
                        </div>
                        <div className="result">
                            {props.user.mobile}
                        </div>
                        <div className="result">
                            {props.user.gstin}
                        </div>
                        <div className="result">
                            {props.user.address}
                        </div>
                        <div className="profile">
                            <img src={profile} className="animate__animated animate__fadeIn "/>
                        </div>
                    </div>
                </div>
                <div className="backcomp animate__animated animate__fadeIn animate__delay-1s">
                    <button class="button" onClick={handleCclose}>
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
                <button className="clogo" onClick={handleCdetails}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"/></svg>
                </button>
                
                <aside>
                    <div className="home-logo">
                        <img src={logo}/>
                        <span>izMate</span> 
                    </div>
                    <button onClick={() => handleButtonClick('dashboard')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>
                    <span>Dashboard</span>
                    </button>
                    <button onClick={() => handleButtonClick('inventory')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"/></svg>
                        <span>Inventory</span>
                    </button>
                    <button onClick={() => handleButtonClick('party')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                        <span>Parties</span>
                    </button>
                    <button onClick={() => handleButtonClick('sale')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
                    <span>Sale</span>
                    </button>
                    <button onClick={() => handleButtonClick('purchase')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    <span>Purchase</span>
                    </button>
                    <div className="illustration">
                        <img className="ill animate__animated animate__pulse animate__infinite" id="dashill" src={dill} />
                        <img className="ill" id="invenill" src={ig}/>
                        <img className="ill animate__animated animate__pulse animate__infinite" id="saleill"  src={sill}/>
                        <img className="ill animate__animated animate__pulse animate__infinite" id="purchill" src={pill}/>
                        <img className="ill animate__animated animate__pulse animate__infinite" id="paill" src={paill}/>
                    </div>
                    <button id="logout" onClick={props.onCloseShop}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                        <span>Close Shop</span>
                    </button>
                </aside>
                <div className="home-main">
                    {renderActiveComponent()}
                </div>
            </div>
        </React.Fragment>
    );
} 
export default Home;