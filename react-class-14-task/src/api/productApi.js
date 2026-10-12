import axios from "axios"

export const getAllProductData = async () => {
    const responce = await axios.get('https://fakestoreapi.com/products')
    // setProductData(responce.data)
    return responce.data
}

export const getSelectedProductData = async (id) => {
    const responce = await axios.get(`https://fakestoreapi.com/products/${id}`)
    // setProductData(responce.data)
    return responce.data
}