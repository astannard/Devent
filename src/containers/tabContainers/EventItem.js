import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';
const trophy = (<Icon name="trophy" size={13} color="black" />)
const creditCard = (<Icon name="credit-card" size={13} color="black" />)
const calendar = (<Icon name="calendar" size={13} color="black" />)
const signIn = (<Icon name="sign-in" size={22} color="black" />)

const deviceWidth = require('Dimensions').get('window').width;
const deviceHeight = require('Dimensions').get('window').height;

class EventItem extends Component {
  render() {
    const { address, artwork, cost, date,
            title, organizer, note, time } = this.props.event;
    const { centerEverything, container, imageContainer, contentContainer, textContainer, textDetailContainer,
            imageStyle, titleStyle, textStyle } = styles;
    return(
      <TouchableWithoutFeedback onPress={() => Actions.eventItemDetail(this.props.event)}>
        <View style={container}>
          <View style={imageContainer}>
            <Image
              source={{uri: artwork}}
              style={imageStyle} />
          </View>
          <View style={contentContainer}>
            <View style={textContainer}>
              <Text style={titleStyle}>{title}</Text>
              <View style={textDetailContainer}>
                {trophy}
                <Text style={textStyle}>  {organizer}</Text>
              </View>
              <View style={textDetailContainer}>
                {calendar}
                <Text style={textStyle}>  {date}       </Text>
                {creditCard}
                <Text style={textStyle}>  USD {cost}</Text>
              </View>
            </View>
            <View style={{ paddingRight: 15 }}>
              {signIn}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  centerEverything: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    // flex: 1,
    width: deviceWidth*0.9,
    height: 200,
    flexDirection: 'column',
    margin: 4,
    backgroundColor: '#FFF',
    borderRadius: 2,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  imageContainer: {
    flex: 7,
  },
  contentContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    flexDirection: 'column',
    padding: 5,
    paddingLeft: 10
  },
  textDetailContainer: {
    flexDirection: 'row',
    paddingBottom: 2
  },
  imageStyle: {
    width: null,
    height: 140,
  },
  titleStyle: {
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Medium'
  },
  textStyle: {
    fontSize: 10
  }
}

export default EventItem;
