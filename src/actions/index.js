import { SIGN_UP } from "./types";
import axios from "axios";

export const signup = userData => async dispatch => {
  try {
    console.log(userData);
    const response = await axios.post(
      "http://localhost:4000/auth/signup",
      userData
    );
    console.log({ response });
  } catch (e) {
    console.log(e);
  }

  //   dispatch({ type: SIGN_UP, payload: response.data });
};
