import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/navbar/Navbar.jsx'
const Layout = () => {
  return (

    
      <div className='h-screen relative'>
        <div className='h-[90vh] '>
          <Outlet classname=" bg-amber-500 " />
        </div>
        <Navbar/>
      </div>
 
  )
}

export default Layout