import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app-div'>

      <Navbar/>

       <Section brand='Sheryans'>
          <h2>Hello jee </h2>
       </Section>

       <Footer/>

    </div>
  )
}

export default App