import { combineReducers } from 'redux'
import IGasStation from '../interfaces/IGasStation'

interface IAction {
  type: string;
  payload: IGasStation
}

const gasStation = (state: IGasStation = {name:''}, action: IAction) => {
  switch (action.type) {
    case 'REMOVE_GAS_STATION':
      return action.payload
    case 'SAVE_GAS_STATION':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  gasStation
})