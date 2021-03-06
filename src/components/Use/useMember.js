import * as reducer from "../../store/reducer/member";

const useMember = () => {
  return {
    signupApi: reducer.signupApi,
    loginApi: reducer.loginApi,
    tokenApi: reducer.tokenApi,
  };
};

export default useMember;
