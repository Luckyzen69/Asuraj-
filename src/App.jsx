import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navigation from './components/sidebars/navigation'
import Feed from './components/feeds/feed'
import Widgets from './components/widgets/widgets'
import Notification from './components/notifications/notification'
import Search from './components/search/search'
import Message from './components/messages/messages'
import Profile from './components/profile/profile'
import Login from './components/auth/login'
import Signup from './components/auth/signup'

function App() {

  return (
    <> 
    <div className='flex 	h-screen ml-auto mr-auto p-2 overflow-y-scroll'>
      <div className=''>
   <Navigation/>
      </div>
     <Routes>
      <Route path='/' element={<Feed/>} />
      <Route path='/home' element={<Feed/>} />
      <Route path='/notifications' element={<Notification/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/messages' element={<Message/>} />
      <Route path='/profile' element={<Profile/>} />  
      <Route path='/login' element={<Login/>} />  
      <Route path='/signup' element={<Signup/>} />  
     </Routes>

     <div className='hidden xl:block'>
     <Widgets/>
     
     </div>
    </div>
    </>
  )
}

export default App
