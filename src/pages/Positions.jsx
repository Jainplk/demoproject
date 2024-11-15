import React from 'react';
import DashboardNavbar from '../componenets/DashboardNavbar'
import { positions } from '../data/componentData'
import '../componenets/DashboardCompStyle.css'
import Watchlist from '../componenets/Watchlist';

function Positions() {
    return (
        <>
            <div className="dashboardNavbar">
                <div className="row d-flex flex-nowrap p-0 m-0">
                    <DashboardNavbar />
                </div>
            </div>

            <div className="row d-flex justify-content-evenly align-items-start p-0 m-0">
                <div className="col-lg-4 p-0" style={{ borderRight: "1px solid rgb(224, 224, 224)" }}>
                    <Watchlist/>
                </div>

                <div className="col-lg-8 p-0">
                    <div className="position">
                        <h3 className="title">Positions ({positions.length}) </h3>
                        <div className="order-table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Product</th>
                                        <th>Instrument</th>
                                        <th>Qty.</th>
                                        <th>Avg.</th>
                                        <th>LTP</th>
                                        <th>P&L</th>
                                        <th>Chg.</th>
                                    </tr>
                                </tbody>
                                {positions.map((stock, index) => {
                                    const currVal = stock.price * stock.qty;
                                    const isProfit = currVal - stock.avg * stock.qty >= 0.0;
                                    const profClass = isProfit ? "profit" : "loss";
                                    const dayClass = stock.isLoss ? "loss" : "profit";

                                    return (
                                        <tbody key={index}>
                                            <tr>
                                                <td>{stock.product}</td>
                                                <td>{stock.name}</td>
                                                <td>{stock.qty}</td>
                                                <td>{stock.avg.toFixed(2)}</td>
                                                <td>{stock.price.toFixed(2)}</td>
                                                <td>{currVal.toFixed(2)}</td>
                                                <td className={dayClass}>{stock.day}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Positions;