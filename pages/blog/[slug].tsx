import type { NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { PageWrapper } from '@components/PageWrapper'
import Post from '@modules/Blog/Post'
import { BlogPostsQuery, BlogPostQuery } from '@graphql/schema'
import { BlogPost } from '@graphql/index'
import { client } from '@graphql/client'
// @ts-expect-error: not typed
import remarkPrism from 'remark-prism'

interface StaticProps {
  post: BlogPost & { body: MDXRemoteSerializeResult }
}

const PostPage: NextPage<StaticProps> = ({ post }) => (
  <PageWrapper className="sm:py-[140px] pt-0 pb-20">
    <Post {...post} />
  </PageWrapper>
)

export const getStaticPaths = async () => {
  const { blogPosts }: { blogPosts: Array<BlogPost> } = await client.request(
    BlogPostsQuery
  )

  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const { blogPost }: { blogPost: BlogPost } = await client.request(
    BlogPostQuery,
    {
      slug: params.slug,
    }
  )

  const mdxSource = await serialize(blogPost.body, {
    mdxOptions: {
      remarkPlugins: [remarkPrism],
    },
  })

  return {
    props: {
      post: {
        ...blogPost,
        body: mdxSource,
      },
    },
  }
}

export default PostPage
