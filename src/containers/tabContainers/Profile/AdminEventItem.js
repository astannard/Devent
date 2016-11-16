import _ from 'lodash';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from './../../../actions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const check = (<MaterialIcon name="check" size={26} color="green" />)
const lock = (<MaterialIcon name="lock-outline" size={26} color="orange" />)
const close = (<MaterialIcon name="close" size={26} color="red" />)
const signIn = (<MaterialIcon name="launch" size={26} color="#333333" />)

const deviceWidth = require('Dimensions').get('window').width;
const deviceHeight = require('Dimensions').get('window').height;

class AdminEventItem extends Component {

  renderApproveText() {
    if (this.props.event.approved) {
      return <Text style={styles.approvedTextStyle}>Approval Status: True</Text>;
    } else {
      return <Text style={styles.approvedTextStyle}>Approval Status: False</Text>;
    }
  }

  renderApproveButton() {
    if (this.props.event.approved) {
      return;
    } else {
      return (
        <View>
          <TouchableWithoutFeedback onPress={() => Actions.eventItemDetail()}>
            {check}
          </TouchableWithoutFeedback>
        </View>
      )
    }
  }

  render() {
    const { address, artwork, cost, date, joinedUserCount,
            title, organizer, note, time, approved } = this.props.event;

    const userCount = _.size(this.props.event.joinedUser);

    const { skeleton, centerEverything, container, imageContainer, contentContainer, textContainer,
            buttonContainer, imageStyle, titleStyle } = styles;
    return(
      <TouchableWithoutFeedback onPress={() => console.log('admin ')}>
        <View style={container}>
          <View style={imageContainer}>
            <Image
              source={{uri: artwork}}
              style={imageStyle} />
          </View>
          <View style={[contentContainer]}>
            <View style={[textContainer]}>
              <Text style={[titleStyle], {paddingBottom: 3}}>{title}</Text>
              {this.renderApproveText()}
            </View>
            <View style={[buttonContainer]}>
              {this.renderApproveButton()}
              <View>
                <TouchableWithoutFeedback onPress={() => Actions.eventItemDetail()}>
                  {lock}
                </TouchableWithoutFeedback>
              </View>
              <View>
                <TouchableWithoutFeedback onPress={() => Actions.eventItemDetail()}>
                  {close}
                </TouchableWithoutFeedback>
              </View>
              <View>
                <TouchableWithoutFeedback onPress={() => Actions.eventItemDetail()}>
                  {signIn}
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  skeleton: {
    borderWidth: 1,
    borderColor: 'red'
  },
  centerEverything: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    // flex: 1,
    width: deviceWidth*0.9,
    height: 200,
    flexDirection: 'column',
    margin: 10,
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
    flex: 6,
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  buttonContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingRight: 5
  },
  imageStyle: {
    width: null,
    height: 140,
  },
  titleStyle: {
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Medium'
  },
  approvedTextStyle: {
    fontSize: 12,
    fontFamily: 'HelveticaNeue-Medium'
  }
}

export default connect(null, actions)(AdminEventItem);
