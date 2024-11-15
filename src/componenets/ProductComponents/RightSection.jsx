import React from 'react';

function RightSection({productName, productDescription, link, imageUrl, aboutTech}) {
    return ( 
        <section style={{border:"none"}} className='pt-5 pb-5'>
            <div className="container-md">
                <div className="row pt-lg-5 ">
                    <div className="col-lg-4 col-md-4 col-sm-12 pt-lg-5 ms-lg-5 align-self-center">
                        <h2 className="mb-3" style={{color:"#424242", lineHeight:"1.25", fontSize:"32px"}}>{productName}</h2>
                        <p className='mt-3 mb-3' style={{color:"#424242", fontSize:"16px", fontWeight:"400", maxWidth:"100%", height:"auto"}}>{productDescription}</p>

                        <div >
                        <a href="#" className='text-decoration-none'>{link}</a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 text-center">
                        <img src={imageUrl} alt="img" className='mr-2 ml-2 ' style={{maxWidth:"100%", height: "auto"}}/>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default RightSection;