import { createContext, useContext } from 'react'
import type { ContextType } from './types'

export const ThemeContext = createContext<ContextType | null>(null)

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext)

  if (!ctx) {
    throw new Error('Theme Context must be wrapped in ThemeProvider')
  }

  return ctx
}
