import React, { Component } from 'react'
import { Button } from 'react-native'

//Components
import AppWrapper from './src/Components/AppWrapper'
import WelcomeTitle from './src/Components/WelcomeTitle'
import Instructions from './src/Components/Instructions'
import Logo from './src/Components/Logo'
import Username from './src/Components/Username'

const handlePress = () => false;

export default props => (

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
        placeholder="Search Profile"
      />
      <Button
        onPress = {handlePress}
        title = "Search"
      />

    </AppWrapper>
)
