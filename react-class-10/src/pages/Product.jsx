import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h1 className='text-5xl mb-4 underline font-bold  '>
                Product Page
            </h1>

            <div className='flex gap-3'>
                <Link className='mt-5 text-2xl' to='/product/men'>Men's collection</Link>
                <Link className='mt-5 text-2xl' to='/product/women'>Women's collection</Link>
                
            </div>
        </div>
    )
}

export default Product