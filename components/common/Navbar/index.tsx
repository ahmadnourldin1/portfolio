import React from 'react'
import Logo from './Logo'
import Links from './Links'
import SocialMediaSideLine from './SocialMediaSideLine'

const Navbar = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center">
        <Logo />
        <Links />
        <SocialMediaSideLine />
    </div>
  )
}

export default Navbar