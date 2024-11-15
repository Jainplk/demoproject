import React, {useEffect } from 'react';
import getImageUrl from '../utils'
import { useFirebase } from '../context/Firebase';
import { Link } from 'react-router-dom';


function EmailVerification() {

  useEffect(() => {
    document.title = 'Email Verification!'
  })

  const firebase = useFirebase();

  return (
    <div className="emailVerification container-md text-center pt-5 mt-5">
      <div className="emailImg  mb-5">
        <img src={getImageUrl("email.jpg")} alt="email" style={{ maxWidth: '120px' }} />
      </div>

      <div className="description">
        <h2 className='fw-bold'>Please verify your email</h2>
        <p>You're almost there! We sent verification link to your <br /><b>resgistered email id.</b></p>
    
        <p className='mt-4'>Just click on the link in that email to complete your signup. If you don't <br />
          see it, you may need to <b>check your spam</b> folder.
        </p>
      </div>

      <div className="resendInfo mt-4 mb-4">
        <p>Still can't find the email? No problem</p>
        <button type='submit' onClick={() => firebase.resendVerificationLink()} className="btn btn-secondary">Resend Verification Email</button>
      </div>

      <div className="loginbtn text-muted">
      <p >Already verified? <Link to='/login' className='text-muted'>Login <i className="fa-solid fa-arrow-right"></i></Link></p>
      </div>
    </div>
  );
}

export default EmailVerification;