import React from 'react'
import Button from "@material-ui/core/Button";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({isToggled, setToggle, children}) => {
    return (
        <AnimatePresence>
            {isToggled &&
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={{
                        position: "fixed",
                        top: "30px",
                        left: "50%",
                        transform: "translate3d(-50%, 0, 0)"

                    }}
                >
                    <motion.div
                       initial={{rotateY: -50, y: 80}}
                       animate={{rotateY: 0, y: 0}}
                       exit={{scale: 0.1, y: 150}} 
                    >
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={() => setToggle(false)}
                        >
                            Close
                        </Button>
                        {children}
                    </motion.div>
                    
                    
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default Modal
