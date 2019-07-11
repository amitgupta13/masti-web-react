import {
  SIGN_UP,
  LOGOUT,
  SIGN_IN,
  CHECK_AUTH,
  PROFILE
} from "../actions/types";

const INITIAL_STATE = {
  token: null,
  profile: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        token: action.payload
      };
    case SIGN_IN:
      return {
        ...state,
        token: action.payload
      };
    case CHECK_AUTH:
      return {
        ...state,
        token: action.payload
      };
    case PROFILE:
      return {
        ...state,
        profile: action.payload
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
