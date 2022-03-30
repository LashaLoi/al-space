import React, { memo, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { BlogPost } from '@graphql/index'
import { ArrowLeft } from '../icons'
import { HeartIcon, HeartFilledIcon } from '@modules/Blog/Post/icons'
import { client } from '@graphql/client'
import { UpdateBlogPostLikes } from '@graphql/schema'
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

    // try {
    //   const data = await client.request(
    //     UpdateBlogPostLikes,
    //     {
    //       slug,
    //       likes: likes + 1,
    //     },
    //     {
    //       'x-token':
    //         'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDUwODk4MDEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NreWJjejg3OTE5aDUwMXoyMjhqNjhncGwvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMjAzYTMyNjItNGZkZi00NTZjLTk3ZGYtZWJiZmJlYWFiMGNiIiwianRpIjoiY2t6cXJ6cXVsNmg0ajAxejM0bGc0MHl6YiJ9.h9XsFk-I58ywk9GG9Ncahn3cWUKFLElGoINNP6V_LnttZOpNTKZlXKl-Hu8XnRr83TEiCoB6vZ3x_PtXbZy7VvnZ31nEQcc0LU2LlShwXC3bTOPDUsIejaLMGvAkdr18_oezrM1GLuHDxWMZVSDUFbSllbsn4PpjMWNTFlQIs3zqDyF87vYQfpNEGrZGwINN-eOpsHYCVZ456QIAL-T-61I_z-6OCwW9DkLxMxAqsMlBQ6Frsmo0zbN55TB5Tk-BmK1V-RpC7HUsa5xSGp8YnZvTg7VL99sLlLVOA7Ac2jSEEOfdK3mT4l1BXvZQHqHnQV3PkZS7CaAIrBsYXDJIFYvPYXbonaiwv6MM0NfdIBxkKnZzXxW26KFjNCYN-r_5u3KRtNtWz0M9ud7byP_J67x1ICLI1IRwjUUpubp8zSq9HHzO57-A-v6w7n6gd_0ugaeQcn6GZqdDJbsfivEoCi_8BAY-dkoZ2snwxMvPFtiU4LBg3rFeBaQGv8klqgpdjOWEe8wzRlgys_ayd7kNiWIVXxxp_IcGAoimchixgDvTF-bseW9Gsb75Xvl_4YPGFLqNkZeUOM04io7boKRKcB-kTZ_4tcDnBbcfejtYhXcdIzxilbM7HLrIZ3HC5WqUb-fKhdRDnt8UFvs0NBUn_XtqHvSf8TS5B2n2neoU5Qg',
    //     }
    //   )
    //
    //   console.log({ data })
    // } catch (error) {
    //   console.log({ error })
    // }
  }, [slug, likes, liked])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:w-2/4 sm:w-5/6 w-full sm:p-0 p-4">
        <div className="mb-2 flex justify-between items-center sm:text-3xl text-lg text-emerald-400 font-bold cursor-pointer">
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
      </div>
      {/*<div className="mt-10 transition-all">*/}
      {/*  <div className="flex align-center flex-col justify-center text-center">*/}
      {/*    <div className="cursor-pointer hover:scale-110" onClick={updateLikes}>*/}
      {/*      {liked ? <HeartFilledIcon /> : <HeartIcon />}*/}
      {/*    </div>*/}
      {/*    <div className="">{likes}</div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default memo(Post)
