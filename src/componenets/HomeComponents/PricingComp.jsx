import React from 'react';
import getImageUrl from '../../utils';
import styles from './PricingComp.module.css';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <section className={`container ${styles.container}`}>
            <div className="row">
                <div className={`col-lg-5 ${styles.leftPart}`}>
                    <h2>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>

                <div className={`col-lg-7 ${styles.rightPart}`}>
                 
                       <div className={styles.pricingBox}>
                       <img src={getImageUrl("pricing0.svg")} alt="pricing0-img" />
                       <p>Free account <br/> opening</p>
                       </div>
                   
                       <div className={styles.pricingBox}>
                       <img src={getImageUrl("pricing0.svg")} alt="pricing0-img" />
                       <p>Free equity delivery<br /> and direct mutual funds</p>
                       </div>

                       <div className={styles.pricingBox}>
                       <img src={getImageUrl("intradayTrades.svg")} alt="20-img" />
                       <p>Intraday and <br /> F&O</p> 
                       </div>
                </div>

                <div className={styles.link}>
                    <Link to="/pricing">See pricing <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>

        </section>
    );
}

export default Pricing;