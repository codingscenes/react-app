import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter';

const store = configureStore({
  reducer: {
    myCounter: counterReducer,
    auth: authReducer,
  },
});

export default store;
