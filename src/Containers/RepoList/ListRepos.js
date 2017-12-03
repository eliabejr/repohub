import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { graphql, ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'

export var username  = "eliabejr"

class ListRepos extends Component {

  render() {

    //Loading Message

    if (this.props.GetRepoByUser && this.props.GetRepoByUser.loading) {
      return (<View><Text>Loading repositories</Text></View>)
    }

    //Error Verification

    if (this.props.GetRepoByUser && this.props.GetRepoByUser.error) {
      return (<View><Text>We couldn't load user repositories</Text></View>)
    }

    const userRepos = this.props.GetRepoByUser.data

    return (
      <View>
        {userRepos.map(user => (
          <Text>{user.repositories.nodes.name}</Text>
        ))}
      </View>
    )
  }

}

export const ALL_REPOS_QUERY = gql`
query GetRepoByUser{
 user(login: "${username}") {
   repositories (last: 10) {
     nodes {
       name
     }
   }
 }
}
`

export default graphql(ALL_REPOS_QUERY, { name: 'GetRepoByUser',})(ListRepos)
