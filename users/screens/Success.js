import React, { Component } from 'react'
import { Text,View } from 'react-native'
import { dispatch } from '@rematch/core'
import { connect } from 'react-redux'


class Success extends Component{

    render(){
        return(
            <View>
                <Text onPress={()=>{dispatch.count.add()}}>{this.props.count}</Text>
            </View>
        )
    }
}

export default connect(({count})=> ({count}))(Success)

