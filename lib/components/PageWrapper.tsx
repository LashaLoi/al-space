import React, { HTMLAttributes } from 'react'
import { motion, Variant } from 'framer-motion'

interface PageWrapperProps extends HTMLAttributes<HTMLDivElement> {
  variants?: {
    hidden: Variant
    enter: Variant
    exit: Variant
  }
}

const defaultVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  variants,
  children,
  className,
}) => (
  <motion.div
    variants={variants ?? defaultVariants}
    initial="hidden"
    animate="enter"
    exit="exit"
    transition={{ duration: 0.4 }}
    className={className}
  >
    {children}
  </motion.div>
)
