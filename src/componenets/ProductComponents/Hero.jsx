import React from 'react';
 function Hero() {
    return ( 
        <main style={{borderBottom:"1px solid #eee"}}>
            <section className='container p-5'>
                <div className='product-header text-center pt-5' style={{color:"#424242"}}>
                    <h1 style={{fontWeight:"500", fontSize:"44px",letterSpacing:"1.25px" }}>Zerodha Products</h1>
                    <h5 className='mt-3 mb-4 fs-5' style={{fontWeight:'400'}}>Sleek, modern, and intuitive trading platforms</h5>
                    <p>Check out our <a href="#" className='text-decoration-none'>investment offerings →</a></p>
                </div>

            </section>
        </main>
     );
 }
 
 export default Hero;