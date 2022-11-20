import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = {
  isAuthenticated: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
// state.myCounter
//state.auth
const store = configureStore({
  reducer: {
    myCounter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;

export const authActions = authSlice.actions;

export default store;
