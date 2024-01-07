import {lazy, Suspense} from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import Offers from './components/Offers'
import Menu from './components/Menu'
// import Help from './components/Help'
import ErrorPage from './components/ErrorPage'
import { Outlet } from 'react-router-dom'

const Help = lazy(() => import("./components/Help.jsx"));


const App = () => {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

export const appRouter = createBrowserRouter([
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




export default App
