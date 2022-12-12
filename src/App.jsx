import React from 'react'
import Navbar from './components/Navbar'
import Heropage from './components/Heropage'
import About from './components/About'
import What from './components/What'
import Style from './App.css'

const App = () => {
  return (
    <div className='bg-background'>
      <Navbar />
      <Heropage />
      <About />
      <What />
      
      
    </div>
  )
}

export default App