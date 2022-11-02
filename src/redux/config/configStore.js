// src/redux/modules/config/configStore.js


// original code
import { createStore } from "redux";
import { combineReducers } from "redux";

// newly added part
import toDosReducer from '../modules/todos';

const rootReducer = combineReducers({
  toDos: toDosReducer // <-- newly added part
});
const store = createStore(rootReducer);

export default store;