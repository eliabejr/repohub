import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'

// Components
import RepoQuery from './RepoQuery';

const client = new ApolloClient({
    networkInterface: createNetworkInterface('https://api.github.com/graphql', {
    credentials: 'same-origin',
    }),
    shouldBatch: false
    });

const RepoList = () => (
  <ApolloProvider client={client}>
    <RepoQuery />
  </ApolloProvider>
);

export default RepoList;
