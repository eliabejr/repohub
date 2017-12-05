import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { graphql, ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'

export var userLogin = "eliabejr"

export const GetRepoByUser = gql`
query GetRepoByUser{
 user(login: "${userLogin}") {
   repositories (last: 10) {
     nodes {
       name
     }
   }
 }
}
`

const repositoryList = graphql(GetRepoByUser, {
  props: ({ data }) => {

    // Loading state
    if (data.loading) {
      return { loading: true };
    }

    // Error state
    if (data.error) {
      return (<Text>Sorry, we couldn't load repositories.</Text>)
    }

    // OK state
    return (
      { data }
    );
  },
})

class Repository extends Component {

    render() {
      return ( // Mapping repository by name node
        <View>
          {data.user.repositories.nodes.map(repo => (
            <Text>{repo.name}</Text>
          ))}
        </View>
      )
    }
  }

const ListRepos = repositoryList(Repository);
export default ListRepos;
