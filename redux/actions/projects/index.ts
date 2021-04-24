import { Dispatch } from 'redux'
import { SET_PROJECTS } from './constants'

export const getProjects = () => async (
  dispatch: Dispatch<projectsDispatchActions>
): Promise<void> => {
  try {
    const response = await fetch('http://localhost:3000/api/projects')
    const projects = await response.json()

    dispatch({
      type: SET_PROJECTS,
      payload: projects,
    })
  } catch (err) {
    console.log(err)
  }
}
