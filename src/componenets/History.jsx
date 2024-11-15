import React from 'react';
import styles from './History.module.css'
import getImageUrl from '../utils';
import { Link } from 'react-router-dom'

function History() {
    return (
        <section className={styles.section}>
            <div className={styles.aboutHistory}>
                <div className={`container ${styles.container}`}>
                    <div className={`row ${styles.content}`}>
                        <div className="col-lg-6 col-sm-12">
                            <p>
                                We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                            </p>

                            <p>
                                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                            </p>

                            <p>
                                Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                            </p>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <p>
                                In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                            </p>
                            <p>
                                Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                            </p>
                            <p>
                                And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`container ${styles.aboutPeople}`}>
                <div className="row">
                <h2>People</h2>
                    <div className={`col-lg-5 col-sm-12 ${styles.aboutOwner}`}>
                        <img src={getImageUrl("nithinKamath.jpg")} alt="nithinKamath-pic" />
                        <h5>Nithin Kamath</h5>
                        <p>Founder, CEO</p>
                    </div>
    
                    <div className={`col-lg-6 col-sm-12 ${styles.aboutBio}`}>
                       
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on <Link to="/" className='text-decoration-none'>Homepage</Link> </p>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default History;