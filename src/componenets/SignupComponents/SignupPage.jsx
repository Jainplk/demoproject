import React, {useEffect} from 'react';
import {useFormik} from 'formik'
import { Link } from 'react-router-dom';
import {useFirebase} from '../../context/Firebase'
import getImageUrl from '../../utils'
import styles from './SignupPage.module.css'

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = '*Required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = ' *Invalid email address!';
    }

    if (!values.password) {
        errors.password = '*Required!';
    } else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/i.test(values.password)) {
        errors.password = ' *Password must be 8-16 chars, with 1 lowercase, 1 uppercase, 1 digit, 1 special char and no space!';
    }

    return errors;
};

function SignupPage() {

 useEffect(() => {
    document.title = 'Sign up today, trade the right way!'
 })

 const firebase = useFirebase();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            firebase.singupUser(values.email, values.password);
        }
    });

    return ( 
        <section className={styles.signupContainer}>
            <div className={`container ${styles.container}`}>
                <div className={`row ${styles.subContainer}`}>
                    <div className={`col-lg-4 col-sm-10 ${styles.formContainer}`}>
                        <h1 className='text-left center mb-3 fs-2'>Signup now</h1>
                        <span className={styles.trackApp}>Or track your existing application.</span>
                        <form onSubmit={formik.handleSubmit}>
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

                            <div className="form-floating">
                                <input type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    name='password'
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                <label htmlFor="floatingPassword"><i className="fa-solid fa-lock"></i>Password</label>
                                {formik.errors.password ? <p className={styles.errors}>{formik.errors.password}</p> : null}
                            </div>
                            <button className={styles.signupBtn} type='submit'>Continue</button>
                        </form>
                        <div className={styles.loginInfo}>
                            <p className={styles.loginMsg}>Already have an Account? <Link to='/login'>Login <i className="fa-solid fa-arrow-right-to-bracket"></i></Link></p>
                        </div>
                    </div>

                    <div className="col-lg-1"></div>

                    <div className={`col-lg-7 col-sm-10 ${styles.imgContainer}`}>
                        <img src={getImageUrl('signup.png')} alt="signup-img" />
                    </div>
                </div>
            </div>
            <div className={styles.contentInfo}>
                    <p>
                        I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.
                        <br />
                        <br />
                        If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.
                    </p>
                </div>    
        </section>
     );
}

export default SignupPage;