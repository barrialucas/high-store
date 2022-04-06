import React from "react";
import "./css/style.css";

import { BrowserRouter, Routes, Route} from "react-router-dom";

import {Navbar} from "./components/navfoo/Navbar"
import {Footer} from "./components/navfoo/Footer"
import {Home} from "./components/Home"
import {Camperas} from "./components/campera/Camperas"
import {Sillas} from "./components/Sillas"
import {ItemsContainer} from "./components/Lentes/ItemsContainer"



export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>


        <Route path="productos/rayban" element={<ItemsContainer/>}/>
        <Route path="productos/camperas" element={<Camperas/>}/>
        <Route path="productos/sillas" element={<Sillas/>}/>

      </Routes>



      <Footer/>
    </BrowserRouter>
    
  );
}

