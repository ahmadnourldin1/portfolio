'use client'
import React, { useState } from 'react'
import Logo from './Logo'
import Links from './Links'
import SocialMediaSideLine from './SocialMediaSideLine'
import SVG from '../SVG'
import MenuIcon from '@/components/icons/MenuIcon'

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  return (
    <div className="w-full h-20 flex justify-between items-center pl-5 md:pl-0 z-50">
      <Logo />
      <Links isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
      <SocialMediaSideLine setIsNavbarOpen={setIsNavbarOpen} isNavbarOpen={isNavbarOpen} />
       <div className="md:hidden mr-5" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
        <SVG icon={<MenuIcon className='w-full h-full' isNavbarOpen={isNavbarOpen} />} className='w-10 h-10' />
      </div>
    </div>
  )
}

export default Navbar