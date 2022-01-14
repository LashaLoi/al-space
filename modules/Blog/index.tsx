import React, { memo, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { animated, useSpring } from 'react-spring'

import { FadeIn } from 'lib/components/FadeIn'

const ArrawLeft: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
)

const Blog: React.FC = () => {
  const router = useRouter()
  const style = useSpring({
    from: {
      width: '0%',
    },
    to: {
      width: '100%',
    },
    delay: 400,
  })

  const handleBack = useCallback(router.back, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="lg:lg:w-2/5 md:w-3/5 sm:w-5/6 w-full sm:p-0 p-4">
        <div className="flex justify-between items-center">
          <FadeIn delay={200}>
            <div className="sm:text-4xl text-2xl">BLOG</div>
          </FadeIn>
          <FadeIn delay={300}>
            <button
              onClick={handleBack}
              className="text-slate-400 flex items-center"
            >
              <ArrawLeft /> Back
            </button>
          </FadeIn>
        </div>
        <animated.div
          style={style}
          className="w-full bg-red-400 h-[1px] mt-2"
        />
        <FadeIn delay={300}>
          <div className="mt-6 flex items-center">
            <div className="sm:mr-8 mr-4">
              <Image
                placeholder="blur"
                blurDataURL="/assets/images/iam.jpeg"
                width={65}
                height={65}
                src="/assets/images/iam.jpeg"
                alt="iam"
                className="rounded-full"
              />
            </div>
            <div className="sm:text-lg text-sm">
              <div className="">
                Personal blog by{' '}
                <a
                  href="https://github.com/LashaLoi"
                  className="cursor-pointer text-slate-400 underline underline-offset-2"
                >
                  Aliaksei Loi
                </a>
                .
              </div>
              <div className="">I explain with words and code.</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default memo(Blog)
