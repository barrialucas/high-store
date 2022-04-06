import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {Promesa} from "../Promesa/Promesa"
import {Items} from "./Items"

export const ItemsContainer=()=>{
    const [arrAnte, setArrAnte] = useState([])
    const [cargando, setCargando]=useState(false)

    const { marcaId } = useParams()

    useEffect(()=>{
        setCargando(true)

        Promesa()
        .then((resultado)=>{
            if (marcaId){
                setArrAnte(resultado.filter((item)=>item.marca === marcaId))
            }else{
                setArrAnte(resultado)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setCargando(false)
        })
        
    },[marcaId])
    
    return(
        <>
        {
            cargando
            ? <h2>cargando</h2>
            : <Items arrAnte={arrAnte}/> 
        }
        </>  
    )
}