import React from 'react';
import getImageUrl from '../../utils';

function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <section style={{border:"none"}} className='pt-5 pb-5'>
        <div className="container-md">
            <div className="row pt-lg-5 d-flex flex-wrap ">
                <div className="col-lg-7 col-md-7 col-sm-12 text-center" >
                    <img src={imageUrl} alt="kite-img" style={{maxWidth:"100%", height:"auto"}}/>
                </div>
               
                <div className="col-lg-4 col-md-4 col-sm-12 pt-5 ms-lg-5 align-item-center ">
                    <h2 className="mb-3" style={{color:"#424242", lineHeight:"1.25", fontSize:"32px"}}>{productName}</h2>
                    <p className='mt-3 mb-3' style={{color:"#424242", fontSize:"16px", fontWeight:"400",maxWidth:"100%"}}>{productDescription}</p>

                    <div className="row mb-4 p-2" style={{color:"#387ed1", fontWeight:"500"}}>
                        <div className="col-lg-6 col-sm-12 p-2 w-40">
                            <a href="#" className='text-decoration-none'>{tryDemo}</a>
                        </div>

                        <div className="col-lg-6 col-sm-10 p-2 w-40">
                            <a href="#" className='text-decoration-none'>{learnMore} </a>
                        </div>

                        <div className='p-0 ms-2'>
                            <a href={googlePlay}><img src={getImageUrl("googlePlayBadge.svg")} alt="google-play" className="me-3 mt-2 p-0"/></a>
                    
                            <a href={appStore}><img src={getImageUrl("appstoreBadge.svg")} alt="app-store" className='mt-2 p-0'/></a>
                        
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </section>
     );
}

export default LeftSection;