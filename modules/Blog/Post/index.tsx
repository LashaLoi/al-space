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
  const handleBack = useCallback(() => router.back(), [router])

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="lg:w-2/5 md:w-3/5 sm:w-5/6 w-full sm:p-0 p-4">
          <div className="sm:mb-8 mb-4 flex justify-between items-center sm:text-3xl text-lg text-emerald-400 font-bold cursor-pointer">
            {title}
            <button
              onClick={handleBack}
              className="text-slate-400 sm:text-base text-sm flex items-center"
            >
              <ArrowLeft /> Back
            </button>
          </div>

          <div className="sm:dark:bg-stone-800 sm:bg-slate-100 sm:p-5 rounded-lg">
            <article className="prose dark:prose-invert">
              <MDXRemote {...body} />
            </article>
          </div>
        </div>
      </div>
      {/*<div className="fixed right-10 top-[200px]">*/}
      {/*  <button onClick={() => window.print()}>Print</button>*/}
      {/*</div>*/}
    </>
  )
}

export default memo(Post)
