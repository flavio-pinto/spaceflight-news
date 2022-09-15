import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark text-light">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
