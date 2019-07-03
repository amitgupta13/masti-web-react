import { SIGN_UP } from "../actions/types";

const INITIAL_STATE = {
  token: "",
  profile: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        token: action.payload.token,
        profile: action.payload.profile
      };
    default:
      return state;
  }
};
