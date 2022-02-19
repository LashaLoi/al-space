import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  init: {
    opacity: 0,
  },
  out: {
    opacity: 1,
  },
}

interface FadeInProps {
  delay?: number
  className?: string
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0.6,
  className,
}) => (
  <motion.div
    initial="init"
    animate="out"
    variants={variants}
    transition={{
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
)
