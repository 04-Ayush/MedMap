import { createContext, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type AuthContextValue = {
  isAuthenticated: boolean
  captain: { id: string; name: string; email: string } | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const [captain, setCaptain] = useState<{
    id: string
    name: string
    email: string
  } | null>(null)

  const login = async (email: string, _password: string) => {
    // Mock authentication
    await new Promise((r) => setTimeout(r, 400))
    setCaptain({ id: 'CAP-001', name: 'Alex Captain', email })
    navigate('/dashboard', { replace: true })
  }

  const logout = () => {
    setCaptain(null)
    navigate('/login', { replace: true })
  }

  const value = useMemo<AuthContextValue>(() => ({
    isAuthenticated: Boolean(captain),
    captain,
    login,
    logout,
  }), [captain])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

