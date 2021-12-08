import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { RestaurantApi } from "../../remote";

export const LISTALL_RESTAURANTS = "restaurants/LISTALL";
export const GET_RESTAURANTS = "restaurants/GET";

export const listAllRestaurants = createAction(
  LISTALL_RESTAURANTS,
  RestaurantApi.listAll
);

export const getRestaurants = createAction(GET_RESTAURANTS, RestaurantApi.get);

const initialState = Map({
  list: Map({
    count: 0,
    results: List([]),
  }),
  restaurant: Map({
    _id: "",
    category: "",
    img: "",
    delivery_cost: 0,
    min_oreder_amount: 0,
    reviewCount: 0,
    star: 0,
    name: "",
  }),
});

export default handleActions(
  {
    ...pender({
      type: LISTALL_RESTAURANTS,
      onSuccess: (state, action) => {
        const data = action.payload.data;

        return state.set("list", fromJS(data));
      },
    }),
    ...pender({
      type: GET_RESTAURANTS,
      onSuccess: (state, action) => {
        const data = action.payload.data;

        return state.set("restaurant", fromJS(data));
      },
    }),
  },
  initialState
);
