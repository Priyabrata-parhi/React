import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

  // const user = useContext(ThemeDataContext)

  const [theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div className='nav'>

        {/* <h2>Navbar - {user}</h2> */}

        <h1>Navbar</h1>
        <h2>{theme}</h2>
        <button onClick={() => {
          if(theme === 'light'){
            setTheme('Dark')
          }
          else{
            setTheme('light')
          }
        }}>Change Theme</button>

    </div>
  )
}

export default Navbar