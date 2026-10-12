import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import User from './components/User'

const App = () => {

  const [allData, setallData] = useState([])

  const getData = async () => {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(responce.data)
    setallData(responce.data)
  }

  useEffect(function(){
    getData()
  },[])

  return (
    <div>
      {/* <button onClick={getData}>Get Data</button> */}

      {
        allData.map(function(elem,idx){
          return <div key={idx}>
             <User elem={elem}/>
          </div>
        } )
      }
      
    </div>
  )
}

export default App