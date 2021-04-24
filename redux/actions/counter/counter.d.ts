import { INCREASE_COUNTER, DECREASE_COUNTER } from './constants';

type increaseCounter = {
  type: typeof INCREASE_COUNTER;
  payload: number;
};

type decreaseCounter = {
  type: typeof DECREASE_COUNTER;
  payload: number;
};

type counterDispatchTypes = increaseCounter | decreaseCounter;
