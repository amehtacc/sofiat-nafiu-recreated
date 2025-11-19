import React from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'

function App() {
  return (
    <div className='relative max-w-[1550px] mx-auto'>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App