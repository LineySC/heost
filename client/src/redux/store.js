import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import Logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Utilisez le stockage local du navigateur par défaut

import { getClients } from "./actions/clientAction";
import { getAllBusiness } from "./actions/project/projectAction";
import { getStock } from "./actions/stockAction";

const persistConfig = {
  key: "root", // La clé de stockage
  storage, // Spécifiez le stockage à utiliser
  // Ajoutez d'autres options si nécessaire
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, Logger))
);

// Obtenez une référence du persistor
const persistor = persistStore(store);

store.dispatch(getClients);
store.dispatch(getAllBusiness);
store.dispatch(getStock);

export { store, persistor };
