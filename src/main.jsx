import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './components/ErrorPage.jsx'
import Offers from './components/Offers.jsx'
// import Help from './components/Help.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body.jsx'
import Menu from './components/Menu.jsx'
import ShimmerHelp from './components/ShimmerHelp.jsx'

const Help = lazy(() => import('./components/Help.jsx'));

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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Help />
          </Suspense>
        ),
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
