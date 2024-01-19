import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import Offers from './components/Offers'
import Menu from './components/Menu'
// import Help from './components/Help'
import ErrorPage from './components/ErrorPage'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/store.js'
import Cart from './components/Cart.jsx'

const Help = lazy(() => import("./components/Help.jsx"));


const App = () => {

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/offers',
        element: <Offers />
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
        path: '/cart',
        element: <Cart/>,
      },
      {
        path: '/restaurants/:resId',
        element: <Menu />
      }
    ],
    errorElement: <ErrorPage />
  },

]);




export default App
