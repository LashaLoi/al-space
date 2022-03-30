import React, { memo, useCallback } from 'react'
import { BlogPost } from '@graphql/index'
import { useRouter } from 'next/router'
import { FadeIn } from 'lib/components/FadeIn'
import { BlogHeader } from './Header'
import Articles from './Articles'

interface BlogProps {
  posts: Array<BlogPost>
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const router = useRouter()
  const handleBack = useCallback(() => router.back(), [])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:w-2/4 sm:w-5/6 w-full sm:p-0 p-4">
        <BlogHeader handleBack={handleBack} />
        <FadeIn delay={0.4}>
          <Articles posts={posts} />
        </FadeIn>
      </div>
    </div>
  )
}

export default memo(Blog)
