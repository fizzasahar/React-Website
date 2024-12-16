// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero.jsx'
import InterfaceComponents from './components/interfaceComponents.jsx'
import Navbar from './components/Navbar.jsx'
import SearchableVideoList from './components/SearchableVideoList.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InterfaceComponents/>
      <InterfaceComponents/>
      <SearchableVideoList/>
    </>
  )
}

export default App
