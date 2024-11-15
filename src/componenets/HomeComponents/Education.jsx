import React from 'react';
import getImageUrl from '../../utils';
import styles from './Education.module.css';

function Education() {
    return ( 
       <section className={`container ${styles.container}`}>
        <div className={`row ${styles.content}`}>
            <div className={`col-lg-5 col-sm-11 ${styles.leftPart}`}>
                <img src={getImageUrl("education.svg")} alt="education img" />
            </div>

            <div className={`col-lg-6 col-sm-11 ${styles.rightPart}`}>
                <h2>Free and open market education</h2>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="#">Varsity <i className="fa-solid fa-arrow-right"></i></a>
                <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="#">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
       </section>
     );
}

export default Education;