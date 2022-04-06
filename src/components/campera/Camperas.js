import React from "react";
import { CamperaItem } from "./CamperaItem";
import { CamperaItem2 } from "./CamperaItem2";

import medidaMCon from "../../img/camperas/medidasM-con.png"
import medidaFCon from "../../img/camperas/medidasF-con.png"

import medidaMSin from "../../img/camperas/medidasM-SIN.png"
import medidaFSin from "../../img/camperas/medidasF-SIN.png"


export const Camperas =()=>{
    return(
    <div>
            <section id="camperas" className="container-fluid">
            <div className="fondo__camperas">
                <h2>Camperas</h2>
                
            </div>

            <div className="row pedidos">
                <div className="col-xxl-12 d-flex justify-content-center pedidos__espacio">
                    <div className="pedidos__texto"><h3>Pedidos por encargo </h3>
                    <h4>Próximamente en stock</h4></div>
                    
                </div>
            </div>

            <div className="row ">
            <div className="col-lg-1 col-xl-1col-xxl-1"></div>
                <div className="col-lg-12 col-xl-12 col-xxl-10 capucha">
                    <section className="product"> 
                        <h2 className="product-category d-flex justify-content-center"><span className="camp">Camperas CON capucha </span>| Talles S-M-L-Xl-XXL | Masculino Femenino | <span class="camp">$24.900,00</span></h2>          
                        <div className="product-container" >
                            <CamperaItem></CamperaItem>

                        </div>
                    </section>
                </div>
                <div className="col-lg-1 col-xl-1col-xxl-1"></div>
            </div>

            <div className="row medidas-capucha">
                <div className="col-lg-1 col-xl-1 col-xxl-1"></div>
                <div className="col-lg-10 col-xl-10 col-xxl-10">
                    <div className="row">
                        <div className="col-lg-12 col-xl-6 col-xxl-6 medida1 d-flex justify-content-center align-items-center flex-column">
                            <img src={medidaMCon} alt=""/>
                            <h3 className="">Medida de talles Masculinos CON capucha</h3>
                        </div>
                        <div className="col-lg-12 col-lg-1 col-xl-6 col-xxl-6 medida2 d-flex justify-content-center align-items-center flex-column">
                            <img src={medidaFCon} alt=""/>
                            <h3 className="">Medida de talles Femeninos CON capucha</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 col-xl-1col-xxl-1"></div>
            </div>

            <div className="row">
            <div className="col-lg-1 col-xl-1col-xxl-1"></div>
                <div className="col-lg-12 col-xl-12 col-xxl-10 capucha2">
                    <section className="product"> 
                        <h2 className="product-category d-flex justify-content-center"><span className="camp">Camperas SIN capucha </span>| Talles S-M-L-Xl-XXL | Masculino Femenino | <span class="camp">$22.900,00</span></h2>
                        <div className="product-container2">
                            <CamperaItem2></CamperaItem2>
                        </div>
                    </section>
                </div>
                <div className="col-lg-1 col-xl-1col-xxl-1"></div>
            </div>
            <div className="row medidas-sincapucha">
                <div className="col-lg-1 col-xl-1 col-xxl-1"></div>
                <div className="col-lg-10 col-xl-10 col-xxl-10">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-xl-6 col-xxl-6 medida1 d-flex justify-content-center align-items-center flex-column">
                            <img src={medidaMSin} alt=""/>
                            <h3 className="">Medida de talles Masculinos SIN capucha</h3>
                        </div>
                        <div className="col-12 col-lg-12 col-xl-6 col-xxl-6 medida2 d-flex justify-content-center align-items-center flex-column">
                            <img src={medidaFSin} alt=""/>
                            <h3 className="">Medida de talles Femeninos SIN capucha</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 col-xl-1 col-xxl-1"></div>
            </div>
            

        </section>
        </div>
    )
}