import { 
  HashRouter, 
  Routes, 
  Route, 
} from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Form from "./pages/Form";
import Page404 from "./pages/Page404";
import Table from "./pages/Table";

import "./style.css";


export default function App() 
{
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-create-form" element={<Form />} />
        <Route path="/employee-list-table" element={<Table />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </HashRouter>
  );
};


