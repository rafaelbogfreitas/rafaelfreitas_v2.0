import { DECREASE_COUNTER, INCREASE_COUNTER } from '../actions/counter/constants';
import { counterDispatchTypes } from '../actions/counter/counter';

const defaultState = 0;

export const counterReducer = (state = defaultState, action: counterDispatchTypes): number => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + action.payload;
      break;
    case DECREASE_COUNTER:
      return state - action.payload;
      break;
    default:
      return state;
  }
};

export default counterReducer;
