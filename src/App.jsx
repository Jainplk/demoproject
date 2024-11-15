import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import SignUp from './pages/SignUp'
import About from './pages/About';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Support from './pages/Support';
import Login from './pages/Login';
import EmailVerification from './pages/EmailVerification';
import ForgetPassword from './pages/ForgetPassword';
import Dashboard from './pages/Dashboard';
import Funds from './pages/Funds';
import Positions from './pages/Positions';
import Holdings from './pages/Holdings';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import NotFoundPage from './pages/NotFoundPage';



function App() {

  return (
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/forgetPassword' element={<ForgetPassword/>}></Route>
        <Route path='/emailVerification' element={<EmailVerification/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/dashboard/funds' element={<Funds/>}></Route>
        <Route path='/dashboard/orders' element={<Orders/>}></Route>
        <Route path='/dashboard/positions' element={<Positions/>}></Route>
        <Route path='/dashboard/holdings' element={<Holdings/>}></Route>
        <Route path='/dashboard/profile' element={<Profile/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
