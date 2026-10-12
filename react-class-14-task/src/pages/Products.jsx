import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {

    const productData = useContext(ProductDataContext)

    let renderData = 'Loading...'

    if (renderData.length > 0) {
        renderData = productData.map(function (elem, idx) {
            return <Link target='_blank' className='product' key={idx} to={`/products/${elem.id}`}>
                <div>
                    <img src={elem.image} alt="" />
                    <h2>{elem.title}</h2>
                </div>
            </Link>
        })
    }

    return (
        <div>
            {/* <h2>Products showing...</h2> */}

            <div className='allProducts'>
                {
                    renderData
                }
            </div>

        </div>
    )
}

export default Products





// const Products = () => {

//     const productData = useContext(ProductDataContext)

//     return (
//         <div>
//             {/* <h2>Products showing...</h2> */}

//             <div className='allProducts'>
//                 {
//                     productData.map(function (elem, idx) {
//                         return <Link target='_blank' className='product' key={idx} to={`/products/${elem.id}`}>
//                             <div>
//                                 <img src={elem.image} alt="" />
//                                 <h2>{elem.title}</h2>
//                             </div>
//                         </Link>
//                     })
//                 }


//             </div>

//         </div>
//     )
// }

