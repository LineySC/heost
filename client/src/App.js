import Router from "./_config/Router";

import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import theme from "./_theme/ThemeChakraUI";

import Layout from "./_components/layout/Layout";
function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Router />
        </Layout>
      </ChakraProvider>
      <ToastContainer
        position="center"
        autoClose={100}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={true}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
