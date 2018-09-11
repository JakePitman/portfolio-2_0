import { ABOUT_ME, MY_TECH_JOURNEY, PROJECTS } from '../constants/nav-button-types'
import { 
  ABOUT_ME_MAIN_COLOR,
  MY_TECH_JOURNEY_MAIN_COLOR,
  PROJECTS_MAIN_COLOR
} from '../constants/colors'

const getMainColor = (currentSection) => {
  let mainColor;
  switch (currentSection) {
    case ABOUT_ME:
      mainColor = ABOUT_ME_MAIN_COLOR
      break;
    case MY_TECH_JOURNEY:
      mainColor = MY_TECH_JOURNEY_MAIN_COLOR
      break;
    case PROJECTS:
      mainColor = PROJECTS_MAIN_COLOR
      break;
    default:
      mainColor = null
  }
  return mainColor
}

export default getMainColor
