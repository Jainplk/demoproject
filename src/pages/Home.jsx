import React, { useEffect } from 'react';
import Navbar from '../componenets/Navbar';
import HomePageComponents from '../componenets/HomeComponents/HomePageComponents';
import OpenAccount from '../componenets/OpenAccount';
import Footer from '../componenets/Footer';

function Home() {

  useEffect(() => {
      document.title = 'Zerodha-Front: Invest in everything!'
  })

    return ( 
       <>
        <Navbar/>
        <HomePageComponents/>
        <OpenAccount/>
        <Footer/>
       </>
     );
}

export default Home;