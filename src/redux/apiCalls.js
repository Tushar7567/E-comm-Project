import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  // dispatch(loginStart());
  try {
    console.log('1')
    const res = await publicRequest.post("/auth/login", user);
    console.log(res.data)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("error in apiCalls")
    dispatch(loginFailure());
  }
};
