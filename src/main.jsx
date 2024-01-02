import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './components/ErrorPage.jsx'
import Offers from './components/Offers.jsx'
import Help from './components/Help.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body.jsx'
import Menu from './components/Menu.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/offers',
        element: <Offers/>
      },
      {
        path: '/help',
        element: <Help/>
      },
      {
        path: '/restaurants/:resId',
        element: <Menu/>
      }
    ],
    errorElement: <ErrorPage/>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
