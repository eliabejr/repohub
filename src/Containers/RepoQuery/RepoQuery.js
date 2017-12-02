import React from 'react'
import { Text, View } from 'react-native';
import { graphql, ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'

const styles = {
  outer: { paddingTop: 32, paddingLeft: 10, paddingRight: 10 },
  wrapper: { height: 40, marginBottom: 15, flex: 1, flexDirection: 'row' },
  header: { fontSize: 20 },
  subtextWrapper: { flex: 1, flexDirection: 'row' },
  votes: { color: '#999' },
}

export var username  = "eliabejr"

function RepoList({ data: { loading, data } }) {

  if (loading) {
    return <Text style={styles.outer}>Loading Repositories</Text>;
  } else{
    let list = data.user.repositories;
    return list
    // repositories...
  }

}

export default graphql(gql`
  query GetRepoByUser {
   user(login: "${username}") {
     repositories (last: 10) {
       nodes {
         name
       }
     }
   }
  }
`)(RepoList);
