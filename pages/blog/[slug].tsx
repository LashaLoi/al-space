import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageWrapper } from '@components/PageWrapper'
import Post from '@modules/Blog/Post'

const PostPage: NextPage = () => {
  const { query } = useRouter()
  const { slug } = query

  return (
    <PageWrapper className="sm:pt-[80px] pt-0">
      <Post slug={slug as string} />
    </PageWrapper>
  )
}

export default PostPage
