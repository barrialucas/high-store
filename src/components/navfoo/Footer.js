import React from "react"
import getnet from "../../img/icons/getnet.png"
import mercadopago from "../../img/icons/mercadopago.png"
import usdt from "../../img/icons/usdt.png"

import logoSello from "../../img/logosello.png"


export const Footer=()=>{
    return(
        <div>

<footer>
        <div className="row container-fluid footer">

            <div className="col-12 col-md-6 col-lg-6 col-xl-7 col-xxl-7">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-xxl-12 d-flex justify-content-center titulo__pago">
                        <h2 className="medio__texto">Podes pagar con:</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1 col-xxl-1"></div>
                    <div className="col-12 col-lg-5 col-xxl-5 d-flex justify-content-center flex-column">
                        <h3 className="primer__renglon col-lg-12">Efectivo / Transferencia  -6%</h3>
                        <img src={getnet} alt="" width="260px" className="get"/>
                        <img src={mercadopago} alt="" width="220px" class="mercadopago" className="get"/> 
                    </div>
                    <div className="col-12 col-lg-5 col-xxl-5 d-flex  flex-column medios__segunda">
                        <img className="primer__renglon get" src="https://www.lemon.me/_next/static/media/logo.a45bf621.svg" alt="" width="270px" />
                        <div className="d-flex flex-row align-items-center usdtmedia">
                            <img src={usdt} alt="" width="54px"/>
                            <h3 className="usdt">USDT</h3>
                        </div>
                    </div>
                    <div className="col-lg-1 col-xxl-1"></div>
                </div>
                
            </div>


            <div className="col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
            <div className="col-12 col-md-5 col-lg-5 col-xl-4 col-xxl-4 ultimo">
                <div className="row d-flex align-items-center footer__derecha">
                    <div className="col-4 col-md-4 col-lg-4 col-xl-5 col-xxl-5 d-flex justify-content-center">
                        <img src={logoSello} alt=""/>
                    </div>
                    <div className="footer__iconos col-8 col-md-8 col-lg-8 col-xl-7 col-xxl-7">
                        <div className="d-flex flex-row high align-items-center">
                            <a href="https://bit.ly/3rK52Ve" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                            <a href="https://bit.ly/3rK52Ve" target="_blank" rel="noopener noreferrer">high.store_9410</a>
                        </div>
                        <div class="d-flex flex-row whats">
                            <a className="logo-wsp" href="https://bit.ly/3xUEch3" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
                            <a className="texto-wsp" href="https://bit.ly/3xUEch3" target="_blank" rel="noopener noreferrer">2901580214</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row container-fluid footer__derechos">
            <div class="col-12 col-xl-12 col-xxl-12"><h4>2021-2022. Todos los derechos reservados. HighStore. Ushuaia, Tierra del Fuego, Argentina. #DiseñoArgentino</h4></div>
        </div>
    </footer>

        </div>
    )
}