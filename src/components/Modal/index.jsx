import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }

    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Modal = ({ handleClose, text }) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button className="closeButton" onClick={handleClose}>Close</button>
                
                <h3>Hi, this is Anisha👋 <br /></h3>
                  <h2>I’m currently spending my time on exploring framer. <br />
                Follow me if you like Manchester United 😜</h2>  
                

            </motion.div>
        </Backdrop>
        
    );
};

export default Modal;