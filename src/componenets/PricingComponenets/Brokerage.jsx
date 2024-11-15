import React from 'react';
import './HeroBrokerage.css'

function Brokerage() {
    return (
        <section className='p-lg-5' style={{border:"none"}}>
            <div className="container-md">
                <div className="row d-flex justify-content-between flex-wrap text-center">
                    <div className="col-lg-6 col-sm-12">
                        <h5 className='mb-lg-5'><a href="#" className='text-decoration-none fw-normal'>Brokerage calculator</a></h5>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h5 className='mb-lg-5'><a href="#" className='text-decoration-none fw-normal mb-3'>List of charges</a></h5>
                    </div>
                </div>

                <div className='ps-lg-5 pb-lg-5'>
                    <ul style={{ fontSize: "12px", color: "#666", lineHeight:"2"}}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Brokerage;