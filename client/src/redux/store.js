import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import logger from "redux-logger";

/**
 * For Developpement
 */
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
