import { combineReducers } from 'redux'
import { REMOVE_GAS_STATION, SAVE_GAS_STATION } from '../constants'

const gasStation = (state: any = {}, action: any) => {
  switch (action.type) {
    case REMOVE_GAS_STATION:
      return action.payload
    case SAVE_GAS_STATION:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  gasStation
})