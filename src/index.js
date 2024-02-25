import React from "react";
import ReactDom from 'react-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; //due to this all bootstrap 5 components working 
import Apps from "./Apps";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <>
  <BrowserRouter>
  <Apps/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
)


