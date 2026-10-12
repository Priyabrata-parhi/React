import React from 'react'

const Section = (props) => {

    console.log(props)
  return (
    <div className='h-130 bg-zinc-700'>
        <h1>All section   {props.brand}</h1>

        {props.children}

       
    </div>
  )

 
}

export default Section