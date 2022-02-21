import React, { memo, useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BlogPost } from '@graphql/index'
import { useAudio } from '@hooks/useAudio'
import { Article } from './Article'

interface ArticlesProps {
  posts: Array<BlogPost>
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
}

const Articles: React.FC<ArticlesProps> = ({ posts }) => {
  const playSound = useAudio('/assets/paper.wav')

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-12 w-full"
    >
      {posts.map((post) => (
        <Article key={post.id} {...post} playSound={playSound} />
      ))}
    </motion.div>
  )
}

export default memo(Articles)
