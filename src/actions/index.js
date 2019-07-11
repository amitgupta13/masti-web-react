import { SIGN_UP, LOGOUT, SIGN_IN, CHECK_AUTH, PROFILE } from "./types";
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
    history.push("/");
  } catch (e) {
    console.log(e.response.data);
  }
};

export const signin = userData => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:4000/auth/signin",
      userData
    );
    dispatch({ type: SIGN_IN, payload: response.data });
    localStorage.setItem("token", response.data.token);
    history.push("/");
  } catch (e) {
    console.log(e.response.data);
  }
};

export const checkAuth = () => async dispatch => {
  const token = await localStorage.getItem("token");
  if (token) dispatch({ type: CHECK_AUTH, payload: token });
};

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  localStorage.removeItem("profile");
  dispatch({ type: LOGOUT });
  history.push("/signup");
};

export const profile = token => async dispatch => {
  try {
    const response = await axios.get("http://localhost:4000/auth/profile", {
      headers: {
        "x-auth-token": token
      }
    });
    dispatch({ type: PROFILE, payload: response.data });
    localStorage.setItem("profile", JSON.stringify(response.data));
    // history.push("/");
  } catch (e) {
    console.log(e.response.data);
  }
};
