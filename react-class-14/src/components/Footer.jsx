import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {

  const data = useContext(ThemeDataContext)
  return (
    <div>
      <h3>Footer</h3>
      <p>{data}</p>
    </div>
  )
}

export default Footer