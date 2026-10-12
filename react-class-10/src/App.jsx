import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import RandomAbout from './pages/RandomAbout'
import Courses from './pages/Courses'
import Cohort1 from './pages/Cohort1'
import AnyCourse from './pages/AnyCourse'
import CourseDetails from './pages/CourseDetails'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>

          {/* Direct Routes */}
         <Route path='/' element={<Home/>}></Route>
         <Route path='/about' element={<About/>}/>
         <Route path='/product' element={<Product/>}/>

         {/* Nested Routes */}
         <Route path='/product/men' element={<Men/>}/>
         <Route path='/product/women' element={<Women/>}/>


         {/* Dynamic Routes */}
         <Route path='/about/:id' element={<RandomAbout/>}/>


         {/* Nested Dynamic Routes */}
         <Route path='/courses' element={<Courses/>}/>
         <Route path='/courses/:id' element={<AnyCourse/>}/>
         <Route path='/courses/:id/detail' element={<CourseDetails/>}/>
         <Route path='/courses/cohort1' element={<Cohort1/>}/>

         {/* Not Found Page */}
         <Route path='*' element={<NotFound/>}/>









         {/* Direct Routes */}
         <Route path='/' element={<Home/>}></Route>
         <Route path='/about' element={<About/>}/>
         <Route path='/product' element={<Product/>}/>
         <Route path='/courses' element={<Courses/>}/>

         {/* Nested Routes */}
         <Route path='/product/men' element={<Men/>}/>
         <Route path='/product/women' element={<Women/>}/>
         <Route path='/courses/cohort1' element={<Cohort1/>}/>


         {/* Dynamic Routes */}
         <Route path='/about/:id' element={<RandomAbout/>}/>


         {/* Nested Dynamic Routes */}
         <Route path='/courses/:id' element={<AnyCourse/>}/>
         <Route path='/courses/:id/detail' element={<CourseDetails/>}/>
         
      </Routes>
    </div>
  )
}

export default App