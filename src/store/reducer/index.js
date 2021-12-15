import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import restaurantReducer from "./restaurants";
import orderReducer from "./order";
import menuReducer from "./menu";
import reviewReducer from "./review";

export default combineReducers({
  pender: penderReducer,
  restaurant: restaurantReducer,
  order: orderReducer,
  menu: menuReducer,
  review: reviewReducer,
});
