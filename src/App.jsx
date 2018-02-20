import React, { Component } from 'react';
import { connect } from 'react-redux';
import Platform from 'react-platform-js';
import Favicon from 'react-favicon';
import { DesktopLayout, MobileLayout } from './components/layouts';
import { withStyles } from 'material-ui';

import actions from './redux/actions';
import { fire } from './API/firebase';

import appStyles from './styles/appStyle';

class App extends Component {
  state = {};
  componentDidMount() {
    const currentUser = fire.auth().currentUser;

    if (currentUser) {
      this.props.setCurrentUser(currentUser);
      return;
    }

    fire.auth().onAuthStateChanged(user => {
      if (user) {
        fire
          .database()
          .ref('2FA/' + user.uid)
          .on('value', snap => {
            if (snap.val() === true) {
              fire
                .database()
                .ref('MasterNodes/' + user.uid)
                .on('value', snapshot => {
                  let list = [];
                  snapshot.forEach(snap => {
                    list.push(snap.val());
                  });
                  user.MasterNodes = list;

                  this.props.setCurrentUser(user);
                });

              return;
            }
            this.props.setCurrentUser(user);
          });

        fire
          .database()
          .ref('2FA/' + user.uid)
          .on('value', snap => {
            this.props.setAuth(snap.val());
          });
      } else {
        this.props.setCurrentUser(null);
      }
    });

    let timer = setInterval(() => this.tick(), 35000);
    this.setState({ timer });
    this.props.platformGet({
      os: Platform.OS || '',
      osVersion: Platform.OSVersion || '',
      browser: Platform.Browser || '',
      browserVersion: Platform.BrowserVersion || '',
      engine: Platform.Engine || '',
      cpu: Platform.CPU || '',
      deviceType: Platform.DeviceType || 'desktop',
      deviceModel: Platform.DeviceModel || '',
      deviceVendor: Platform.DeviceVendor || '',
      ua: Platform.UA || ''
    });
    this.props.getSysStats('first');
  }

  tick() {
    this.props.getSysStats();
  }

  render() {
    const { classes } = this.props;

    return (
      /* <HttpsRedirect> */
      <div className={classes.root}>
        <Favicon url={require('./assets/img/png_favicon.png')} />
        <Platform rules={{ DeviceType: undefined }}>
          <DesktopLayout />
          <h1 style={{ color: 'white', zIndex: '10000', display: 'none' }}>{this.state.timer}</h1>
        </Platform>
        <Platform rules={{ DeviceType: 'mobile' }}>
          <MobileLayout />
        </Platform>
      </div>
      /* </HttpsRedirect> */
    );
  }
}

const stateToProps = state => {
  return {
    app: state.app
  };
};

const dispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(actions.setCurrentUser(user)),
    getSysStats: first => dispatch(actions.getSysStats(first)),

    platformGet: platformInfo => dispatch(actions.platformGet(platformInfo)),
    setAuth: auth => dispatch(actions.setAuth(auth))
  };
};

export default connect(stateToProps, dispatchToProps)(withStyles(appStyles)(App));
