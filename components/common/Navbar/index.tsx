'use client'
import React from 'react'
import Logo from './Logo'
import Links from './Links'
import SocialMediaSideLine from './SocialMediaSideLine'
import { useBreakpoint } from '@/components/hooks/use-breakpoint'

const Navbar = () => {

  const {isMobile} = useBreakpoint()
  
  return (
    <div className="w-full h-20 flex justify-between items-center pl-5 md:pl-0">
        <Logo />
        <Links />
        <SocialMediaSideLine />
    </div>
  )
}

export default Navbar