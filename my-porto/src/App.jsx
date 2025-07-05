import React from 'react'
import './App.css'

import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <article>
          <Hero/>
          <About/>
        </article>
      </main>
    </div>
  )
}

export default App
