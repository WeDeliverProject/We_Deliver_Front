import * as reducer from "../../store/reducer/member";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useMember = () => {
  return {
    signupApi: reducer.signupApi,
    loginApi: reducer.loginApi,
  };
};

export default useMember;
