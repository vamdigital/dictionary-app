type family = 'serif' | 'sans' | 'mono'

export type ActionTypes = { type: family }

export type State = {
  fontFamily: family
}

export type Dispatch = (action: ActionTypes) => void
