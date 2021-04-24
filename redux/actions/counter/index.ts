import { Dispatch } from 'redux'
import { DECREASE_COUNTER, INCREASE_COUNTER } from './constants'
import { counterDispatchTypes } from './counter'

export const increaseCounter = () => (dispatch: Dispatch<counterDispatchTypes>): void => {
  dispatch({
    type: INCREASE_COUNTER,
    payload: 1,
  })
}

export const decreaseCounter = () => (dispatch: Dispatch<counterDispatchTypes>): void => {
  dispatch({
    type: DECREASE_COUNTER,
    payload: 1,
  })
}
