import React from "react";
import { ChartContainer } from '@mui/x-charts';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart'; 
import './style/dashboard.css';
const Dashboard = (props)=>{
    return (
        <div className="dashboard">
            <div className="details">
                <div className="main-dash">
                    <div className="welcom-head">
                        Welcome Back {props.company.business_name} !!!
                    </div>
                    <div className="overview">
                        <div className="give">
                            <div className="info">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                            <span>You'll Get</span>
                            </div>
                            <div className="res">
                                {props.dash.get} Rs
                            </div>
                        </div>
                        <div className="get">
                            <div className="info">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                            <span>You'll Give</span>
                            </div>
                            <div className="res">
                                {props.dash.give} Rs
                            </div>
                        </div>
                    </div>
                    <div className="sale-view">
                        <div className="shead">Your Sale Overview</div>
                        <div className="sale-result">
                            <span id="ts">Total Sale</span>
                            <span id="res">{props.dash.sale} Rs</span>
                        </div>
                        <div className="graph">
                        <ChartContainer
                            width={300}
                            height={200}
                            series={[{ type: 'line', data: props.dash.val }]}
                            xAxis={[{ scaleType: 'point', data: props.dash.mon }]}
                            sx={{
                                '.MuiLineElement-root': {
                                stroke: '#8884d8',
                                strokeWidth: 2,
                                },
                                '.MuiMarkElement-root': {
                                stroke: '#8884d8',
                                scale: '0.6',
                                fill: '#fff',
                                strokeWidth: 2,
                                },
                            }}
                            disableAxisListener
                            >
                            <LinePlot />
                            <MarkPlot />
                        </ChartContainer>
                        </div>
                    </div>
                    <div className="otherd">
                    <div className="purchase-view">
                        <div className="shead">Total Purchase</div>
                        <div className="purres">
                            {props.dash.purchase} Rs
                        </div>
                        
                    </div>
                    <div className="purchase-view">
                        <div className="shead">Stock Value</div>
                        <div className="purres">
                            {props.dash.stockVale} Rs
                        </div>
                        
                    </div>
                    <div className="purchase-view" id="lows">
                        <div className="shead">Total Low Stock Item</div>
                        <div className="purres">
                            {props.dash.lowstock} 
                        </div>
                        <div className="list">
                            {
                                props.dash.lowstockItem.map(li =>{
                                    return (
                                        <h3>{li.item_name}</h3>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;