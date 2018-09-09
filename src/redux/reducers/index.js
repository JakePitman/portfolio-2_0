import { CHANGE_CURRENT_SECTION } from '../../constants/action-types.js'

const initialState = {
  currentSection: 'my-tech-journey'
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_SECTION:
      return {...state, currentSection: action.newSection}
    default: 
      return state
  }
}

export default rootReducer
