// ActionType
export enum ActionType {
  'DARK' = 'dark',
  'LIGHT' = 'light'
}
// State Type
export type ThemeState = {
  theme: ActionType.DARK | ActionType.LIGHT
}

// Initial State
export const initialTheme: ThemeState = {
  theme: ActionType.LIGHT
}

// Dispatch Type
export type ThemeDispatchType = (action: ActionType) => void

// Context Type
export type ContextType = {
  state: ThemeState
  dispatch: ThemeDispatchType
}
