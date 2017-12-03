import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './App';
import RepoList from './src/Containers/RepoList';

const App = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  RepoList: { screen: RepoList },
});

AppRegistry.registerComponent('repohub', () => App);
