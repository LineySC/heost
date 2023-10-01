import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { clientReducer } from "./client.reducer";
import { projectReducer } from "./project/projectReducer";

export default combineReducers({
  auth: authReducer,
  client: clientReducer,
  business: projectReducer,
  // Ajoutez d'autres reducers ici si nécessaire
});
