import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { BlogPost } from '@graphql/index'
import { Post } from './Post'

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

const Articles: React.FC<ArticlesProps> = ({ posts }) => (
  <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    className="mt-12 w-full"
  >
    {posts.map((post) => (
      <Post key={post.id} {...post} />
    ))}
  </motion.div>
)

export default memo(Articles)
