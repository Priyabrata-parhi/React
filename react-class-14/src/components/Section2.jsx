import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const section2 = () => {
  const data =  useContext(ThemeDataContext)
  return (
    <div>
      <h2>section2 - {data}</h2>
    </div>
  )
}

export default section2