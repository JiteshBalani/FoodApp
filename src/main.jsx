import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import ErrorPage from './components/ErrorPage.jsx'
// import Offers from './components/Offers.jsx'
// import Help from './components/Help.jsx'
import { RouterProvider } from 'react-router-dom'
// import Body from './components/Body.jsx'
// import Menu from './components/Menu.jsx'
import { appRouter } from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
