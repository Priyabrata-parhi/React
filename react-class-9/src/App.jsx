import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  // const [counter, setCounter] = useState(0)
  // const [text, setText] = useState('')

  // const [number1, setNumber1] = useState(0)

  // useEffect(function(){
  //   console.log('Effect is running')
  // })

  // useEffect(function(){
  //   console.log("Jab counter change tab chalega")
  // },[counter])



  // part 2

  // const [allpokemon, setAllpokemon] = useState([])

  // const getData = async () => {
  //   const responce = await axios.get('https://pokeapi.co/api/v2/pokemon')
  //   console.log(responce.data.results);
  //   setAllpokemon(responce.data.results)
  // }

  // useEffect(() => {
  //   getData()
  // },[])



  // third Part 

  const [userName,setUserName] = useState('')
  const [num, setNum] = useState(0)

  const getUser = async () => {
    const responce = await axios.get('https://randomuser.me/api/')
    console.log(responce.data.results[0].name.first + " " + responce.data.results[0].name.last)
    setUserName(responce.data.results[0].name.first + " " + responce.data.results[0].name.last)
  }
  
  useEffect(function(){
    getUser()
  },[num])





  return (
    <div>
      {/* Basic details */}
      <div>

        {/* <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          placeholder='Enter text' />
        <br /> */}

        {/* <h2>{counter}</h2>
       <button onClick={()=>{
        setCounter(counter+1)
       }}>Increase</button> */}


        {/* <h2>{number1}</h2>
        <button onClick={() => {
          setNumber1(Math.floor(Math.random() * 10))
        }}>Change Number</button> */}


      </div>
     

     {/* second time */}

     {/* {allpokemon.map(function(elem,idx){
       return <h2>{elem.name}</h2>
     } )} */}


     {/* third part */}

     <div>
      {userName}

      <h1>{num}</h1>

      <button onClick={() =>{
        setNum(num+1)
      }}>Increase</button>
     </div>


      

      
    </div>
  )
}

export default App