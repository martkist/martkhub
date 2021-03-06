/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRoot } from '../../HOC';

import { Layout } from 'antd';

//Import functionals components
import {
  Home,
  Login,
  Register,
  DashBoard,
  Faq,
  MasternodeSetting,
  MasternodeInfo,
  NewProposal,
  News,
  UserAccount,
} from '../../pages';
import MAppLSider from '../appLSider/appLSider';
import MAppRSider from '../appRSider/appRSider';

//Import Styles
import mAppContentStyle from './mAppContent.style';

//import EmailModal from './the-modal';

const { Content } = Layout;

class AppContent extends Component {
  render() {
    const { showPage, deviceType } = this.props;

    return (
      <div style={mAppContentStyle.__container}>
        <Content style={mAppContentStyle.wraper}>
          {
            {
              home: <Home deviceType={deviceType} />,
              dashBoard: <DashBoard deviceType={deviceType} />,
              newProposal: <NewProposal deviceType={deviceType} />,
              news: <News deviceType={deviceType} />,
              userAccount: <UserAccount deviceType={deviceType} />,
              faq: <Faq deviceType={deviceType} />,
              masterNode: <MasternodeSetting deviceType={deviceType} />,
              tool: <MasternodeInfo deviceType={deviceType} />,
              login: <Login deviceType={deviceType} />,
              register: <Register deviceType={deviceType} />
            }[showPage]
          }
          {this.props.showMenu ? <MAppLSider deviceType={deviceType} /> : null}
          {this.props.showChat ? <MAppRSider deviceType={deviceType} /> : null}
        </Content>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    showPage: state.app.showPage,
    deviceType: state.app.platform.deviceType,
    showChat: state.app.showChat,
    showMenu: state.app.showMenu
  };
};

const dispatchToProps = dispatch => {
  return {};
};
export default connect(stateToProps, dispatchToProps)(withRoot(AppContent));
