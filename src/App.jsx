// src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import './index.css'

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
