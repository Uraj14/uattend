import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import {  
    createSwitchNavigator,  
    createAppContainer,  
  } from 'react-navigation';
import {SafeAreaView, ScrollView, Image,View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'  
import React from 'react'
import Welcome from '../screens/Welcome'
import Dashboard from '../screens/Dashboard'
import Login from '../screens/LogIn'
import Profile from '../screens/Profile'
import AboutUs from '../screens/AboutUs'

const CustomDrawerComponent =(props) => {
    return (
        <SafeAreaView style= {{flex: 1}}>
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#e4e4e4' }}>
        <Image source={require('../assests/logo.png')} style={{width:150,height:150,borderRadius:20}}/>
        </View>
        <ScrollView>
            <DrawerItems  {...props } />
        </ScrollView>
    </SafeAreaView>
    )
}

  
const DashboardStackNavigator = createStackNavigator(  
    {  
        DashboardNavigator: Dashboard
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            )  
        };  
        }  
    }  
);  
  
const WelcomeStackNavigator = createStackNavigator(  
    {  
        WelcomeNavigator: Welcome
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);  

const AboutUsStackNavigator = createStackNavigator(
    {
        AboutUsNavigator: AboutUs
    },{
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        },
    }
)



const ProfileStackNavigator = createStackNavigator(
    {
        ProfileNavigator: Profile
    },
    {
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        },
    }
)
const AppDrawerNavigator = createDrawerNavigator({  
    Dashboard: {  
        screen: DashboardStackNavigator  
    },    
    Profile:{
        screen: ProfileStackNavigator
    },
    AboutUs: {
        screen: AboutUsStackNavigator
    }
},
{
    contentComponent: CustomDrawerComponent
}      
);  
  
const AppNavigator = createSwitchNavigator({  
    Dashboard: { screen: AppDrawerNavigator },  
    Welcome: { screen: Welcome }, 
    Profile: { screen: Profile },
    AboutUs: { screen: AboutUs }
  
},{
    drawerBackgroundColor: '#e3e3e3',

});  
  
export default createAppContainer(AppNavigator);  
  