import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navigation from './components/sidebars/navigation'
import Feed from './components/feeds/feed'
import Widgets from './components/widgets/widgets'
import Notification from './components/notifications/notification'
import Search from './components/search/search'
function App() {

  return (
    <> 
    <div className='flex 	h-screen ml-auto mr-auto p-2 overflow-y-scroll'>
   <Navigation/>
     <Routes>
      <Route path='/' element={<Feed/>} />
      <Route path='/home' element={<Feed/>} />
      <Route path='/notifications' element={<Notification/>} />
      <Route path='/search' element={<Search/>} />
     </Routes>
     <Widgets/>
    </div>
    </>
  )
}

export default App
