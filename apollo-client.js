import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const client = new ApolloClient({
  uri: 'https://localhost:44341/graphql', // Your Umbraco GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;