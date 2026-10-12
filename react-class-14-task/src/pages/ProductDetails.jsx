import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const ProductData = useContext(ProductDataContext)

    //    const param = useParams()
    //    console.log(param.id)

    const { productId } = useParams()

    const selctedProduct = ProductData.find((elem) => productId == elem.id)
    console.log(selctedProduct)

    return (
        <div>
            {/* <h2>ProductDetails yaha payi jati hai</h2> */}


            <div>
                <img src={selctedProduct.image} alt="" />
                <h2>{selctedProduct.title}</h2>
            </div>
        </div>
    )
}

export default ProductDetails