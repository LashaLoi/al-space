import React from 'react'
import { FadeIn } from '@components/FadeIn'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft } from '../icons'

interface BlogHeaderProps {
  handleBack: () => void
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({ handleBack }) => (
  <>
    <div className="flex justify-between items-center">
      <FadeIn delay={0.2}>
        <div className="sm:text-4xl text-2xl">BLOG</div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <button
          onClick={handleBack}
          className="text-slate-400 flex items-center"
        >
          <ArrowLeft /> Back
        </button>
      </FadeIn>
    </div>
    <motion.div
      initial="init"
      animate="out"
      variants={{
        init: {
          width: '0%',
        },
        out: {
          width: '100%',
        },
      }}
      transition={{
        delay: 0.4,
        duration: 0.4,
      }}
      className="w-full bg-red-400 h-[1px] mt-2"
    />
    <FadeIn delay={0.3}>
      <div className="mt-6 flex items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="sm:mr-8 mr-4 cursor-pointer flex justify-center align-center next-image-wrapper"
        >
          <Image
            placeholder="blur"
            blurDataURL="/assets/images/iam.jpeg"
            width={80}
            height={80}
            src="/assets/images/iam.jpeg"
            alt="iam"
          />
        </motion.div>
        <div className="sm:text-lg text-base">
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
  </>
)
