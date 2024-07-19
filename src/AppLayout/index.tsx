'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useMemo } from 'react'

type props = {
  children: React.ReactNode
}

const AppLayout: React.FC<props> = ({ children }) => {
  const queryClient = useMemo(() => new QueryClient(), [])

  return (
    <QueryClientProvider client={queryClient}>
      <main className="w-full min-h-screen flex justify-start items-center flex-col">
        {/* navbar */}
        {children}
        {/* footer */}
      </main>
    </QueryClientProvider>
  )
}

export default AppLayout
