import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button,AppRegistry } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';    
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import {  
  createSwitchNavigator,  
  createAppContainer,  
} from 'react-navigation';
import AppNavigator from './navigation/AppNavigator'
import AuthNavigator from './navigation/AuthNavigator'
import Welcome from './screens/Welcome'

export default class App extends Component {  
  constructor(props){
    super(props);
    this.state = {
        isAuthenticated: false
    }
    this.handle = this.handle.bind(this);

}

handle(){
    this.setState(prevState => ({
        isAuthenticated: !prevState.Authenticated
    }))
}
    render() {  
        return (
          !this.state.isAuthenticated? 
                    <AuthNavigator/>
                    :
                    <AppNavigator/> 
        );  
    }  
}  
  