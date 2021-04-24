import { SET_PROJECTS } from '../actions/projects/constants'

type INITIAL_STATE = {
  projects: Projects[]
}

const defaultState: INITIAL_STATE = {
  projects: [],
}

export const projectsReducer = (
  state = defaultState,
  action: projectsDispatchActions
): INITIAL_STATE => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      }
      break
    default:
      return state
  }
}

export default projectsReducer
