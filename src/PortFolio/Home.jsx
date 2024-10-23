import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react"; 
import './Css/main.css';
import { Navbar22 } from "./Navbar";
import { HomePage } from './HomePage';
import { About } from './About';
import { Contact } from './Contact';
import { Project } from './Project';
import { Links } from './Links'; 

export function Home() {
  return ( 
    <div className="mainpage">
      <BrowserRouter> 
        <Navbar22 />
        <Routes> 
          <Route index element={<Navigate to="/homePage" />} /> 
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/links" element={<Links />}></Route> 
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
