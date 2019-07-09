import { SIGN_UP, LOGOUT, SIGN_IN, CHECK_AUTH } from "../actions/types";

const INITIAL_STATE = {
  token: null
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
    case LOGOUT:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};
