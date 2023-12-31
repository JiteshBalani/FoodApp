import React from 'react'
import ReactDOM from 'react-dom/client' 
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import Offers from './components/Offers'
import Help from './components/Help'
import ErrorPage from './components/ErrorPage'
import { Outlet } from 'react-router-dom'

const App = () => {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};




export default App
