import { 
  HashRouter, 
  Routes, 
  Route, 
} from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Page404 from "./pages/Page404";

import "./style.css";


export default function App() 
{
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </HashRouter>
  );
};


