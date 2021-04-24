import { combineReducers } from 'redux';

import counter from './counter';
import projects from './projects';

const rootReducer = combineReducers({
  count: counter,
  projects: projects,
});

export default rootReducer;
