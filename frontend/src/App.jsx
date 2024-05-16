import React from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import './index.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
