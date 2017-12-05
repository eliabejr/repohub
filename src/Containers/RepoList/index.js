import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'

// Components
import ListRepos from './ListRepos';

// Variables
import {login} from './githubLogin';
import { username, password } from './credentials'

// Apollo
const networkInterface = createNetworkInterface('https://api.github.com/graphql')

networkInterface.use([
  {
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }
      req.options.headers.authorization = `Bearer ${TOKEN}`
      next()
    }
  }
])

const client = new ApolloClient({
  networkInterface
})

export default class RepoList extends Component {

  static navigationOptions = {
    title: "Repositories List",
  }

  constructor () {
    super()
    this.state = { login: false }
  }

  componentDidMount() {
    if (username === 'xxx') {
      throw new Error('Please create a credentials.js with your username and password.');
    }
    login(username, password).then((token) => {
      TOKEN = token;
      this.setState({ login: true });
    });
  }

  render() {
    const { navigate } = this.props.navigation

    if (!this.state.login) {
      return (<Text>Login...</Text>)
    } else {
      return (
        <ApolloProvider client={client}>
          <ListRepos />
        </ApolloProvider>
      )
    }
  }
}
