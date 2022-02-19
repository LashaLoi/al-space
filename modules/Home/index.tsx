import React from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from '@components/FadeIn'

export const Home: React.FC = () => (
  <div className="flex h-screen">
    <div className="w-full h-full object-cover">
      <video
        autoPlay
        controls={false}
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src="/assets/videos/home.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="absolute w-full h-full bg-black dark:opacity-60 opacity-50" />
    <div className="absolute flex flex-col justify-center items-center w-full h-full text-white ">
      <div>
        <FadeIn>
          <h1 className="text-sm">
            Aliaksei <span className="text-slate-400">Loi</span>
          </h1>
        </FadeIn>
        <FadeIn delay={1}>
          <div className="text-3xl">Software Engineer</div>
        </FadeIn>
        <motion.div
          initial="init"
          animate="out"
          variants={{
            init: {
              width: 0,
            },
            out: {
              width: 200,
            },
          }}
          transition={{
            delay: 1.2,
          }}
          className="mt-2 h-[0.5px] bg-red-400"
        />
      </div>
    </div>
  </div>
)
