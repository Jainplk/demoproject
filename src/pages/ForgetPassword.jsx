import React, { useEffect } from 'react';
import styles from './LoginForgetPass.module.css'
import { useFirebase } from '../context/Firebase';
import { useFormik } from 'formik';
import getImageUrl from '../utils'
import { Link } from 'react-router-dom';


const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = '*Required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = ' *Invalid email address!';
    }
    return errors;
};

function ForgetPassword() {

    useEffect(() => {
        document.title = "Forget Password: Reset your password, it's easy to do!"
    })

    const firebase = useFirebase();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: values => {
            firebase.forgetPassword(values.email);
        }
    });
    return (
        <section className={styles.LoginSection}>
            <div className={`container ${styles.container}`}>
                <div className={styles.cardContainer}>
                    <div className={styles.logo}>
                        <img src={getImageUrl("login-Logo.png")} alt="logo-png" />
                    </div>
                    <h2>Forget password?</h2>
                    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
                        <div className="form-floating mb-3">
                            <input type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                name='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <label htmlFor="floatingInput"><i className="fa-solid fa-envelope"></i>Email Address</label>
                            {formik.errors.email ? <p className={styles.errors}>{formik.errors.email}</p> : null}
                        </div>
                        <button className={styles.signupBtn} type='submit'>Reset</button>
                    </form>
                   <Link to='/login'> <p className='text-muted mt-3' style={{fontSize:"12px"}}><i className="fa-solid fa-arrow-left"></i> Back to Login.</p></Link>

                    <p className='text-muted mt-3' style={{fontSize:"13px"}}>* Note: Reset link will be sent to your email.</p>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.appIcon}>
                    <Link to="https://play.google.com/store/apps/details?id=com.zerodha.kite3"><i className="fa-brands fa-google-play"></i></Link>
                    <Link to='https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802'><i className="fa-brands fa-apple"></i></Link>
                </div>
                <Link to='/'><img src={getImageUrl("logo.svg")} /></Link>
                <Link to='/signup'><p className={styles.signupLink}>Don't have an account? Signup now!</p></Link>
                <div className={styles.footerContent}>
                <p>Zerodha Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no. INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Zerodha Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ000038238 | Smart Online Dispute Resolution | SEBI SCORES</p>
                <p>v3.0.0</p>
                </div>
            </footer>
        </section>
    );
}

export default ForgetPassword;