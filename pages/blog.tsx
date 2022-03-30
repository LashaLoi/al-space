import type { NextPage } from 'next'
import { PageWrapper } from '@components/PageWrapper'
import { BlogPostsQuery } from '@graphql/schema'
import { BlogPost } from '@graphql/index'
import { client } from '@graphql/client'

import Blog from '@modules/Blog'

const variants = {
  hidden: { opacity: 0, y: -200 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -200 },
}

interface StaticProps {
  blogPosts: Array<BlogPost>
}

const BlogPage: NextPage<StaticProps> = ({ blogPosts }) => {
  return (
    <PageWrapper variants={variants} className="sm:pt-[80px] pt-0">
      <Blog posts={blogPosts} />
    </PageWrapper>
  )
}

export const getStaticProps = async () => {
  const { blogPosts }: StaticProps = await client.request(BlogPostsQuery)

  return {
    props: {
      blogPosts,
    },
  }
}

export default BlogPage
