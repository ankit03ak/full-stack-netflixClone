import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthAction";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${API_BASE_URL}/api/auth/login`, user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};