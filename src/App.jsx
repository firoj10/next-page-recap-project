import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div >
   <Header></Header>
   <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
     
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
