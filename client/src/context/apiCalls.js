import axios from "axios";
import { 
  loginFailure, loginStart, loginSuccess, 
  registerFailure, registerStart, registerSuccess 
} from "./AuthAction";

const URL = import.meta.env.VITE_API_BASE_URL;

// LOGIN FUNCTION
export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${URL}/api/auth/login`, user);
    dispatch(loginSuccess(res.data));
    return { success: true, data: res.data };
  } catch (err) {
    dispatch(loginFailure());
    return {
      success: false,
      message:
        err.response?.data?.message || "Invalid email or password!",
    };
  }
};


// REGISTER FUNCTION
export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(`${URL}/api/auth/register`, user);
    dispatch(registerSuccess(res.data));
    return { success: true };
  } catch (err) {
    dispatch(registerFailure());
    return { success: false };
  }
};
