import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Browse extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    HI
                </Text>
                <Button
                    title="Add some friends"
                    onPress={() =>
                    this.props.navigation.navigate('Dashboard')
                        }
                />
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

export default Browse