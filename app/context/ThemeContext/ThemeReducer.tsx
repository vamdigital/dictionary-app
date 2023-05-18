import { ActionType, ThemeState, initialTheme } from './types'

export const ThemeReducer = (
  state: ThemeState = initialTheme,
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
