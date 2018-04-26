import { REMOVE_GAS_STATION, SAVE_GAS_STATION } from '../constants';

export const saveGasStation = (gasStation: any) => {
    const action = {
        payload: gasStation,
        type: SAVE_GAS_STATION
    }
    return action;
}

export const removeGasStation = (gasStation: any) => {
    const action = {
        payload: gasStation,
        type: REMOVE_GAS_STATION
    }
    return action;
}