import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(
  process.env.NEXT_APP_GRAPHQL_ENDPOINT ?? ''
)
