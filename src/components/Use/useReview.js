import * as reducer from "../../store/reducer/review";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useReview = () => {
  const reviewList = useShallowEqualSelectorToJS((state) =>
    state.review.get("list")
  );

  const reviewTodayList = useShallowEqualSelectorToJS((state) =>
    state.review.get("todayList")
  );

  const actions = useActions(reducer);

  return {
    reviewList,
    reviewTodayList,

    listAllReview: actions.listAllReview,
    listAllTodayReview: actions.listAllTodayReview
  };
};

export default useReview;
