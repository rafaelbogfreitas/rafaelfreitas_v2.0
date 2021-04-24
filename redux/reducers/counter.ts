import { DECREASE_COUNTER, INCREASE_COUNTER } from '../actions/counter/constants'
import { counterDispatchTypes } from '../actions/counter/counter'

interface INITIAL_STATE {
  count: number
}

const defaultState: INITIAL_STATE = {
  count: 0,
}

export const counterReducer = (
  state = defaultState,
  action: counterDispatchTypes
): INITIAL_STATE => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        count: state.count + action.payload,
      }
      break
    case DECREASE_COUNTER:
      return {
        ...state,
        count: state.count - action.payload,
      }
      break
    default:
      return state
  }
}

export default counterReducer
