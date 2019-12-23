import React from 'react'
import { Image, Button } from 'react-native'

class AboutUs extends React.Component {
    static navigationOptions = {
      drawerLabel: 'AboutUs',
     
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }

  export default AboutUs