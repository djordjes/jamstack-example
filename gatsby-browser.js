import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  //uri: "https://graphql.fauna.com/graphql",
  uri: "graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.FAUNADB_SERVER_SECRET}`,
  },
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
