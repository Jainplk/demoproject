import React from 'react';
import getImageUrl from '../../utils';
import { Link } from 'react-router-dom';

function SignupNavbar() {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body flex-nowrap ml-auto mr-auto">
            <div className="container">
                <div  className="logo flex-grow-1 w-100">
                <Link className="navbar-brand" to="/"><img src={getImageUrl("logo.svg")} alt="logo" width="150"/></Link>
                </div>
            </div>
        </nav>
     );
}

export default SignupNavbar;