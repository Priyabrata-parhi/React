import { Children } from 'react'
import Home from './Pages/Home'
import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About'
import Navbar from './components/Navbar'
import Course from './Pages/Course'
import Koder from './Pages/Koder'
import Kodex from './Pages/Kodex'
import Footer from './components/Footer'
import AllCourses from './Pages/AllCourses'
import LayOut from './Pages/LayOut'


const App = () => {

  const allRoutes = createBrowserRouter([
    {
      path: '/',
      element: <LayOut />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/course',
          element: <Course />,
          children: [
            {
              path: '',
              element: <AllCourses />
            },
            {
              path: 'koder',
              element: <Koder />
            },
            {
              path: 'kodex',
              element: <Kodex />
            }
          ]
        }
      ]
    },

  ])


  return (
    <div>

      {/* <Navbar/> */}



      <RouterProvider router={allRoutes} />

      {/* <Footer/> */}
    </div>
  )
}

export default App