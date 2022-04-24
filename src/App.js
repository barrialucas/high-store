import "./css/style.css";
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
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

        <Route path="/rayban" element={<ItemsContainer/>}/>
        <Route path="/northface" element={<Camperas/>}/>
        <Route path="/drift" element={<Sillas/>}/>

        <Route path="*" element={ <Navigate to="/"/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
    
  );
}

