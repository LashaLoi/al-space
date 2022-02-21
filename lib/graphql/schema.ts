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

export const BlogPostQuery = gql`
  query BlogPost($slug: String!) {
    blogPost(where: { slug: $slug }) {
      title
      updatedAt
      body
      read
      slug
      updatedAt
    }
  }
`
