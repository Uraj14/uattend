import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';

import Welcome from '../screens/Welcome';
import Browse from '../screens/Browse';
import Dashboard from '../screens/Dashboard';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import Logout from '../screens/Logout';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Forgot from '../screens/Forgot';

const AppNavigator = createStackNavigator({
    Welcome: { screen: Welcome },
    // Browse: { screen: Browse },
    Dashboard: { screen: Dashboard },
    // Explore: { screen: Explore },
    Login: { screen: Login },
    // Logout: { screen: Logout },
    // Notification: { screen: Notification },
    Profile: { screen: Profile },
    // Forgot: { screen: Forgot }
},{
    defaultNavigationOptions:{
        headerStyle: {},
        headerBackImage: <Image />,
        headerBackTitle: null,
        headerLeftContainerStyle: {},
        headerRightContainerStyle: {},
        cardStyle: { backgroundColor: 'black' },
    }
});

export default createAppContainer(AppNavigator);