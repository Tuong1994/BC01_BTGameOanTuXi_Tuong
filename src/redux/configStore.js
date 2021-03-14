import { combineReducers, createStore } from "redux";
import { gameReducer } from "./reducer/GameOanTuXiReducer";

const rootReducer = combineReducers({
  gameReducer,
});

export const store = createStore(rootReducer);
