import React from 'react'
import  { useState } from 'react'

const Navbar = (props) => {

    const [newTheme, setNewTheme] = useState('')

    return (
        <div className='nav'>
            {/* Navbar */}

            {/* <h2>Theme is {props.theme}</h2>
            <button onClick={() => {
                props.setTheme('dark')
            }}>Change Theme</button> */}



            <h2>Theme is {props.theme}</h2>
            <form onSubmit={(e) => {
                e.preventDefault()

                // console.log(newTheme)
                // setNewTheme('')


                props.changeTheme(newTheme)
            }}>
                <input
                    type="text"
                    placeholder='Enter name'
                    onChange={(e) => {
                        setNewTheme(e.target.value)
                    }}
                    value={newTheme}
                />
                <button>submited</button>
            </form>
        </div>
    )
}

export default Navbar