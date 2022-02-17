import React, { memo } from 'react'
import { Post } from './Post'

const Articles: React.FC = () => {
  return (
    <div className="mt-12 h-[1000px] w-full">
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default memo(Articles)
