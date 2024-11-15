import React, { useEffect } from 'react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SupportComponents from '../componenets/SupportComponents/SupportComponents';

function Support() {
 
    useEffect(() => {
         document.title = 'Support: Help is near, to calm your trading fear!'
    })

    return ( 
       <>
       <Navbar/>
       <SupportComponents/>
       <Footer/>
       </>
     );
}

export default Support;