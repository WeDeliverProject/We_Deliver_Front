import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { OrderApi } from "../../remote";

export const LISTALL_JOINT_ORDER = "order/LISTALL_JOINT";

export const listAllJointOrder = createAction(
  LISTALL_JOINT_ORDER,
  OrderApi.getJoint
);


const initialState = Map({
  list: Map({
    count: 0,
    results: List([]),
  })
});

export default handleActions(
  {
    ...pender({
      type: LISTALL_JOINT_ORDER,
      onSuccess: (state, action) => {
        const data = action.payload.data;

        return state.set("list", fromJS(data));
      },
    })
  },
  initialState
);
