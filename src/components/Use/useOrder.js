import * as reducer from "../../store/reducer/order";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useOrder = () => {
  const jointOrderList = useShallowEqualSelectorToJS((state) =>
    state.order.get("list")
  );
  
  const actions = useActions(reducer);

  return {
    jointOrderList,

    listAllJointOrder: actions.listAllJointOrder,
  };
};

export default useOrder;
