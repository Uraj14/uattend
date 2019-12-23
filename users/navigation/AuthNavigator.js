import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import {  
    createSwitchNavigator,  
    createAppContainer,  
  } from 'react-navigation';
import {SafeAreaView, ScrollView, Image,View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'  
import { Platform, StatusBar } from "react-native";

import React from 'react'
import Welcome from '../screens/Welcome'
import Dashboard from '../screens/Dashboard'
import LogIn from '../screens/LogIn'
import Profile from '../screens/Profile'
import AboutUs from '../screens/AboutUs' 
import Success from '../screens/Success'


  
const AuthNavigator = createStackNavigator({
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    },
    LogIn: {
      screen: LogIn,
      navigationOptions: {
        header: null
      }
    },
    Success:{
        screen: Success,
        navigationOptions: {
            header: null
        }
    }
  });
  
export default createAppContainer(AuthNavigator);  
  