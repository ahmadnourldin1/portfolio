import React from 'react'

import { cn } from '@/lib/utils'

const CloseIcon = ({
  className,
  pathClassName,
}: {
  className?: string
  pathClassName?: string
}) => {
  return (
    <svg
      className={cn(className)}
      width="800"
      height="800"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn(pathClassName)}
        d="M112 682.24L688 106.24"
        strokeWidth="48"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={cn(pathClassName)}
        d="M112 106.24L688 682.24"
        strokeWidth="48"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CloseIcon
