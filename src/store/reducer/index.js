import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import restaurantReducer from "./restaurants";

export default combineReducers({
  pender: penderReducer,
  restaurant: restaurantReducer,
});
