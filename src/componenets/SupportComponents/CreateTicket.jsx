import React from 'react';
import styles from './CreateTicket.module.css';

function CreateTicket() {
    return ( 
        <section>
            <div className="container-md">
                <h2 className={styles.heading}>To create a ticket, select a relevant topic</h2>

                <div className={`row ${styles.createTicket1}`}>
                    <div className={`col-lg-4 col-md-4 col-sm-10`}>
                        <h5 className={styles.ticketHeading}><i className="fa-solid fa-circle-plus"></i> <a href="#">Account Opening</a></h5>
                        <ul className={styles.ticketTopic}>
                            <li><a href="#">Getting started</a></li>
                            <li><a href="#">Online</a></li>
                            <li><a href="#">Offline</a></li>
                            <li><a href="#">Charges</a></li>
                            <li><a href="#">Company, Partnership and HUF</a></li>
                            <li><a href="#">Non Resident Indian (NRI)</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-10">
                    <h5 className={styles.ticketHeading}><i className="fa-regular fa-user"></i> <a href="#">Your Zerodha Account</a></h5>
                        <ul className={styles.ticketTopic}>
                            <li><a href="#">Login credentials</a></li>
                            <li><a href="#">Your Profile</a></li>
                            <li><a href="#">Account modification and segment addition</a></li>
                            <li><a href="#">CMR & DP ID</a></li>
                            <li><a href="#">Nomination</a></li>
                            <li><a href="#">Transfer and conversion of shares</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-10">
                    <h5 className={styles.ticketHeading}><i className="fa-solid fa-chart-simple"></i>  <a href="">Trading and Markets</a></h5>
                        <ul className={styles.ticketTopic}>
                            <li><a href="#">Trading FAQs</a></li>
                            <li><a href="#">Kite</a></li>
                            <li><a href="#">Margins</a></li>
                            <li><a href="#">Product and order types</a></li>
                            <li><a href="#">Corporate actions</a></li>
                            <li><a href="#">Kite features</a></li>
                        </ul>
                    </div>
                </div>

                <div className={`row  mt-4 ${styles.createTicket2}`}>
                    <div className={`col-lg-4 col-md-4 col-sm-10 `}>
                        <h5 className={styles.ticketHeading}><i className="fa-regular fa-window-maximize"></i> <a href="#">Funds</a></h5>
                        <ul className={styles.ticketTopic}>
                            <li><a href="#">Fund withdrawal</a></li>
                            <li><a href="#">Adding funds</a></li>
                            <li><a href="#">Adding bank accounts</a></li>
                            <li><a href="#">eMandates</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-10">
                    <h5 className={styles.ticketHeading}><i className="fa-solid fa-circle-notch"></i> <a href="#">Console</a></h5>
                        <ul className={styles.ticketTopic}>
                            <li><a href="#">IPO</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Funds statement</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Referral program</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-10">
                    <h5 className={styles.ticketHeading}><i className="fa-regular fa-circle"></i>  <a href="">Coin</a></h5>
                        <ul className={styles.ticketTopic}>
                            <li><a href="#">Understanding mutual funds and Coin</a></li>
                            <li><a href="#">Coin app</a></li>
                            <li><a href="#">Coin web</a></li>
                            <li><a href="#">Transactions and reports</a></li>
                            <li><a href="#">National Pension Scheme (NPS)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default CreateTicket;