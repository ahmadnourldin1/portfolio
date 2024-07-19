import React, { createContext, useContext, useState, ReactNode } from 'react'

// Define the shape of the context value
interface AuthContextType {
  user: any // Replace `any` with your user type
  isAuthenticated: boolean
  login: (user: any) => void
  logout: () => void
}

// Create the Auth Context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Create a provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null) // Replace `any` with your user type
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const login = (user: any) => {
    // Replace `any` with your user type
    setUser(user)
    setIsAuthenticated(true)
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Create a custom hook for consuming the context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
