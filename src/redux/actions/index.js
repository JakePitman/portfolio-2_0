import { CHANGE_CURRENT_SECTION } from '../../constants/action-types.js'

export const changeCurrentSection = newSection => {
  return ({ type: CHANGE_CURRENT_SECTION, newSection: newSection })
}
