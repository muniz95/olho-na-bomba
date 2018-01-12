import { SAVE_GAS_STATION, REMOVE_GAS_STATION } from '../constants'
import { combineReducers } from 'redux'

const gasStation = (state = {}, action) => {
  switch (action.type) {
    case SAVE_GAS_STATION:
      return action.payload
    case REMOVE_GAS_STATION:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  gasStation
})