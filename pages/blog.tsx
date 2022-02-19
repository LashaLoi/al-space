import type { NextPage } from 'next'
import { PageWrapper } from '@components/PageWrapper'
import { request } from 'graphql-request'
import { BlogPostsQuery } from '@graphql/schema'
import { BlogPost } from '@graphql/index'

import Blog from '@modules/Blog'

const variants = {
  hidden: { opacity: 0, y: -200 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -200 },
}

interface StaticProps {
  blogPosts: Array<BlogPost>
}

const BlogPage: NextPage<StaticProps> = ({ blogPosts }) => (
  <PageWrapper variants={variants} className="sm:pt-[80px] pt-0">
    <Blog posts={blogPosts} />
  </PageWrapper>
)

export const getStaticProps = async () => {
  const { blogPosts }: StaticProps = await request(
    'https://api-eu-central-1.graphcms.com/v2/ckybcz87919h501z228j68gpl/master',
    BlogPostsQuery
  )

  return {
    props: {
      blogPosts,
    },
  }
}

export default BlogPage
