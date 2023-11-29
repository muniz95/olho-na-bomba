import IGasStation from '../interfaces/IGasStation';

export const saveGasStation = (gasStation: IGasStation) => {
    const action = {
        payload: gasStation,
        type: 'SAVE_GAS_STATION'
    }
    return action;
}

export const removeGasStation = (gasStation: IGasStation) => {
    const action = {
        payload: gasStation,
        type: 'REMOVE_GAS_STATION'
    }
    return action;
}