/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './navigation/AppNavigator';
import Welcome from './screens/Welcome'

const images = [
  require('./assests/logo.png'),
  require('./assests/logo1.png'),
];


class App extends React.Component{

  state = {
    isLoadingComplete: false
  }

  handleResourcesAsync = async() => {

  }

  render(){
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen){
      return(
        <View>
          <Welcome/>
        </View>
      );
    }else{
      return(
        <AppNavigator/>
      );
    }
  }

}

export default App;