import React, { useEffect } from 'react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import ProductComponents from '../componenets/ProductComponents/ProductComponents'

function Product() {

     useEffect(() => {
          document.title = 'Product: Our technology & trading platform!'
     })

     return (
          <>
           <Navbar/>
           <ProductComponents/>
           <Footer/>
          </>
     );
}

export default Product;