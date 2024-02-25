import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
/**
 *
 * MUI
 */

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./_theme/Theme";

/**
 * Redux
 */

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import { BrowserRouter } from "react-router-dom";
import Sidebar from "./_components/sidebar/Sidebar";
import { PersistGate } from "redux-persist/integration/react";

const preloadedState = window.__PRELOADED_STATE__;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store} serverState={preloadedState}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
