import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-pink-900 mb-10'>
        <h2>Navbar</h2>
        <input type="text" className='border-2'/>
        <div className='flex gap-8'>
            {/* <a href="/">Home page</a> */}
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar