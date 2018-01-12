import localforage from 'localforage'

export const loadState = () => {
    try {
        return localforage.getItem('onbState').then(state => state || {})
    }
    catch(ex) {
        Promise.resolve({})
    }
}

export const saveState = (state) => {
  try {
    localforage.setItem('localState', state)
  } catch (ex) {
    console.warn('cannot save state with localforage', ex)
  }
}