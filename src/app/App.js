import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/Header/Header";
import Routes from "../app/routes";

import "./App.css";

const App = () => {
  return (
    <div className="app-root">
      <BrowserRouter>
        <Routes />
        <Header />
      </BrowserRouter>
    </div>
  );
};

export default App;
