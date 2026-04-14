import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import User from './components/User'
import Recrruiter from './components/Recrruiter'
import Job from './components/Job'


export default function App() {
  return (
    <div>
      <Navbar/>
  
      <Routes>
        <Route path='/' element={<Login/>}/>
         <Route path='/signin' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
                   <Route path='/user' element={<User/>}/>
          <Route path='/recruiter' element={<Recrruiter/>}/>
          <Route path='/job/:id' element={<Job/>}/>
      </Routes>
    </div>
  )
}
