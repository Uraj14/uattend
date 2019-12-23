import React, { Component } from 'react'
import { View, Image, StyleSheet, Button } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import App from '../App';
import Dashboard from './Dashboard';
import Success from './Success'



class Welcome extends Component{

    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false
        }
        this.handle = this.handle.bind(this);
    
    }
    
    handle(){
        // this.setState(prevState => ({
        //     isAuthenticated: !prevState.isAuthenticated
        // }))
        this.props.navigation.navigate('LogIn')
    }

    componentDidMount(){
       
    }
    

    render(){
        return(
            !this.state.isAuthenticated ?
            <View style={styles.container}>
                <Image
                    style={{width: 500, height: 400, position: 'relative',
                    top: 150,left: '0%', justifyContent: 'center',}}
                    source={require('../assests/logo1.png')}
                />
                <View style={styles.bottomView}>
                 <Button onPress={()=> this.handle()} title="Enter" /> 
                 </View>
            </View>
            :
            <AppNavigator/>
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