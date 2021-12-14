import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { ReviewApi } from "../../remote";

export const LISTALL_REVIEW = "review/LISTALL_REVIEW";

export const listAllReview = createAction(
  LISTALL_REVIEW,
  ReviewApi.listAllReview
);

const initialState = Map({
  list: Map({
    count: 0,
    results: List([]),
  }),
});

export default handleActions(
  {
    ...pender({
      type: LISTALL_REVIEW,
      onSuccess: (state, action) => {
        const data = action.payload.data;

        return state.set("list", fromJS(data));
      },
    }),
  },
  initialState
);
