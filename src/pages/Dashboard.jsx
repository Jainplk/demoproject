import React from 'react';
import DashboardNavbar from '../componenets/DashboardNavbar'
import Summary from '../componenets/Summary';
import Watchlist from '../componenets/Watchlist';

function Dashboard() {
    return (
        <>
            <div className="dashboardNavbar">
                <div className="row d-flex flex-nowrap p-0 m-0">
                    <DashboardNavbar />
                </div>
            </div>

            <div className="row p-0 m-0">
                <div className="col-lg-4 p-0" style={{ borderRight: "1px solid rgb(224, 224, 224)" }}>
                   <Watchlist/>
                </div>

                <div className="col-lg-8 p-0">
                    <Summary />
                </div>
            </div>
        </>
    );
}

export default Dashboard;