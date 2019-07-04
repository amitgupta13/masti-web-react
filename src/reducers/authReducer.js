import { SIGN_UP, LOGOUT } from "../actions/types";

const INITIAL_STATE = {
  token: null,
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
    case LOGOUT:
      return {
        ...state,
        token: null,
        profile: {}
      };
    default:
      return state;
  }
};
