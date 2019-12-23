import React, { Component } from 'react'
import { Text, View ,StyleSheet, Button ,TextInput } from 'react-native'

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container} >

                <View style={{marginTop: '70%'}}>
                <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Email"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {this.handleEmail}/>

               <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}/>
                </View>

              <View style={styles.bottomView}>
              <Button style={{ alignItems: 'center',justifyContent: 'center'}} onPress={()=> this.props.navigation.navigate('Dashboard')} title="Login" /> 
              </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
       paddingTop: 23,
       height: '100%',
       width: '100%'
    },
    input: {
       margin: 8,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    },
    bottomView:{
        width: '100%', 
        height: 50, 
        // backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        top: "70%"
      },
 })