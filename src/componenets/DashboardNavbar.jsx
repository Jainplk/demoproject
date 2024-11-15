import React from 'react';
import getImageUrl from '../utils';
import { Link } from 'react-router-dom';
import './DashboardCompStyle.css';
import { useFirebase } from '../context/Firebase';

function DashboardNavbar() {

    const firebase = useFirebase();

    return ( 
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item index">NIFTY 50</li>
                    <li className="nav-item mx-lg-3 index-points">100.2%</li>
                </ul>

                <ul className="navbar-nav mx-lg-3 flex-grow-1">
                    <li className="nav-item index">SENSEX</li>
                    <li className="nav-item mx-lg-3 index-points">100.2%</li>
                </ul>

                <div className="KiteLogo ">
                    <img src={getImageUrl('login-Logo.png')} alt="kitelogo" />
                </div>


                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="topBar offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header border-bottom">
                        <h6 className="offcanvas-title fs-4" id="offcanvasNavbarLabel"><i className="fa-brands fa-slack"></i> Market-Board!</h6>
                            <div className="KiteLogo ">
                                <img src={getImageUrl('login-Logo.png')} alt="kitelogo" />
                            </div>
                        <button type="button" className="btn-close shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body">

                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item ">
                                <Link className="nav-link" to='/dashboard'><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/dashboard/orders'><i className="fa-solid fa-check-to-slot"></i> Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/dashboard/holdings'><i className="fa-solid fa-hand-holding-dollar"></i> Holdings</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to='/dashboard/positions'><i className="fa-solid fa-money-bill-trend-up"></i> Positions </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/dashboard/funds'><i className="fa-solid fa-sack-dollar"></i> Funds</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/dashboard/profile'><i className="fa-solid fa-sack-dollar"></i> Profile</Link>
                            </li>
                        </ul>

                        <button type='submit' className='tobarLogoutBtn '
                                                    onClick={() => firebase.logoutUser()}>Logout  <i class="fa-solid fa-lock"></i></button>
                    </div>
                </div>
            </div>
        </nav>

     );
}

export default DashboardNavbar;