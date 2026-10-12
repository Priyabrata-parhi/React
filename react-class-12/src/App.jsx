import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import AllSection from './components/AllSection'
import Footer from './components/Footer'

const App = () => {

  // const getData = async () => {
  //   const responce = await axios.get('http://localhost:8000/data')
  //   console.log(responce)
  // }

  const courseData = {
    courseName: 'cohort-1',
    instructor: "Harsh",
    duration: '6*Month',
    mentor: 'Anubhav'
  }

   const [theme, setTheme] = useState('light')

   function changeTheme(newTheme){
     setTheme(newTheme)
   }



  return (
    <div >
      {/* way1 */}
      {/* <button onClick={getData}>Click karo</button> */}


      {/* way2 */}
      {/* <Navbar/>
         <AllSection courseData={courseData} />
      <Footer/> */}



      {/* way3 */}
      {/* <Navbar theme={theme} setTheme={setTheme}/> */}


      {/* way4 */}
      <Navbar theme={theme} changeTheme={changeTheme}/>

      
    </div>
  )
}

export default App