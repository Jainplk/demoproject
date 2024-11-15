import React from 'react';
import styles from "./OpenAccount.module.css"
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
    <section className={`container ${styles.container}`}>
        <div className={`row ${styles.content}`}>
            <h2>Open a Zerodha account</h2>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to="/signup"><button className={styles.signupBtn}>Sign up now</button></Link>
        </div>
        
       </section>
     );
}

export default OpenAccount;