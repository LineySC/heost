import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import authReducer from "@/features/auth/AuthSlice";
//import userReducer from "@/features/auth/"

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  //user: userReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactive les erreurs liées à redux-persist
    }),
});

export const persistor = persistStore(store);
