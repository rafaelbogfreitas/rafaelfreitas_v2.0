import { Types } from "./types";

const {
  INCREASE_COUNTER,
  DECREASE_COUNTER
} = Types;

export const increaseCounter = () => {
  return (dispatch) => {
    dispatch({
      type: INCREASE_COUNTER,
      payload: 1
    })
  }
}

export const decreaseCounter = () => {
  return (dispatch) => {
    dispatch({
      type: DECREASE_COUNTER,
      payload: -1
    })
  }
}