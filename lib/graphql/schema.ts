import { gql } from 'graphql-request'

export const BlogPostsQuery = gql`
  query BlogPosts {
    blogPosts {
      id
      read
      title
      description
      updatedAt
      body
      slug
    }
  }
`
