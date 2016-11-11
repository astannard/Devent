import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

class JoinedEvent extends Component {
  render() {
    const { centerEverything, container } = styles;
    return (
      <View style={[centerEverything, container]}>
        <Text>JoinedEvent</Text>
      </View>
    )
  }
}

const styles = {
  centerEverything: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
    marginTop: 64
  },
}
export default JoinedEvent;
