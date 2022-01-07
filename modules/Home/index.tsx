import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import { a, animated, useSpring, useTrail } from 'react-spring'

import { FadeIn } from '@components/FadeIn'

import { useTheme, useThemeApi } from 'lib/context/theme'
import { useGlobalState, useGlobalStateApi } from 'lib/context/global'

import { useUnMount } from 'lib/hooks/useUnMount'

// const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
//   const items = React.Children.toArray(children)
//   const trail = useTrail(items.length, {
//     config: { mass: 5, tension: 2000, friction: 200 },
//     opacity: open ? 1 : 0,
//     x: open ? 0 : 20,
//     height: open ? 110 : 0,
//     from: { opacity: 0, x: 20, height: 0 },
//     delay: 400,
//   })
//   return (
//     <div>
//       {trail.map(({ height, ...style }, index) => (
//         <a.div key={index} className="trailsText" style={style}>
//           <a.div style={{ height }}>{items[index]}</a.div>
//         </a.div>
//       ))}
//     </div>
//   )
// }
//
// const App = () => {
//   const [open, set] = useState(true)
//   return (
//     <div className="container" onClick={() => set((state) => !state)}>
//       <Trail open={open}>
//         <span>Aliaksei</span>
//         <span>Loi</span>
//         <span>The best</span>
//         <span>Software Engineer</span>
//       </Trail>
//     </div>
//   )
// }

export const Home: React.FC = () => {
  const { isHomeMounted } = useGlobalState()
  const { addHomePage } = useGlobalStateApi()

  useUnMount(addHomePage)

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
    <div className="flex h-screen">
      <FadeIn
        delay={800}
        stop={isHomeMounted}
        className="w-full h-full object-cover"
      >
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
      <div className="absolute w-full h-full bg-black dark:opacity-80 opacity-50" />
      <div className="absolute flex flex-col justify-center items-center w-full h-full text-white ">
        <div>
          <FadeIn stop={isHomeMounted}>
            <h1 className="text-sm">
              Aliaksei <span className="text-slate-400">Loi</span>
            </h1>
          </FadeIn>
          <FadeIn stop={isHomeMounted} delay={1000}>
            <div className="text-3xl">Software Engineer</div>
          </FadeIn>
          <animated.div
            style={isHomeMounted ? undefined : style}
            className="mt-2 h-[0.5px] bg-red-400"
          />
        </div>
      </div>
    </div>
  )
}
