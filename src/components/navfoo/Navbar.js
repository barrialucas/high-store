import React from "react"
import logo from "../../img/logoprincipal.png"
import {Link} from "react-router-dom"


export const Navbar =()=>{
    return(
        <div>
            
            <header className="fixed-top">
                <nav className="navbar">
            <div className="container-fluid row">
                <div className="col-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3 d-flex justify-content-center align-items center">
                    <Link to="/"><img className="logo" src={logo} alt="" height="80" width="140"/></Link>
                </div>

                <div className="col-12 col-md-10 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center nav_acomodo">
                    <ul className="navbar-nav flex-row">
                        
                        <Link to="/rayban" style={{textDecoration:"none"}}><li className="nav-item li__items"><span id="btn__anteojos">Rayban</span></li></Link>
                        
                        <Link to="/drift" style={{textDecoration:"none"}}><li className="nav-item li__items"><span id="btn__sillas">Drift</span></li></Link>
                    </ul>
                </div>

                <div className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-3 d-flex justify-content-center align-items center">
                    <a href="https://bit.ly/3rK52Ve" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://bit.ly/3xUEch3" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </nav>
    </header>

        </div>
    )
}