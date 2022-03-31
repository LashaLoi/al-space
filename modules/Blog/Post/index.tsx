import React, { memo, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { BlogPost } from '@graphql/index'
import { ArrowLeft } from '../icons'
import { formatDate } from '@utils/index'

interface PostProps extends Omit<BlogPost, 'body'> {
  body: MDXRemoteSerializeResult
}

const Post: React.FC<PostProps> = ({
  title,
  body,
  read,
  updatedAt,
  likes,
  slug,
}) => {
  const router = useRouter()
  const date = formatDate(updatedAt)
  const handleBack = useCallback(() => router.back(), [router])

  const [liked, setLiked] = useState(false)

  const updateLikes = useCallback(async () => {
    setLiked(true)
  }, [slug, likes])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:w-2/4 sm:w-5/6 w-full sm:p-0 p-4">
        <div className="mb-2 flex justify-between items-center sm:text-3xl text-lg text-emerald-400 font-bold">
          {title}
          <button
            onClick={handleBack}
            className="text-slate-400 sm:text-base text-sm flex items-center"
          >
            <ArrowLeft /> Back
          </button>
        </div>
        <div className="flex align-center mt-2 sm:text-sm text-xs text-slate-400 mb-10">
          <div className="mr-2">{date}</div>
          <div>-</div>
          <div className="ml-2">{read} min read</div>
        </div>

        <div className="sm:dark:bg-stone-800 sm:bg-slate-100 sm:p-10 rounded-lg sm:shadow-2xl">
          <div className="prose dark:prose-invert">
            <MDXRemote {...body} />
          </div>
        </div>
        <div className="mt-10 text-center w-full px-4">
          <button
            className="text-slate-400 hover:text-emerald-400 transition-all"
            onClick={updateLikes}
          >
            Subscribe to updates {likes}
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(Post)
