import React, { Component } from 'react'
import { View, Text, StyleSheet, Button,AppRegistry } from 'react-native'; 
 

class Profile extends Component {  
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
      };
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>WelcomeScreen</Text>  
                <Button  
                    title="Go to DashboardScreen"  
                    onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}  
                />  
                 
            </View>  
        );  
    }  
}

export default Profile