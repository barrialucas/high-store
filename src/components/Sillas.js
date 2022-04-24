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
                    <div className="col-xxl-4 btn__silla d-flex justify-content-center"><a href="https://bit.ly/39dG1eB"><button>Contacto</button></a></div>
                    <div className="col-xxl-4"></div>
                </div>


            </seccion>
        </div>
    )
}