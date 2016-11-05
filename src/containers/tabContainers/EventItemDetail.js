import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import ButtonComponent from 'react-native-button-component';

import Icon from 'react-native-vector-icons/FontAwesome';
const university = (<Icon name="university" size={13} color="black" />)
const creditCard = (<Icon name="credit-card" size={13} color="black" />)
const calendar = (<Icon name="calendar" size={13} color="black" />)
const clock = (<Icon name="clock-o" size={13} color="black" />)
const user = (<Icon name="user" size={13} color="black" />)
const location = (<Icon name="location-arrow" size={13} color="black" />)
const signIn = (<Icon name="sign-in" size={26} color="black" />)

const deviceWidth = require('Dimensions').get('window').width;
const deviceHeight = require('Dimensions').get('window').height;

class EventItemDetail extends Component {
  render() {
    const { address, artwork, cost, date, logo,
            title, organizer, note, time } = this.props;
    const { centerEverything, container, imageContainer, contentContainer, titleContainer,
      actionButtonContainer, actionButtonRow, actionButtonItem, addressActionButtonItem, noteContainer,
      titleStyle, imageStyle, textStyle } = styles;

    return(
      <View style={[centerEverything, container]}>
        <View style={imageContainer}>
          <Image
            style={imageStyle}
            source={{uri: artwork}}
          />
        </View>
        <View style={[contentContainer]}>
          <View style={[centerEverything, titleContainer]}>
            <Text style={titleStyle}>{title}</Text>
          </View>

          <View style={[actionButtonContainer]}>
            <View style={[actionButtonRow]}>
              <View style={[actionButtonItem]}>
                {university}
                <Text style={textStyle}>  {organizer}</Text>
              </View>
              <View style={[actionButtonItem]}>
                {user}
                <Text style={textStyle}>  0</Text>
              </View>
            </View>
            <View style={[actionButtonRow]}>
              <View style={[actionButtonItem]}>
                {calendar}
                <Text style={textStyle}>  {date}</Text>
              </View>
              <View style={[actionButtonItem]}>
                {clock}
                <Text style={textStyle}>  {time}</Text>
              </View>
            </View>
            <View style={[actionButtonRow]}>
              <View style={[actionButtonItem]}>
                {creditCard}
                <Text style={textStyle}>  USD {cost}</Text>
              </View>
              <View style={[actionButtonItem]}>
                <View>
                  {location}
                </View>
                <View style={{ flex: 1, flexWrap: 'wrap' }}>
                  <Text style={textStyle}>  {address}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[noteContainer]}>
            <Text>{note}</Text>
          </View>
        </View>
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
  imageContainer: {
    // position: 'absolute',
    top: 0
  },
  contentContainer: {
    flex: 1,
    // alignItems: 'center'
  },
  titleContainer: {
    flex: 1,
    width: deviceWidth,
  },
  actionButtonContainer: {
    flex: 3,
    flexDirection: 'column'
  },
  actionButtonRow: {
    flexDirection: 'row'
  },
  actionButtonItem: {
    flex: 5,
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 10,
  },
  addressActionButtonItem: {
    flex: 5,
    padding: 5,
    paddingLeft: 10,
  },
  noteContainer: {
    flex: 6,
    padding: 10
  },
  titleStyle: {
    fontSize: 26,
    letterSpacing: 1,
    fontFamily: 'HelveticaNeue-Medium',
  },
  imageStyle: {
    width: deviceWidth,
    height: 150
  },
  textStyle: {
    fontSize: 12,
  }
}

export default EventItemDetail;
