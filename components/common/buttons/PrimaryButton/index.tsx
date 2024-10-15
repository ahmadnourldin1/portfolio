import cn from '@/utils/cn'
import React from 'react'

interface props {
    className?: string
    text: string
    onClick?: () => void
}

const PrimaryButton: React.FC<props> = ({className, text, onClick}) => {
  return (
    <button className={cn('bg-primary text-white px-4 py-2 rounded-md', className)} onClick={onClick}>{text}</button>
  )
}

export default PrimaryButton