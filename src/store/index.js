import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));
