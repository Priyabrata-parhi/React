import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductContext'

const Home = () => {

   const navigate = useNavigate()

//    const data = useContext(ProductDataContext)
//    console.log(data)

  return (
    <div className='home'>
        <h1>This is Home Page</h1>
        <button className='cta' onClick={()=> {
            navigate('/products')
        }}>Explore All Products</button>
    </div>
  )
}

export default Home