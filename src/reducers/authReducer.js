import { SIGN_IN_SUCCESFULL, SIGN_IN_REJECTED } from "../assets/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { loggedIn: true, user: user }
  : { loggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESFULL: {
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return { ...state, loggedIn: true, user: action.payload.user };
    }
    case SIGN_IN_REJECTED: {
      localStorage.removeItem("user");
      return { ...state, loggedIn: false, user: null };
    }
    default:
      return state;
  }
};

export default authReducer;
