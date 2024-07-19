'use client'
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from 'react'

import axiosInstance from '@/utils/axiosInstance'

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const { data } = await axiosInstance.get('/api/auth/me')
        setUser(data.user)
      } catch (error) {
        console.error('Error checking user login:', error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkUserLoggedIn()
  }, [])

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({ user, loading }), [user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
