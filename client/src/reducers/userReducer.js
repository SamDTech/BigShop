import { LOGGED_IN_USER, LOGOUT } from "../constants/userConstants";

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return action.payload;

    case LOGOUT:
      return null;

    default:
      return state;
  }
};
