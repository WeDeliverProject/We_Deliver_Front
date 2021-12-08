import * as reducer from "../../store/reducer/restaurants";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useRestaurant = () => {
  const restaurantList = useShallowEqualSelectorToJS((state) =>
    state.restaurant.get("list")
  );
  const restaurantOne = useShallowEqualSelectorToJS((state) =>
    state.restaurant.get("restaurant")
  );
  const actions = useActions(reducer);

  return {
    restaurantList,
    restaurantOne,

    listAllRestaurants: actions.listAllRestaurants,
    getRestaurants: actions.getRestaurants,
  };
};

export default useRestaurant;
