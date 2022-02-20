import React, { memo, useCallback } from 'react'

interface PostProps {
  slug: string
}

const Post: React.FC<PostProps> = ({ slug }) => {
  return (
    <div className="a flex flex-col justify-center items-center">
      <div className="lg:lg:w-2/5 md:w-3/5 sm:w-5/6 w-full sm:p-0 p-4">
        <div className="sm:text-3xl text-xl text-red-400 font-bold cursor-pointer">
          {slug}
        </div>
      </div>
    </div>
  )
}

export default memo(Post)
