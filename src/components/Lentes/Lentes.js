import React from "react";

export const Lentes =({id, marca,modelo,precio,color,img,hover})=>{
    
    const mensaje="https://api.whatsapp.com/send?phone=542901580214&text=Hola%20deseo%20mas%20informaci%C3%B3n%20acerca%20del%20modelo" +modelo +"%20//" + color;
    let precio15=(precio*85)/100
    return(
        <div className="card-body product-card3 col-xxl-4 productos-impresos cards p-3">
                                <img src={img}  class="card-img-top img" alt={id}/>
                                <h4 className="card-title d-flex justify-content-center titulo-card">{marca.toUpperCase()} {modelo}</h4>
                                <h5 className="color d-flex justify-content-center">{color}</h5>
                                <div className="d-flex justify-content-evenly precios">
                                    <h5 className="precio card-text"><span className="precioHtml">${precio}</span></h5>
                                    <h5 className="newPrice"><span className="off15">15%OFF </span>${precio15}</h5>
                                </div>
                                
                                <div className="d-flex justify-content-center">
                                    <a class="card-btn d-flex justify-content-center" href={mensaje}>Contactarse</a>
                                </div>
                            </div>
    )
}