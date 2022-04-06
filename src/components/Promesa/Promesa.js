import {arrAnte} from "../Modelos"

export const Promesa=()=>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(
                arrAnte
            )
        }, 0)
    })
}