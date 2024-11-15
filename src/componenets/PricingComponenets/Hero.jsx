import React from 'react';
import getImageUrl from '../../utils'
import './HeroBrokerage.css'

function Hero() {
    return (
        <main className=' border-bottom pb-5'>
            <section className='p-5'>
                <div className="container m-auto">
                    <div className='text-center p-lg-5'style={{ color: "#424242" }}>
                        <h1>Pricing</h1>
                        <h5 className='mt-2 mb-3 fs-5 fw-normal'>Free equity investments and flat ₹20 intraday and F&O trades</h5>
                    </div>
                </div>
            </section>

            <section className='p-lg-5'>
                <div className="container-md pt-lg-5">
                    <div className="row ">
                        <div className="col-lg-4 col-sm-11 text-center">
                            <img src={getImageUrl("pricingEquity.svg")} alt="pricingEquity-img" className='mb-3'/>
                            <h3 className='mb-3' style={{ color: "#424242" }}>Free equity delivery</h3>
                            <p className='text-secondary fw-normal mt-2'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                        </div>

                        <div className="col-lg-4 col-sm-11 text-center">
                            <img src={getImageUrl("intradayTrades.svg")} alt="intradayTrades-img" className='mb-3'  />
                            <h3 className='mb-3' style={{ color: "#424242" }}>Intraday and F&O trades</h3>
                            <p className='text-secondary fw-normal mt-2'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                        </div>

                        <div className="col-lg-4 col-sm-11 text-center">
                            <img src={getImageUrl("pricingEquity.svg")} alt="pricingEquity-img" className='mb-3' />
                            <h3 className='mb-3' style={{ color: "#424242" }}>Free direct MF</h3>
                            <p className='text-secondary fw-normal mt-2'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>

    );
}

export default Hero;