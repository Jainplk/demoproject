import React, { useEffect } from 'react';
import History from '../componenets/History';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';

function About() {

    useEffect(() => {
        document.title = 'About your Trading Companion!'
    })

    return (
        <>
        <Navbar/>
        <section className='container p-5 mt-5'>
            <div className="row text-center ">
                <h2 className='m-0 fs-2 lh-base' style={{ color: "#424242", fontWeight: "500", letterSpacing: "1.2px" }}>We pioneered the discount broking model in India.
                    <br />
                    Now, we are breaking ground with our technology.
                </h2>
            </div>
        </section>
        <History/>
        <Footer/>
        </>
    );
}

export default About;