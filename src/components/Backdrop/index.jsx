import { motion } from "framer-motion";import { modal } from "framer-motion";

import React from 'react'

export default function Backdrop({children, onClick}) {
    return (
        <motion.div
            className="backdrop"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
          
        </motion.div>
    );
}
