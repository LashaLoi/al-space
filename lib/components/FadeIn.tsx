import React from 'react'
import { animated, useSpring, config } from 'react-spring'

type FadeInProps = {
  delay?: number
  className?: string
  stop?: boolean
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 600,
  className,
  stop = false,
}) => {
  const props = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay,
    config: config.molasses,
  })

  return (
    <animated.div style={stop ? undefined : props} className={className}>
      {children}
    </animated.div>
  )
}
