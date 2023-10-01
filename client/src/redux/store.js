import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import Logger from "redux-logger";

import { getClients } from "./actions/clientAction";
/**
 * For Developpement
 */
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, Logger))
);

store.dispatch(getClients);

export default store;
