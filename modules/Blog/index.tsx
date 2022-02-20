import React, { memo, useCallback } from 'react'
import { BlogPost } from '@graphql/index'
import { useRouter } from 'next/router'
import { FadeIn } from 'lib/components/FadeIn'
import { BlogHeader } from './Header'
import Articles from './Posts'

interface BlogProps {
  posts: Array<BlogPost>
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const router = useRouter()
  const handleBack = useCallback(() => router.back(), [])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="lg:lg:w-2/5 md:w-3/5 sm:w-5/6 w-full sm:p-0 p-4">
        <BlogHeader handleBack={handleBack} />
        <FadeIn delay={0.4}>
          <Articles posts={posts} />
        </FadeIn>
      </div>
    </div>
  )
}

export default memo(Blog)
