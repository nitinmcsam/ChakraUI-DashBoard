import React from "react";
import ReactDOM from "react-dom/client";
import Maincomponant from "./MainComponant/Maincomponant";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Maincomponant />
    </ChakraProvider>
  </React.StrictMode>
);
