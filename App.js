import React, { Component } from 'react';
import { StyleProvider, Container, Header, Content, Button, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';
import styled from 'styled-components';
if (__DEV__) {
  require('react-devtools');
}

// Screen Imports:
import SplashScreen from './components/splash/SplashScreen';
import CameraScreen from './components/camera/CameraScreen';
import ProcessingScreen from './components/processing/ProcessingScreen';
import NoTowScreen from './components/notow/NoTowScreen';
import TowScreen from './components/tow/TowScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
import LocationsScreen from './components/locations/LocationsScreen';

const RootStack = StackNavigator({
  Splash: {
    screen: SplashScreen,
  },
  Camera: {
    screen: CameraScreen
  },
  Processing: {
    screen: ProcessingScreen
  },
  NoTow: {
    screen: NoTowScreen
  },
  Tow: {
    screen: TowScreen
  },
  Dashboard: {
    screen: DashboardScreen
  },
  Locations: {
    screen: LocationsScreen
  }
});

export default class App extends Component {
  state = {
    ready: false
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ ready: true });
  }

  render() {
    if (!this.state.ready) {
      return false;
    }

    return <RootStack />;
  }
}
