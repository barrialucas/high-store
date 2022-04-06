import React from "react"
import {Link} from "react-router-dom"

export const Home=()=>{
    return(
        <div>
        <section id="home" class="container-fluid">
            <div className="row ">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 home__fondo1">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4"></div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center texto__home flex-column">
                            <h2>Lentes</h2>
                            <h4>Conocé la colección rayban</h4>
                            <Link to="productos/rayban"><span href="lentes.html">Ver más</span></Link>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4"></div>
                    </div>
                </div>
            </div>


            <div className="row  seccion2">
                <div className="col-xl-1 col-xxl-1"></div>
                <div className="col-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4 d-flex  justify-content-center flex-column texto__north">
                    <h2>Camperas</h2>
                    <h4>Nuestras camperas Northface</h4>
                    <Link to="productos/camperas"><span>Ver más</span></Link><hr/>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
                <div className="col-12 col-md-6 col-lg-7 col-xl-6 col-xxl-5 d-flex  justify-content-center fotos__north">
                    <div className="north1"></div>
                    <div className="north2"></div>
                </div>
                <div className="col-xl-1 col-xxl-1"></div>
            </div>


            <div className="row  seccion3 ">
                <div className="col-xl-1 col-xxl-1"></div>
                <div className="col-12 col-md-6 col-lg-7 col-xl-6 col-xxl-5 d-flex  justify-content-center align-items-center fotos__north">
                    <div className="silla2"></div>
                    <div className="silla1"></div>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
                <div className="col-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4 d-flex  justify-content-center flex-column texto__sillas">
                    <h2>Sillas Gamer</h2>
                    <h4>Línea Drift</h4>
                    <Link to="productos/sillas"><span>Ver más</span></Link><hr/>
                </div>
                <div className="col-xl-1 col-xxl-1"></div>
            </div>

        
        </section>
        </div>
    );
};