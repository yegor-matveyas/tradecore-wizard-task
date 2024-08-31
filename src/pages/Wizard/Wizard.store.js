import { defaultNewSubgenreState, defaultInformationState } from './Wizard.utils'

/** New Subgenre Store utils */
export const NewSubgenreActions = {
  UPDATE: 'update_new_subgenre_state',
  RESET: 'reset_new_subgenre_state',
}

export function newSubgenreReducer(state, action) {
  switch (action.type) {
    case NewSubgenreActions.UPDATE:
      return { ...state, ...action.payload }
    case NewSubgenreActions.RESET:
      return defaultNewSubgenreState
    default:
      return state
  }
}

/** Information Store utils */
export const InformationActions = {
  UPDATE: 'update_information_state',
  RESET: 'reset_information_state',
}

export function informationReducer(state, action) {
  switch (action.type) {
    case InformationActions.UPDATE:
      return { ...state, ...action.payload }
    case InformationActions.RESET:
      return defaultInformationState
    default:
      return state
  }
}
