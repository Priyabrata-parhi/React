import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const params = useParams()
    return (
        <div>
            <h1 className='text-5xl whitespace-nowrap underline fixed font-bold left-[50vw] -translate-x-1/2 '>
               {params.id} Details Product  Page
            </h1>
        </div>
    )
}

export default CourseDetails