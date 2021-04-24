import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

export type ApplicationState = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thunk))

export default store
