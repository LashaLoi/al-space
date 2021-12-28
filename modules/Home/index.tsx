import React from 'react'
import { animated, useSpring } from 'react-spring'

import { FadeIn } from '@components/FadeIn'

export const Home: React.FC = () => {
  const style = useSpring({
    from: {
      width: 0,
    },
    to: {
      width: 200,
    },
    delay: 1200,
  })

  return (
    <div className="flex flex-col h-screen">
      <FadeIn delay={2000} className="w-full h-full object-cover">
        <video
          autoPlay
          controls={false}
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/home.mp4" type="video/mp4" />
        </video>
      </FadeIn>
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="absolute flex flex-col justify-center items-center w-full h-full">
        <div></div>
        <div>
          <FadeIn>
            <h1 className="text-white text-sm">Aliaksei Loi</h1>
          </FadeIn>
          <FadeIn delay={1000}>
            <div className="text-3xl text-white">Software Engineer</div>
          </FadeIn>
          <animated.div style={style} className="mt-2 h-[0.5px] bg-red-400" />
        </div>
      </div>
    </div>
  )
}
