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

export var username = "eliabejr"

function RepoList({ data: { loading, posts } }) {
  if (loading) {
    return <Text style={styles.outer}>Loading</Text>;
  } else {
    return (
      <View style={styles.outer}>
        {user.map(user => (
          <View key={user.id} style={styles.wrapper}>
            <View>
              <Text style={styles.header}>{user.repositories.nodes.name}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

export default graphql(gql`
  query GetRepoByUser(${username}: String!) {
   user(login: ${username}) {
     repositories (last: 10) {
       nodes {
         name
       }
     }
   }
  }
`)(RepoList);
