import { SET_PROJECTS } from '../actions/projects/constants';

const defaultState: Projects[] = [];

export const projectsReducer = (
  state = defaultState,
  action: projectsDispatchActions
): typeof defaultState => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.payload;
      break;
    default:
      return state;
  }
};

export default projectsReducer;
