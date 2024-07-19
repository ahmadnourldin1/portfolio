import { motion } from 'framer-motion'

import SVG from '@/common/SVG'
import useBreakpoint from '@/hooks/useBreakpoint'
import CloseIcon from '@/icons/CloseIcon'
import { cn } from '@/lib/utils'

import Link from './NavLink'

type Props = {
  className?: string
  onClick?: () => void
  isOpen?: boolean
}

const Menu: React.FC<Props> = ({ className, onClick, isOpen }) => {
  const breakpoint = useBreakpoint()

  return (
    <motion.ul
      className={cn(className, 'flex gap-9 justify-center items-center')}
      initial={breakpoint === 'xs' ? { opacity: 0, x: '100%' } : undefined}
      animate={
        breakpoint === 'xs'
          ? { opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }
          : undefined
      }
      transition={breakpoint === 'xs' ? { duration: 0.3 } : undefined}
    >
      {breakpoint === 'xs' ? (
        <SVG
          icon={<CloseIcon pathClassName="stroke-cuText" />}
          className="w-8 h-8 absolute right-8 top-6"
          onClick={onClick}
        />
      ) : null}
      <Link href="/" label="Home" />
      <Link href="/about" label="About" />
      <Link href="/projects" label="Projects" />
      <Link href="/contact" label="Contact" />
    </motion.ul>
  )
}

export default Menu
