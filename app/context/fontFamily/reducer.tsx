'use client'

import { State, ActionTypes } from './types'

export const initialState: State = { fontFamily: 'serif' }

export const fontFamilyReducer = (
  state: State = initialState,
  action: ActionTypes
): State => {
  switch (action.type) {
    case 'serif':
      return { fontFamily: 'serif' }
    case 'sans':
      return { fontFamily: 'sans' }
    case 'mono':
      return { fontFamily: 'mono' }
    default:
      return state
  }
}
