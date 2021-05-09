import { combineReducers } from 'redux';

import auth from './auth';
import counter from './counter';
import projects from './projects';

const rootReducer = combineReducers({
  counter,
  projects,
  auth,
});

export default rootReducer;
