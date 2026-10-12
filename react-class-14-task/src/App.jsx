import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

// Link error aa raha hai -> https://fakestoreapi.com/products
// Try this new api  -> https://dummyjson.com/products

const App = () => {

  // way-1
  // const getData = async () => {
  //   const responce = await axios.get('https://fakestoreapi.com/products')
  //   console.log(responce.data)
  // }

  // const getFirstData = async (id) => {
  //   const responce = await axios.get(`https://fakestoreapi.com/products/${id}`)
  //   console.log(responce.data)
  // }

  // way-2
   
  // isko yaha nahi karka context file me karo me isko coomant kar rah hu
  // const [productData, setProductData] = useState([])

  // const getData = async () => {
  //   const responce = await axios.get('https://fakestoreapi.com/products')
  //   // console.log(responce.data)
  //   setProductData(responce.data)
  // }

  // useEffect(function () {
  //   getData()
  // }, [])


  return (
     
    // routing lagana hai ye niche wala hata do
    // <div className='allProducts'>

    //   {/* way-1 */}
    //   {/* <button onClick={getData}>All product</button>
    //   <button onClick={()=>{
    //     getFirstData()
    //   }}>First product</button> */}


    //   {
    //     productData.map(function (elem,idx) {
    //       return <a target='_blank' href="/product" className='product' key={idx} >
    //         <div>
    //           <img src={elem.image} alt="" />
    //           <h2>{elem.title}</h2>
    //         </div>
    //       </a>
    //     })
    //   }


    // </div>

     // abhi ye dikho route ka andar create karo
    <div>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:productId' element={<ProductDetails/>}/>
       </Routes>
    </div>

  )
}

export default App



