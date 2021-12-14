import * as reducer from "../../store/reducer/review";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useReview = () => {
  const reviewList = useShallowEqualSelectorToJS((state) =>
    state.review.get("list")
  );

  const actions = useActions(reducer);

  return {
    reviewList,

    listAllReview: actions.listAllReview,
  };
};

export default useReview;
