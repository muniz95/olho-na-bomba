import { SAVE_GAS_STATION, REMOVE_GAS_STATION } from '../constants';

export const saveGasStation = (gasStation) => {
    const action = {
        type: SAVE_GAS_STATION,
        payload: gasStation
    }
    return action;
}

export const removeGasStation = (gasStation) => {
    const action = {
        type: REMOVE_GAS_STATION,
        payload: gasStation
    }
    return action;
}