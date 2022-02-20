import React from 'react'
import { motion } from 'framer-motion'
import { BlogPost } from '@graphql/index'
import { formatDate } from '@utils/index'
import { MDXRemote } from 'next-mdx-remote'

interface PostProps extends BlogPost {}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export const Post: React.FC<PostProps> = ({
  description,
  read,
  title,
  updatedAt,
  body,
}) => {
  const date = formatDate(updatedAt)

  return (
    <motion.div variants={item} className="mb-14">
      <div className="sm:text-3xl text-xl text-red-400 font-bold cursor-pointer">
        {title}
      </div>
      <div className="flex align-center mt-2 sm:text-sm text-xs">
        <div className="mr-2">{date}</div>
        <div>-</div>
        <div className="ml-2">{read} min read</div>
      </div>
      <p className="sm:text-lg text-base mt-2">{description}</p>
    </motion.div>
  )
}
