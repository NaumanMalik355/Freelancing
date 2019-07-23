import { createStore } from 'store';
import rootReducer from './reducers/index.js';

const initialState = {};
const store = createStore(initialState, rootReducer);
export default store;
