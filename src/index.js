import React from "react";
import ReactDOM from "react-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";

import App from "./App";
import { customLocalStorageManager } from "utils/customLocalStorageManager";
import theme from "theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme} colorModeManager={customLocalStorageManager}>
    <HashRouter>
      <App />
    </HashRouter>
  </ChakraProvider>,
);
