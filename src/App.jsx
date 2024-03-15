import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navigation from './components/navigation'
import Feed from './components/feed'



function App() {

  return (
    <> 
    <div className='flex'>
   <Navigation/>
     <Routes>
      <Route path='/' element={<Feed/>} />
      <Route path='/feed' element={<Feed/>} />
     </Routes>
    </div>
    </>
  )
}

export default App
