import React, { useEffect, useRef, useState } from 'react';
import getImageUrl from '../utils'
import { useFirebase } from '../context/Firebase';
import { users, getUserData } from '../data/userInfo'

function ProfilePage() {

    const [userImg, setUserImg] = useState(null);
    const [userData, setUserData] = useState(null);
    const inpRef = useRef(null);
    const firebase = useFirebase();

    const handleBtnClick = () => {
        inpRef.current.click()
    }

    const handleImageChange = (e) => {
        setUserImg(e.target.files[0]);
    }

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            setUserData(data)
        };

        fetchUserData();
    }, []);


    return (
        <div className="userProfile mb-5">
            <div className="userInfo">
                <div className="row mt-4">
                    <h4 className='fs-3 text-light-emphasis'>Profile</h4>
                </div>
                <hr className="divider" />
                <div className="row">
                    {
                        userData ? (
                            <div className="row">
                                <h3>Personal</h3>
                                <div className="imgContainer">
                                    {
                                        userImg ? (
                                            <img src={URL.createObjectURL(userImg)} className='img' />
                                        ) : (
                                            <img src={getImageUrl('userImg.png')} className='img' />
                                        )
                                    }
                                    <button className='uploadBtn' onClick={handleBtnClick}>
                                        <input type='file'
                                            ref={inpRef}
                                            onChange={handleImageChange}
                                            style={{ display: 'none' }} />
                                        Upload  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                    </button>
                                </div>

                                <div className='row personalTable1'>
                                    <div className="col-lg-6">
                                        <span className='infoTitle'>Email</span>
                                        <span className='mx-lg-5'>{userData.email}</span>
                                    </div>

                                    <div className="col-lg-6">
                                        <span className='infoTitle'>UUID</span>
                                        <span className='mx-lg-5'>{userData.uuid}</span></div>
                                </div>

                                {
                                    users.map((user, index) => {
                                        return (
                                            <>
                                                <div className='row personalTable2'>
                                                    <div className="col-lg-6">
                                                        <span className='infoTitle'>Phone</span>
                                                        <span className='mx-lg-5'>{user.phone}</span>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <span className='infoTitle'>PAN</span>
                                                        <span className='mx-lg-5'>{user.pan}</span>
                                                    </div>
                                                </div>

                                                <hr className="divider" />

                                                <h3 className='mb-4'>Account</h3>
                                                <table className='accTable'>
                                                    <tbody>
                                                        <tr>
                                                            <td>Account Type</td>
                                                            <td>{user.accType}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Segments</td>
                                                            <td>{user.segments}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Products</td>
                                                            <td>{user.product}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <hr className="divider" />

                                                <h3>Investment Portfolio</h3>
                                                <table className='investmentTable'>
                                                    <tbody>
                                                        <tr>
                                                            <th>instrument</th>
                                                            <th>quntity</th>
                                                            <th>value</th>
                                                        </tr>
                                                    </tbody>

                                                    {
                                                        user.investmentPortfolio.map((investment, index) => {
                                                            return (
                                                                <tbody>
                                                                    <tr key={index}>
                                                                        <td>{investment.instrument}</td>
                                                                        <td>{investment.quantity}</td>
                                                                        <td>{investment.value}</td>
                                                                    </tr>
                                                                </tbody>
                                                            )
                                                        })
                                                    }

                                                </table >
                                                <hr className="divider" />

                                                <h3>Bank Details</h3>
                                                <table className='bankDetail'>
                                                    <tbody>
                                                        <tr>
                                                            <td>Account</td>
                                                            <td>{user.bankAcc}</td>
                                                            <td>Bank</td>
                                                            <td>{user.bank}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <button type='submit' className='logoutBtn mt-5'
                                                    onClick={() => firebase.logoutUser()}>Logout</button>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        ) : (
                            <p className='text-center fs-4'>No user signed in...</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;