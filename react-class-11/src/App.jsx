import React, { Children } from 'react'
import Home from './pages/Home'
import {Routes,Route,  createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/Navbar'
import Course from './pages/Course'
import Koder from './pages/Koder'
import Kodex from './pages/Kodex'
import Footer from './components/Footer'
import AllCourses from './pages/AllCourses'

const App = () => {

   const allroutes = createBrowserRouter(
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/course',
      element: <Course/>,
      Children: [
        {
          path: 'kodex',
          element: <Kodex/>
        },
        {
          path: 'koder',
          element: <Koder/>
        }
      ]
    },

   )

  return (
    <div>
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        
        <Route path='/course' element={<Course/>}>
           <Route path='/course' element={<AllCourses/>}/>
           <Route path='/course/koder' element={<Koder/>}/>
           <Route path='/course/kodex' element={<Kodex/>}/>
        </Route>
        
      </Routes>

      <RouterProvider router={allroutes}/>

      <Footer/>
    </div>
  )
}

export default App