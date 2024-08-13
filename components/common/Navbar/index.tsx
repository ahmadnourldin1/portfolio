import React from 'react'
import Logo from './Logo'
import Links from './Links'

const Navbar = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center">
        <Logo />
        <Links />
    </div>
  )
}

export default Navbar