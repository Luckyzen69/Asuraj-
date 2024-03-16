import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navigation from './components/navigation'
import Feed from './components/feed'
import Widgets from './components/widgets'


function App() {

  return (
    <> 
    <div className='flex max-w-screen-xl	h-screen ml-auto mr-auto p-2'>
   <Navigation/>
     <Routes>
      <Route path='/' element={<Feed/>} />
      <Route path='/feed' element={<Feed/>} />
     </Routes>
     <Widgets/>
    </div>
    </>
  )
}

export default App
