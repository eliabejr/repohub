import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'

// Components
import RepoQuery from './RepoQuery';

const networkInterface = createNetworkInterface('https://api.github.com/graphql');
const client = new ApolloClient();

const RepoList = () => (
  <ApolloProvider client={client}>
    <RepoQuery />
  </ApolloProvider>
);

export default RepoList;
