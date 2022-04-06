import React from "react";

export const Sillas =()=>{
    return(
        <div className="container-fluid">
           <seccion>
                <div className="fondo__silla">
                    <h2>Sillas Drift</h2>
                </div>

                <div className="row pedidos ">
                    <div className="col-xxl-12 d-flex justify-content-center">
                        <div className="pedidos__texto"><h3>Pedidos por encargo </h3></div>
                    </div>
                </div>


                <div className="row sillas__modelos">
                    <div className="col-xxl-1"></div>
                    <div className="col-xxl-10 d-flex justify-content-center">
                        <div className="l-container">
                            <div className="b-game-card">
                                <div className="b-game-card__cover sillaimg1"></div>
                            </div>
                            <div className="b-game-card">
                                <div className="b-game-card__cover sillaimg2"></div>
                            </div>
                            <div className="b-game-card">
                                <div className="b-game-card__cover sillaimg3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-1"></div>
                </div>

                <div className="row boton">
                    <div className="col-xxl-4"></div>
                    <div className="col-xxl-4 btn__silla d-flex justify-content-center"><a href="https://api.whatsapp.com/send?phone=542901580214&text=Hola,%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sillas."><button>Contacto</button></a></div>
                    <div className="col-xxl-4"></div>
                </div>


            </seccion>
        </div>
    )
}