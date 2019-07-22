import { SIGN_IN_SUCCESFULL, SIGN_IN_REJECTED } from "../assets/actionTypes";
import { auth } from "../firebase";

export const signInSuccesful = userAuth => {
  return { type: SIGN_IN_SUCCESFULL, payload: { user: userAuth } };
};

export const signInRejected = () => {
  return { type: SIGN_IN_REJECTED };
};

export const thunkSignIn = () => {
  return dispatch => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        await dispatch(signInSuccesful(userAuth));
      } else {
        await dispatch(signInRejected());
      }
    });
  };
};
