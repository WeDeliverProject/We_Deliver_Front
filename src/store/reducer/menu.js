import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { MenuApi } from "../../remote";

export const LISTALL_MENU = "menu/LISTALL";
export const LISTALL_ADDITION_MENU = "menu/LISTALL_ADDITION";

export const listAllMenu = createAction(LISTALL_MENU, MenuApi.listAll);

export const listAllAdditionMenu = createAction(
  LISTALL_ADDITION_MENU,
  MenuApi.listAllAddition
);

const initialState = Map({
  list: Map({
    count: 0,
    results: List([]),
  }),
  additionList: Map({
    count: 0,
    results: List([]),
  }),
});

export default handleActions(
  {
    ...pender({
      type: LISTALL_MENU,
      onSuccess: (state, action) => {
        const data = action.payload.data;

        return state.set("list", fromJS(data));
      },
    }),
    ...pender({
      type: LISTALL_ADDITION_MENU,
      onSuccess: (state, action) => {
        const data = action.payload.data;

        return state.set("additionList", fromJS(data));
      },
    }),
  },
  initialState
);
