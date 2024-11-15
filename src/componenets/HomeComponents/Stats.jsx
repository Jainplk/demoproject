import React from 'react';
import getImageUrl from '../../utils';
import styles from './Stats.module.css';
import { Link } from 'react-router-dom';

function Stats() {
    return ( 
        
        <section className={`container ${styles.container}`}>
            <div className={`row ${styles.content}`}>
                <div className={`col-lg-6 col-sm-12 ${styles.contentItems}`}>
                    <h2>Trust with confidence</h2>

                    <h4>Customer-first always</h4>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h4>No spam or gimmicks</h4>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h4>The Zerodha universe</h4>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4>Do better with money</h4>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className="col-lg-6 ">
                    <img src={getImageUrl("ecosystem.png")} alt="ecosystem" className={`col-sm-10 ${styles.img1}`}/>
                    <div className={styles.links}>
                        <Link to="/products">Explore our products <i className="fa-solid fa-arrow-right"></i></Link>
                        <a href="#">Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <img src={getImageUrl("pressLogos.png")} alt="press-logo" className={styles.img2}/>
            </div>
            
        </section>
     );
}

export default Stats;