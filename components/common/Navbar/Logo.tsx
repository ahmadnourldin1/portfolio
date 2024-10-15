import React from 'react'
import SVG from '../SVG'
import LogoIcon from '@/components/icons/LogoIcon'

const Logo = () => {
  return (
    <div  className="flex items-center gap-2">
      <SVG icon={<LogoIcon className='!fill-white w-full h-full' />} className="w-5 h-5"/>
      <span className='font-bold tracking-wide capitalize'>ahmad</span>
    </div>
  )
}

export default Logo