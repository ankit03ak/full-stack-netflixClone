import axios from "axios";
import { 
  loginFailure, loginStart, loginSuccess, 
  registerFailure, registerStart, registerSuccess 
} from "./AuthAction";

// LOGIN FUNCTION
export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("api/auth/login", user);
    dispatch(loginSuccess(res.data));
    // return res.data;
  } catch (err) {
    dispatch(loginFailure());
    // return null;
  }
};

// REGISTER FUNCTION
export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("api/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
