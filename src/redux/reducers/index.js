import { CHANGE_CURRENT_SECTION } from '../../constants/action-types.js'

const initialState = {
  currentSection: null
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_SECTION:
      if (state.currentSection === action.newSection) {
        return {...state, currentSection: null}
      }
      return {...state, currentSection: action.newSection}
    default: 
      return state
  }
}

export default rootReducer
