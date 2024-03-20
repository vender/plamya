"use client"

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

// Prevents instant page opening
function FrozenRouter(props) {
    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}


export default function FramerMotionWrapp({children}){
    
    let pathname = usePathname();

    return(
        <>
            <AnimatePresence mode={'wait'}>
                <motion.div 
                    key={pathname}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 1.5, ease: [0.27,0.94,0.48,1.0]}}
                >
                    <FrozenRouter>{children}</FrozenRouter>
                </motion.div>    
            </AnimatePresence> 
        </>
    )
}