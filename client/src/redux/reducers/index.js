import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { clientReducer } from "./client.reducer";
import { projectReducer } from "./project/projectReducer";
import { employeeReducer } from "./employeeReducer";
import { stockReducer } from "./stockReducer";

export default combineReducers({
  auth: authReducer,
  client: clientReducer,
  business: projectReducer,
  employee: employeeReducer,
  stock: stockReducer,
  // Ajoutez d'autres reducers ici si nécessaire
});
