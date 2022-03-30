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
      likes
      updatedAt
    }
  }
`

export const UpdateBlogPostLikes = gql`
  mutation UpdateBlogPostLikes($slug: String!, $likes: Int!) {
    updateBlogPost(where: { slug: $slug }, data: { likes: $likes }) {
      likes
    }
    publishBlogPost(where: { slug: $slug }) {
      id
    }
  }
`
