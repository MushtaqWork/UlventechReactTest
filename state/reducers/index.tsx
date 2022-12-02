import { combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
  fields: reducer,
});

export default reducers;
