import React from 'react';
import getImageUrl from '../../utils';
import styles from './Universe.module.css'
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <main >
            <section className={styles.aboutTech}>
                <h5>Want to know more about our technology stack? Check out the <a href="#" className='text-decoration-none'>Zerodha.tech</a> blog.</h5>
            </section>

            <section className={styles.patnerProduct}>
                <div className="container-md">
                    <h2>The Zerodha Universe</h2>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>

                    <div className={`row ${styles.aboutPaters}`}>
                        <div className="col-lg-4 col-md-6">
                            <img src={getImageUrl("zerodhaFundhouse.png")} alt="zerodhaFundhouse-img" /> <br />
                            <p>
                                Our asset management venture <br />
                                that is creating simple and transparent index <br />
                                funds to help you save for your goals.
                            </p>

                            <img src={getImageUrl("streakLogo.png")} alt="streakLogo-img" /> <br />
                            <p>
                                Systematic trading platform <br />
                                that allows you to create and backtest <br />
                                strategies without coding
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <img src={getImageUrl("sensibullLogo.svg")} alt="sensibullLogo-img" style={{ height: "40px" }} /> <br />
                            <p>
                                Options trading platform that lets you <br />
                                create strategies, analyze positions, and examine <br />
                                data points like open interest, FII/DII, and more.
                            </p>

                            <img src={getImageUrl("smallcaseLogo.png")} alt="smallcaseLogo-img"/> <br />
                            <p>
                                Thematic investing platform <br />
                                that helps you invest in diversified  <br />
                                baskets of stocks on ETFs.
                            </p>
                        </div>

                        <div className="col-lg-4 ">
                            <img src={getImageUrl("goldenpiLogo.png")} alt="goldenpiLogo-img" /> <br />
                            <p>
                                Investment research platform <br />
                                that offers detailed insights on stocks, <br />
                                sectors, supply chains, and more.
                            </p>

                            <img src={getImageUrl("dittoLogo.png")} alt="dittoLogo-img" style={{ height: "40px" }} /> <br />
                            <p>
                                Personalized advice on life <br />
                                and health insurance. No spam <br />
                                and no mis-selling.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.btn}>
            <Link to="/signup"><button className={styles.signupBtn}>Sign up now</button></Link>
            </section>
        </main>
    );
}

export default Universe;