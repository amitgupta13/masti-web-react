import { SIGN_UP } from "./types";
import axios from "axios";

export const signup = userData => async dispatch => {
  try {
    console.log(userData);
    const response = await axios.post(
      "http://localhost:4000/auth/signup",
      userData
    );
    dispatch({ type: SIGN_UP, payload: response.data });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("profile", JSON.stringify(response.data.profile));
  } catch (e) {
    console.log(e.response.data);
  }
};
