import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import restaurantReducer from "./restaurants";
import orderReducer from "./order";
import menuReducer from "./menu";

export default combineReducers({
  pender: penderReducer,
  restaurant: restaurantReducer,
  order: orderReducer,
  menu: menuReducer,
});
