import React from 'react'

import { cn } from '@/lib/utils'

const MenuIcon = ({
  className,
  pathClassName,
}: {
  className?: string
  pathClassName?: string
}) => {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 32 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn(pathClassName)}
        d="M0 1H32"
        stroke="#C7C7C7"
        strokeWidth="2"
      />
      <path
        className={cn(pathClassName)}
        d="M0 13H32"
        stroke="#C7C7C7"
        strokeWidth="2"
      />
    </svg>
  )
}

export default MenuIcon
