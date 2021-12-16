import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { OrderApi } from "../../remote";

export const LISTALL_JOINT_ORDER = "order/LISTALL_JOINT";
export const LISTALL_ORDER = "order/LISTALL";
export const CONCAT_MENU = "order/CONCAT_MENU";
export const DELETE_MENU = "order/DELETE_MENU";
export const PLUS_MENU = "order/PLUS_MENU";
export const MINUS_MENU = "order/MINUS_MENU";
export const DELETE_ORDER = "order/DELETE_ORDER";
export const REVIEW_ORDER = "order/REVIEW_ORDER";

export const concatMenu = createAction(CONCAT_MENU, (menu) => menu);
export const deleteMenu = createAction(DELETE_MENU, (menu) => menu);
export const plusCount = createAction(PLUS_MENU, (menu) => menu);
export const minusCount = createAction(MINUS_MENU, (menu) => menu);
export const deleteOrder = createAction(DELETE_ORDER);


export const listAllJointOrder = createAction(
  LISTALL_JOINT_ORDER,
  OrderApi.getJoint
);

export const listAllOrder = createAction(
  LISTALL_ORDER,
  OrderApi.listAll
);

export const reviewOrderOne = createAction(
  REVIEW_ORDER,
  OrderApi.reviewOrder
)

export const createApi = OrderApi.create;
export const deleteApi = OrderApi.remove;
export const minusApi = OrderApi.minus;
export const plusApi = OrderApi.plus;
export const createOrderApi = OrderApi.createOrder;
export const createJointApi = OrderApi.createJoint;

const initialState = Map({
  jointList: Map({
    count: 0,
    results: List([]),
  }),

  orderList: Map({
    count: 0,
    results: List([]),
  }),

  reviewOrder: Map(
    {}
  )
});

export default handleActions(
  {
    [CONCAT_MENU]: (state, { payload: menu }) => {
      let results = state.getIn(["orderList", "results"]);
      let count = state.getIn(["orderList", "count"]);
      let idx = -1;
      let cnt;
      for(let i=0; i<results.size; i++) {
        if(results.getIn([i,'id']) === menu.id) {
          cnt = results.getIn([i,'count']);
          idx = i;
          break;
        }
      }
      
      if(idx === -1) {
        count += 1;
        results = [...results, menu]
      } else {
        results = results.setIn([idx, 'count'], cnt+1);
      }

      return state
        .setIn(["orderList", "count"], count)
        .setIn(["orderList", "results"], fromJS(results));
    },

    [DELETE_MENU]: (state, { payload: menu }) => {
      let results = state.getIn(["orderList", "results"]);
      let count = state.getIn(["orderList", "count"]);
      count -= 1;
      for(let i=0; i<results.size; i++) {
        if(results.getIn([i,'id']) === menu.menuId) {
          results = results.delete(i);
          break;
        }
      }

      return state
        .setIn(["orderList", "count"], count)
        .setIn(["orderList", "results"], fromJS(results));
    },
    [PLUS_MENU]: (state, { payload: menu }) => {
      let results = state.getIn(["orderList", "results"]);
      let count = state.getIn(["orderList", "count"]);
      for(let i=0; i<results.size; i++) {
        if(results.getIn([i,'id']) === menu.menuId) {
          results = results.setIn([i, 'count'], results.getIn([i,'count'])+1);
          break;
        }
      }

      return state
        .setIn(["orderList", "count"], count)
        .setIn(["orderList", "results"], fromJS(results));
    },
    [MINUS_MENU]: (state, { payload: menu }) => {
      let results = state.getIn(["orderList", "results"]);
      let count = state.getIn(["orderList", "count"]);
      for(let i=0; i<results.size; i++) {
        if(results.getIn([i,'id']) === menu.menuId) {
          const cnt = results.getIn([i,'count']);
          if(cnt === 1) {
            results = results.delete(i);
          }
          else {
            results = results.setIn([i, 'count'], cnt-1);
          }
          break;
        }
      }

      return state
        .setIn(["orderList", "count"], count)
        .setIn(["orderList", "results"], fromJS(results));
    },
    [DELETE_ORDER]: (state) => {
      const data = Map({
        count: 0,
        results: List([]),
      })
      return state.set("orderList", fromJS(data));
    },
    ...pender({
      type: LISTALL_JOINT_ORDER,
      onSuccess: (state, action) => {
        const data = action.payload.data;

        return state.set("jointList", fromJS(data));
      },
    }),
    ...pender({
      type: LISTALL_ORDER,
      onSuccess: (state, action) => {
        const data = action.payload.data;

        return state.set("orderList", fromJS(data));
      },
    }),
    ...pender({
      type: REVIEW_ORDER,
      onSuccess: (state, action) => {
        const data = action.payload.data;

        return state.set("reviewOrder", fromJS(data));
      },
    }),
  },
  initialState
);
