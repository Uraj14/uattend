import React, { Component } from 'react'
import { View, Image, StyleSheet, Button } from 'react-native';



class Welcome extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={{width: 500, height: 400, position: 'relative',
                    top: 150,left: '0%', justifyContent: 'center',}}
                    source={require('../assests/logo1.png')}
                />
                <View style={styles.bottomView}>
                 <Button onPress={()=> this.props.navigation.navigate('Dashboard')} title="Login" /> 
                 </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#e3e3e3',
        alignItems: 'center',
        
    },
    bottomView:{
        width: '100%', 
        height: 50, 
        // backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        top: 100
      },

})

export default Welcome