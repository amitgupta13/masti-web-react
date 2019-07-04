import { SIGN_UP, LOGOUT } from "./types";
import axios from "axios";
import history from "../history";

export const signup = userData => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:4000/auth/signup",
      userData
    );
    dispatch({ type: SIGN_UP, payload: response.data });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("profile", JSON.stringify(response.data.profile));
    history.push("/");
  } catch (e) {
    console.log(e.response.data);
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  localStorage.removeItem("profile");
  dispatch({ type: LOGOUT });
  history.push("/signup");
};
