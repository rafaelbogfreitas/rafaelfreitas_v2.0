
import { combineReducers } from 'redux';

import Counter from "./counter"

const reducers = combineReducers({
  count: Counter
});

export default reducers;