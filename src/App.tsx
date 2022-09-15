import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NewsList from "./components/NewsList";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark text-light">
        <Header />
        <Routes>
          <Route path="/" element={<NewsList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
