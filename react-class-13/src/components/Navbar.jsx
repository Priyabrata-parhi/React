import React from 'react'
// import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react'
import { StoryDataContext } from '../context/StoryContext';

const Navbar = () => {
    // const data = useContext(UserDataContext);
    const data = useContext(StoryDataContext);
    console.log(data)
  return (
    <div className='h-10 w-full bg-emerald-600'>
        <h1>This is Navbar  </h1>
    </div>
  )
}

export default Navbar