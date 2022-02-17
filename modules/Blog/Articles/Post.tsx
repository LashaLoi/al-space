import React, { memo } from 'react'

interface PostProps {}

export const PostComponent: React.FC<PostProps> = () => {
  return (
    <div className="mb-14">
      <div className="text-3xl text-red-400 font-bold">
        npm audit: Broken by Design
      </div>
      <div className="flex align-center  mt-2 text-sm">
        <div className="mr-2">July 7, 2021</div>
        <div>-</div>
        <div className="ml-2">14 min read</div>
      </div>
      <p className="text-lg mt-1">
        Found 99 vulnerabilities (84 moderately irrelevant, 15 highly
        irrelevant)
      </p>
    </div>
  )
}

export const Post = memo(PostComponent)
