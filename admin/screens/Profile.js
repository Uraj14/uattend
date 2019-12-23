import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { GoogleSigninButton} from 'react-native-google-signin'

class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
    }
})

export default Profile;