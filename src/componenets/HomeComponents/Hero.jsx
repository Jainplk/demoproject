import React from 'react';
import getImageUrl from '../../utils'
import styles from "./Hero.module.css";
// import { Link } from 'react-router-dom';
 
function Hero() {
    return ( 
        <section className={`container ${styles.container}`}>
            <div className={`row ${styles.content}`}>
               <img src={getImageUrl("homeHero.png")} alt="hero-image" className={styles.img}/>
               <h1>Invest in everything</h1> 

               <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

               {/* <Link to="/signup"><button className={styles.signupBtn}>Sign up now</button></Link> */}
               </div>
        </section>
     );
}

export default Hero;