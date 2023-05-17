'use client'
import { createContext, useContext } from 'react'
import type { State, Dispatch } from './types'

export const FontFamilyContext = createContext<{
  state: State
  dispatch: Dispatch
} | null>(null)

export const useFontFamilyContext = () => {
  const ctx = useContext(FontFamilyContext)
  if (!ctx) {
    throw new Error('FontFamilyContext must be wrapped in a FontFamilyProvider')
  }
  return ctx
}
