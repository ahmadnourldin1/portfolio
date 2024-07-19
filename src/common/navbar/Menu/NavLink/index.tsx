import Link from 'next/link'
import React from 'react'

import useBreakpoint from '@/hooks/useBreakpoint'
import { cn } from '@/lib/utils'

type Props = {
  href: string
  className?: string
  label: string
}

const NavLink: React.FC<Props> = ({ href, className, label }) => {
  const breakpoint = useBreakpoint()
  return (
    <li
      className={cn(
        className,
        'cursor-pointer',
        breakpoint === 'xs' ? 'text-3xl' : '',
      )}
    >
      <Link
        href={href}
        className="hover:text-cuBackground md:hover:text-cuText"
      >
        {label}
      </Link>
    </li>
  )
}

export default NavLink
