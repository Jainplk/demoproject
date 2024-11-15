import React from 'react';
import Hero from './Hero'
import Award from './Award'
import Stats from './Stats'
import Pricing from './PricingComp';
import Education from './Education'

function HomePageComponents() {
    return ( 
        <>
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        </>
     );
}

export default HomePageComponents;