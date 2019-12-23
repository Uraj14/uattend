import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native';


class Loading extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={{width: 300, height: 300, alignContent: 'center', alignItems: 'center' }}
                    source={require('../assests/logo1.png')}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        position: 'absolute',
        top: '25%',
        left: '14%',
        backgroundColor: '#E3E3E3',
        alignItems: 'center',
        alignContent: 'center',
    }
})

export default Loading