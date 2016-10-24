import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isLoggedIn } from './actions';
import { Scene, Router, Actions, Switch } from 'react-native-router-flux';

import firebase from 'firebase';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Main from './components/Main';

class RouterComponent extends Component {

  state = { loggedIn: false }

  componentWillMount() {
    this.props.isLoggedIn();
  }

  render() {
    return(
      <Router sceneStyle={{ }} hideNavBar={true}>
        <Scene key="root">
          {/* component={connect(state => ({loggedIn: state.loggedIn}))(Switch)}
          selector={props => props.loggedIn ? 'mainContainer' : 'auth'} */}
          <Scene key="authContainer" initial>
            <Scene key="login" component={Login} title="Login Page" />
            <Scene key="register" component={Register} title="Register Page" />
          </Scene>

          <Scene key="mainContainer">
            <Scene key="main" component={Main} title="Main Page" />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default connect(null, { isLoggedIn })(RouterComponent);
