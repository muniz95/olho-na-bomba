import * as localforage from "localforage";

export const loadState = () => {
  try {
    return localforage.getItem("onbState").then((state) => state || {});
  } catch (ex) {
    Promise.resolve({});
  }

  return null;
};

export const saveState = (state: any) => {
  try {
    localforage.setItem("localState", state);
  } catch (ex) {
    window.console.warn("cannot save state with localforage", ex);
  }
};
