import { ActionType, ThemeState, initialTheme } from './types'

const initTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
  ? ActionType.DARK
  : ActionType.LIGHT

export const defaultTheme = {
  theme: initTheme
}

export const ThemeReducer = (
  state: ThemeState = defaultTheme,
  action: ActionType
): ThemeState => {
  switch (action) {
    case ActionType.LIGHT:
      return {
        theme: ActionType.LIGHT
      }
    case ActionType.DARK:
      console.log('come here')
      return {
        theme: ActionType.DARK
      }
    default:
      return state
  }
}
