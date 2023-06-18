import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // Ajoutez d'autres reducers ici si nécessaire
});

export default rootReducer;
