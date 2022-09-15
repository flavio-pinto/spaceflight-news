import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark text-light">
        <Header />
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
