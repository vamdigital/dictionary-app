'use client'
import { useReducer } from 'react'
import { ThemeContext } from './ThemeContext'
// import { ThemeState, initialTheme } from './types'
import { ThemeReducer, defaultTheme } from './ThemeReducer'

interface Props {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(ThemeReducer, defaultTheme)

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
