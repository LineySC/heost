import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import { defaultSystem } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { persistor, store } from "./store/store";
import AppRoutes from "./routes/AppRoutes.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { DrawerProvider } from "./context/DrawerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <ChakraProvider value={defaultSystem}>
        <DrawerProvider>
          <ColorModeProvider>
            <AppRoutes />
          </ColorModeProvider>
        </DrawerProvider>
      </ChakraProvider>
    </PersistGate>
  </ReduxProvider>
);
