import { createContext, useContext } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {

// signup code
  const singupUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth,
      email, password)
      .then((userCredential) => {
        toast.success("Signup successfully!")
        setTimeout(() => {
         window.location.href = '/login'
        }, 2000);

        const user = userCredential.user
        sendEmailVerification(user)
      })
      .catch((e) => {
        const errCode = e.code;
        const errMsg = errCode.replace('auth/', 'Error: ').split('-').join(" ");
        toast.error(errMsg)
      })
    }

// login code
  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const loginEmail = user.email;
        console.log(loginEmail);
         if(!user.emailVerified) {
           toast.error("verify your email!");
           setTimeout(() => {
            window.location.href = '/emailVerification'
         }, 2000)
        } else if(user.emailVerified){
          toast.success("Login successfully!");
          setTimeout(() => {
              window.location.href = '/dashboard'
          }, 2000)
        } 
      })
      .catch((e) => { 
        const errCode = e.code;
        const errMsg = errCode.replace('auth/', 'Error: ').split('-').join(" ").concat(",check your email id & password");
        toast.error(errMsg)
      })
    }


// resend verfication link code
  const resendVerificationLink = async() => {
    const user = auth.currentUser;
    if(user) {
     await sendEmailVerification(user)
      .then(() => {
        toast.success("Verification link sent to your emal!")
      })
      .catch((e) => {
        const errCode = e.code;
        const errMsg = errCode.replace('auth/', 'Error: ').split('-').join(" ");
        toast.error(errMsg,)
      }) 
    }
  }

  // forget Password code
  const forgetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("Reset password link send to your email" , {
        position: 'top-center'
      })
    })
      .catch((e) => {
        console.log(e)
        const errCode = e.code;
        const errMsg = errCode.replace('auth/', 'Error: ').split('-').join(" ");
        toast.error(errMsg)
      })
  }


  // logout code
  const logoutUser = async () => {
    await signOut(auth)
    window.location.href = '/login'
  }

  return (
    <FirebaseContext.Provider value={{ singupUser, loginUser, forgetPassword, logoutUser, resendVerificationLink }}>
      {props.children}
    </FirebaseContext.Provider>
  )
}

