import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { getAllProductData } from '../api/productApi'

export const ProductDataContext = createContext()

const ProductContext = (props) => {

    const [productData, setProductData] = useState([])
    const [selectedProduct, setselectedProduct] = useState({})
    
    // aisa mat karo api me call karka import kar do me isko command kar raha hu
    // const getData = async () => {
    //     const responce = await axios.get('https://fakestoreapi.com/products')
    //     // console.log(responce.data)
    //     setProductData(responce.data)
    // }

    const setData = async () => {
        const data = await getAllProductData()
        setProductData(data)  

        // setProductData(await getAllProductData()) // ye short form likhne ka
    }

    useEffect(function () {
        // getData()   //-> isko getData jab func tha call ho raha tha
        setData()
    }, [])

    return (
        <div>
            <ProductDataContext.Provider value={productData}>
                {props.children}
            </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext