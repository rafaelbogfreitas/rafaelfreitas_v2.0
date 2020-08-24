import { INITIAL_STATE } from "../states";
import { Types } from "../actions/types";

const {
  INCREASE_COUNTER,
  DECREASE_COUNTER
} = Types;

export default ( state = INITIAL_STATE.count, action ) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return  state + action.payload
      break;
    case DECREASE_COUNTER:
      return  state + action.payload
      break;
    default:
      return state;
  }
}