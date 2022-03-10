import React, { memo, useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { BlogPost } from '@graphql/index'
import { ArrowLeft } from '../icons'

interface PostProps extends Omit<BlogPost, 'body'> {
  body: MDXRemoteSerializeResult
}

const Post: React.FC<PostProps> = ({ title, body, read, updatedAt }) => {
  const router = useRouter()
  const handleBack = useCallback(() => router.back(), [])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="lg:lg:w-2/5 md:w-3/5 sm:w-5/6 w-full sm:p-0 p-4">
        <div className="sm:mb-8 mb-4 flex justify-between items-center sm:text-3xl text-lg text-emerald-400 font-bold cursor-pointer">
          {title}
          <button
            onClick={handleBack}
            className="text-slate-400 sm:text-base text-sm flex items-center"
          >
            <ArrowLeft /> Back
          </button>
        </div>
        <article className="prose dark:prose-invert">
          <MDXRemote {...body} />
        </article>
      </div>
    </div>
  )
}

export default memo(Post)
