import React from 'react'
import Navbar from './Nav/Navbar'
import Background from './Background'
import MainPage from './MainPage'
import SidePencil from './SidePencil'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Background/>
      <MainPage/>
      <div className='700:block hidden'>
        <SidePencil/>
      </div>
    </div>
  )
}

export default Layout
