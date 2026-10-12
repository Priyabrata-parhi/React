import React from 'react'
import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react'

const Footer = () => {
    const user = useContext(UserDataContext);
  return (
    <div className='w-screen absolute bottom-0 h-10 bg-blue-700'>
        <h1>This is Footer {user}</h1>
    </div>
  )
}

export default Footer