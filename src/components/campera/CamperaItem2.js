import {motion} from "framer-motion";
import {campArr2} from "./Camp1";

export const CamperaItem2=()=>{
  
  return(
    <motion.div className="slider-container">
      <motion.div className="slider" drag="x" dragConstraints={{right:0, left:-2420}}>
        {campArr2.map(foto=>(
          <motion.div className="item">
            <img src={foto} alt="" />
          </motion.div>
        ))}
      </motion.div>
    
    </motion.div>
  )
}