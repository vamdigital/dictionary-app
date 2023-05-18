'use client'
import { useReducer } from 'react'
import { ThemeContext } from './ThemeContext'
import { initialTheme } from './types'
import { ThemeReducer } from './ThemeReducer'

interface Props {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialTheme)

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
