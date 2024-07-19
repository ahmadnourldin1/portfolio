import { useState, useEffect } from 'react'

// Tailwind CSS breakpoints in pixels
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string>('lg') // Default to 'lg'

  const handleResize = () => {
    const width = window.innerWidth
    if (width < BREAKPOINTS.sm) {
      setBreakpoint('xs') // Optional: handle size smaller than `sm`
    } else if (width < BREAKPOINTS.md) {
      setBreakpoint('sm')
    } else if (width < BREAKPOINTS.lg) {
      setBreakpoint('md')
    } else if (width < BREAKPOINTS.xl) {
      setBreakpoint('lg')
    } else if (width < BREAKPOINTS['2xl']) {
      setBreakpoint('xl')
    } else {
      setBreakpoint('2xl')
    }
  }

  useEffect(() => {
    handleResize() // Set initial breakpoint
    window.addEventListener('resize', handleResize) // Add resize event listener

    return () => {
      window.removeEventListener('resize', handleResize) // Cleanup on unmount
    }
  }, [])

  return breakpoint
}

export default useBreakpoint
