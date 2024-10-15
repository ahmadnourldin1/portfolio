import cn from '@/utils/cn'
import React from 'react'

interface props {
    className?: string;
    icon: React.ReactNode;
}

const SVG: React.FC<props> = ({className, icon}) => {
  return (
    <div className={cn('w-2 h-2 flex justify-center items-center', className)}>
        {icon}
    </div>
  )
}

export default SVG