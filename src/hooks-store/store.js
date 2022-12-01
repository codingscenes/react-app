//Generic custom hook store
import { useEffect, useState } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

// generic store
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    // store should be one single store
    globalState = { ...globalState, ...newState };
    
    for (const listener of listeners) {
      listener(globalState); // re-rendering/JSX refresh
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (initialState, userActions) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
