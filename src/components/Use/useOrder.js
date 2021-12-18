import * as reducer from "../../store/reducer/order";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useOrder = () => {
  const jointOrderList = useShallowEqualSelectorToJS((state) =>
    state.order.get("jointList")
  );

  const orderList = useShallowEqualSelectorToJS((state) =>
    state.order.get("orderList")
  );

  const myList = useShallowEqualSelectorToJS((state) =>
    state.order.get("myList")
  );

  const reviewOrder = useShallowEqualSelectorToJS((state) =>
    state.order.get("reviewOrder")
  );

  const actions = useActions(reducer);

  return {
    jointOrderList,
    orderList,
    myList,
    reviewOrder,

    listAllJointOrder: actions.listAllJointOrder,
    listAllOrder: actions.listAllOrder,
    listAllMy: actions.listAllMy,
    concatMenu: actions.concatMenu,
    deleteMenu: actions.deleteMenu,
    plusCount: actions.plusCount,
    minusCount: actions.minusCount,
    deleteOrder: actions.deleteOrder,
    reviewOrderOne: actions.reviewOrderOne,

    createListApi: reducer.createApi,
    deleteApi: reducer.deleteApi,
    minusApi: reducer.minusApi,
    plusApi: reducer.plusApi,
    createJointApi: reducer.createJointApi,
    createOrderApi: reducer.createOrderApi,
  };
};

export default useOrder;
