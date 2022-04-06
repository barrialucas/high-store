import React from "react";
import {Lentes} from "./Lentes";

export const Items=({arrAnte})=>{
    return(
    <section id="anteojos" className="container-fluid">
                <div className="fondo__lentes">
                    <h2>Lentes</h2>
                </div>
                <div className="row conocer">
                    <div className="col-xxl-1"></div>
                    <div className="col-12 col-xxl-10 d-flex justify-content-center align-items-start conocer__row">
                        <h3>Conocer mas modelos por encargo</h3>
                        <a href="https://api.whatsapp.com/send?phone=542901580214&text=Hola,%20me%20interesa%20informaci%C3%B3n%20sobre%20m%C3%A1s%20modelos%20de%20lentes."><button>Contacto</button></a>
                    </div>
                    <div className="col-xxl-1"></div>
                </div>

                <div className="row stock">
                    <div className="col-xxl-1"></div>
                    <div className="col-xxl-10 d-flex justify-content-center align-items-center">
                        <i className="fas fa-angle-down"></i>
                        <h3>Productos en Stock</h3>
                        <i className="fas fa-angle-down"></i>
                    </div>
                    <div className="col-xxl-1"></div>
                </div>

                <div className="row">
                    <div className="col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
                    <div className="col-md-10 col-lg-10 col-xl-10 col-xxl-10 ">
                        
                            <div className=" card-body row d-flex justify-content-center flex-row items my-4 ">
                                {arrAnte.map((producto)=> <Lentes {...producto}/>)}
                            </div>
                        
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
                    
                </div>
            </section>
    )
}