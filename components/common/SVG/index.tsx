import cn from '@/utils/cn'
import React from 'react'

interface props {
    className: string
}

const SVG: React.FC<props> = ({className}) => {
  return (
    <div className={cn('w-6 h-6', className)}>SVG</div>
  )
}

export default SVG