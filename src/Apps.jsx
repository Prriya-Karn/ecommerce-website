import React from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import SinglePage from "./Components/SinglePage.jsx/SinglePage";

const Apps = ()=>{
    return(
        <>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path = "/home" element={<Home/>}/>
        <Route exact path = "/about" element={<About/>}/>
        <Route exact path = "/contact" element = {<Contact/>}/>
        <Route exact path = "/singlePage/:id" element = {<SinglePage/>}/>
        
        <Route path="*" element = {<div>error page</div>}/>
        </Routes>
        
        </>
    )
}

export default Apps;
