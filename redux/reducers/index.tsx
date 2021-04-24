import { combineReducers } from 'redux'

import Counter from './counter'
import Projects from './projects'

const reducers = combineReducers({
  count: Counter,
  projects: Projects,
})

export default reducers
