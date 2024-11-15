import React from 'react';
import getImageUrl from '../utils'
import { Link } from 'react-router-dom';


function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-md">
                <Link className="navbar-brand logo" to="/"><img src={getImageUrl("logo.svg")} alt="logo" width="150" /></Link>

                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="sidebar offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header border-bottom">
                        <h6 className="offcanvas-title " id="offcanvasNavbarLabel">Manage your money, manage your life!!</h6>
                        <button type="button" className="btn-close shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup" ><i className="fa-solid fa-user-plus"></i>Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"><i className="fa-solid fa-circle-info"></i>About</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="/product"><i className="fa-brands fa-product-hunt"></i>Products </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing"><i className="fa-solid fa-hand-holding-dollar"></i>Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/support"><i className="fa-solid fa-headset"></i>Support</Link>
                            </li>
                        </ul>

                        <Link to='/login'>
                            <button className='loginBtn'>Login <i class="fa-solid fa-lock-open"></i></button>
                        </Link>

                    </div>


                </div>
            </div>
        </nav>

    );
}

export default Navbar;