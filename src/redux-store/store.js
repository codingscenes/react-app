import { combineReducers, legacy_createStore as createStore } from 'redux';
import productReducer from './reducers/product';

const rootReducer = combineReducers({
  teaShop: productReducer,
});
const store = createStore(rootReducer);

export default store;
