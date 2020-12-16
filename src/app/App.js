import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routes from "../app/routes";
import theme from "./theme";

import "./App.css";

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  return (
    <div className="app-root">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
            tabValue={tabValue}
            setTabValue={setTabValue}
            selectedMenuItem={selectedMenuItem}
            setSelectedMenuItem={setSelectedMenuItem}
          />
          <Routes />
          <Footer
            tabValue={tabValue}
            setTabValue={setTabValue}
            selectedMenuItem={selectedMenuItem}
            setSelectedMenuItem={setSelectedMenuItem}
          />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
