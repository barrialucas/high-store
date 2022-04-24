import {motion} from "framer-motion";
import {campArr} from "./Camp1";

export const CamperaItem=()=>{
  
  return(
    <motion.div className="slider-container">
      <motion.div className="slider" drag="x" dragConstraints={{right:0, left:-3650}}>
        {campArr.map(foto=>(
          <motion.div className="item">
            <img src={foto} alt="asd" />
          </motion.div>
        ))}
      </motion.div>
    
    </motion.div>
  )
}