"use client"

import { useState, useEffect, createContext, useContext, type ReactNode } from "react"
import {
  type AuthState,
  mockLogin,
  mockRegister,
  mockLogout,
  getCurrentUser,
  mockForgotPassword,
  mockResetPassword,
} from "@/lib/auth"

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => Promise<void>
  forgotPassword: (email: string) => Promise<void>
  resetPassword: (token: string, newPassword: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  })

  useEffect(() => {
    // Check for existing user on mount
    const user = getCurrentUser()
    setAuthState({
      user,
      isLoading: false,
      isAuthenticated: !!user,
    })
  }, [])

  const login = async (email: string, password: string) => {
    setAuthState((prev) => ({ ...prev, isLoading: true }))
    try {
      const user = await mockLogin(email, password)
      setAuthState({
        user,
        isLoading: false,
        isAuthenticated: true,
      })
    } catch (error) {
      setAuthState((prev) => ({ ...prev, isLoading: false }))
      throw error
    }
  }

  const register = async (email: string, password: string, name: string) => {
    setAuthState((prev) => ({ ...prev, isLoading: true }))
    try {
      const user = await mockRegister(email, password, name)
      setAuthState({
        user,
        isLoading: false,
        isAuthenticated: true,
      })
    } catch (error) {
      setAuthState((prev) => ({ ...prev, isLoading: false }))
      throw error
    }
  }

  const logout = async () => {
    setAuthState((prev) => ({ ...prev, isLoading: true }))
    try {
      await mockLogout()
      setAuthState({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      })
    } catch (error) {
      setAuthState((prev) => ({ ...prev, isLoading: false }))
      throw error
    }
  }

  const forgotPassword = async (email: string) => {
    await mockForgotPassword(email)
  }

  const resetPassword = async (token: string, newPassword: string) => {
    await mockResetPassword(token, newPassword)
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
