import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { MemberApi } from "../../remote";

export const signupApi = MemberApi.signup;
export const loginApi = MemberApi.login;

export default { signupApi, loginApi };
