import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>

        {/* <Link to='/'>Home</Link> */}
        <NavLink 
        to='/' 
        style={({isActive}) => {
          return {
            color: isActive ? 'red': 'white'
          }
        }}
        >Home</NavLink>

        <NavLink
         to='/about'
         style={({isActive}) => ({
          color: isActive? 'red': 'white'
         })}
         >About</NavLink>

        <NavLink
         to='/course'
         style={({isActive}) => ({
          color: isActive? 'red': 'white'
         })}
         >Course</NavLink>

         {/* <NavLink 
         to='/course'
         className={({isActive}) => (
          isActive? 'active': 'not'
         )}
         >Courses</NavLink> */}

    </div>
  )
}

export default Navbar