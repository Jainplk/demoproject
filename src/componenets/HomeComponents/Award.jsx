import React from 'react';
import getImageUrl from '../../utils';
import styles from "./Award.module.css"

function Awards() {
    return (
        <section className={`container ${styles.container}`}>
            <div className='row'>
                <div className="col-lg-6 col-sm-10">
                    <img src={getImageUrl("largestBroker.svg")} alt="largest-broker" className={styles.img1}/>
                </div>
                <div className="col-lg-6  col-sm-12 mt-5">
                    <h1 className={styles.h1}>Largest stock broker in India</h1>
                    <p className={styles.para}>
                    2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-10">
                            <ul className={`p-2 ${styles.list}`}>
                            <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                                
                            </ul>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-10">
                            <ul className={`p-2 ${styles.list}`}>
                            <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src={getImageUrl("pressLogos.png")} className={styles.img2} alt="press-logo" />
                </div>
            </div>
        </section>
    );
}

export default Awards;