import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Header from "../components/Header/Header";
import Routes from "../app/routes";
import theme from "./theme";

import "./App.css";

const App = () => {
  return (
    <div className="app-root">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
