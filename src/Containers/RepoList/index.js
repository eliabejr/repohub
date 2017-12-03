import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'

// Components
import ListRepos from './ListRepos';

const client = new ApolloClient({
        networkInterface: createNetworkInterface('https://api.github.com/graphql')
      });

export default class RepoList extends Component {

  static navigationOptions = {
    title: "Repositories List",
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ApolloProvider client={client}>
        <ListRepos />
      </ApolloProvider>
    )
  }
}
