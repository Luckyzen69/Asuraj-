import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navigation from './components/navigation'
import Home from './components/home'



function App() {

  return (
    <> 
   <Navigation/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
     </Routes>
    </>
  )
}

export default App
