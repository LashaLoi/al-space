import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BlogPost } from '@graphql/index'
import { formatDate } from '@utils/index'

interface PostProps extends BlogPost {
  playSound: () => void
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export const Post: React.FC<PostProps> = ({
  description,
  read,
  title,
  updatedAt,
  slug,
  playSound,
}) => {
  const date = formatDate(updatedAt)

  return (
    <motion.div variants={item} className="mb-14">
      <Link href={`/blog/${slug}`}>
        <div
          onClick={playSound}
          className="sm:text-3xl text-xl text-emerald-400 font-bold cursor-pointer"
        >
          {title}
        </div>
      </Link>
      <div className="flex align-center mt-2 sm:text-sm text-xs">
        <div className="mr-2">{date}</div>
        <div>-</div>
        <div className="ml-2">{read} min read</div>
      </div>
      <p className="sm:text-lg text-base mt-2">{description}</p>
    </motion.div>
  )
}
