import { useState } from 'react'

import useBreakpoint from '@/hooks/useBreakpoint'
import MenuIcon from '@/icons/MenuIcon'

import Menu from './Menu'
import SVG from '../SVG'

const Navbar = () => {
  const breakpoint = useBreakpoint()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick: () => void = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full h-16 flex justify-between items-center max-w-screen-xl py-10 px-9">
      <div className="font-BebasNeue uppercase">Ahmad nourldin</div>
      {breakpoint === 'xs' ? (
        <>
          <SVG icon={<MenuIcon />} className="w-8 h-8" onClick={handleClick} />
          <Menu
            className="fixed top-0 right-0 w-full h-full bg-cuPrimary flex-col opacity-0"
            onClick={handleClick}
            isOpen={isOpen}
          />
        </>
      ) : (
        <Menu />
      )}
    </div>
  )
}

export default Navbar
