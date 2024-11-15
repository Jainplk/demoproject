import React from 'react';
import styles from './Hero.module.css';

function Hero() {
    return ( 
        <section id={styles.heroSection}>
            <div className="container-md">
                <div className={`row ${styles.subheading}`}>
                    <div className={`col-5 ${styles.suppPortal}`}>
                        <h4><a href="#">Support Portal</a></h4>
                    </div>
                    <div className={`col-4 ${styles.trackTicket}`}>
                        <a href="#">Track Ticket</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-7 col-sm-10">
                        <h5 className={`d-{sm}-none  ${styles.searchHeading}`}>Search for an answer or browse help topics to create a ticket</h5>

                        <div className={styles.searchInp}>
                            <input type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'/>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                        <div className={styles.links}>
                            <p><a href="#">Track account opening</a></p>
                            <p><a href="#">Track segment activation</a></p>
                            <p><a href="#">Intraday margins</a></p>
                            <p><a href="#">Kite user manual</a></p>
                        </div>
                    </div>

                    <div className={`col-lg-5 ${styles.featured}`}>
                        <h4>Featured</h4>
                        <div>
                            <ol className={styles.featuredList}>
                                <li><a href="#">Current Buybacks - August 2024</a></li>
                                <li><a href="#">Latest Intraday leverages and Square-off timings</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Hero;