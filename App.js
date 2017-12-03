import React, { Component } from 'react'
import { Button } from 'react-native'
import { StackNavigator } from 'react-navigation';

//Components
import AppWrapper from './src/Components/AppWrapper'
import WelcomeTitle from './src/Components/WelcomeTitle'
import Instructions from './src/Components/Instructions'
import Logo from './src/Components/Logo'
import Username from './src/Components/Username'
import RepoList from './src/Containers/RepoList'

//Variables
import { username } from './src/Containers/RepoList/ListRepos'

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: "RepoHub",
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

        <AppWrapper>
          <Logo source={require('./assets/img/gh-logo.png')}/>

          <WelcomeTitle>
            Welcome to RepoHub!
          </WelcomeTitle>

          <Instructions>
            Filter github repositories by username.
          </Instructions>

          <Instructions>
            To get started, type the username on search field and press the search button.
          </Instructions>

          <Username
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            onSubmitEditing={() =>navigate('RepoList')}
  					value={username}
            placeholder="Search Profile"
          />
          <Button
            onPress={() =>navigate('RepoList')}
            title = "Search"
          />

        </AppWrapper>
    )
  }
}
