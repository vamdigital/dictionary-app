'use client'

import React, { useReducer } from 'react'
import { FontFamilyContext } from './context'
import { initialState, fontFamilyReducer } from './reducer'

interface Props {
  children: React.ReactNode
}

export const FontFamilyProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(fontFamilyReducer, initialState)

  const value = { state, dispatch }
  return (
    <FontFamilyContext.Provider value={value}>
      {children}
    </FontFamilyContext.Provider>
  )
}
