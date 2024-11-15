import React, { useEffect } from 'react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import PricingComponents from '../componenets/PricingComponenets/PricingComponenets';

function Pricing() {

    useEffect(() => {
        document.title = 'Pricing: Competitive rates, no hidden weights!'
    })

    return (
        <>
        <Navbar/>
        <PricingComponents/>
        <Footer/>
        </>
    );
}

export default Pricing;