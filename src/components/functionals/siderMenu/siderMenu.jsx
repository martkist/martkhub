/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import injectSheet from 'react-jss';
import { Row, Col } from 'antd';

// Import providers HOC's
import { withFirebase } from '../../../providers/firebase';

//ReduxActions
import actions from '../../../redux/actions';

// Custom Components
import SiderLogo from '../siderLogo/siderLogo';

import siderMenuStyle from './siderMenu.style';

class SiderMenu extends Component {
  // add Firebase as global var in component
  firebase = this.props.firebase;

  activeComponemt(pageActive) {
    if (pageActive === 'logout') {
      this.firebase.doLogout(() => {
        this.props.doAppLogout();
        this.props.onItemClick('home');
      });
    } else {
      this.props.onItemClick(pageActive);
    }
  }

  render() {
    const { classes, active, deviceType, martkInfo } = this.props;

    const style = deviceType === 'mobile' ? classes.mRoot : classes.root;

    const usdChangeRate = martkInfo.martkistPrice
      ? `${parseFloat(martkInfo.martkistPrice.price_usd).toFixed(8)} USD`
      : '';
    // const btcChangeRate = martkInfo.martkistPrice ? `${parseFloat(martkInfo.martkistPrice.price_btc).toFixed(8)} BTC` : ''; <-- Temporarily commented
    // const satChangeRate = martkInfo.martkistPrice ? `${Math.floor(parseFloat(martkInfo.martkistPrice.price_btc).toFixed(8) * 100000000)} SATOSHI` : ''; <-- Temporarily commented
    const masternodes =
      martkInfo.mnRegistered && martkInfo.mnCount
        ? `${martkInfo.mnRegistered} / ${martkInfo.mnCount.enabled}`
        : '';
    const totUsers = martkInfo.users ? martkInfo.users : '';

    return (
      <div className={style}>
        {this.props.deviceType !== 'mobile' && <SiderLogo />}
        {this.props.deviceType === 'mobile' && (
          <Row className="stats__container">
            <Col span={15} className="stats__wrapper">
              <img
                alt="a"
                src={require('../../../assets/img/png_stasts_martkist.png')}
                className="icon"
              />
              <span>
                {' '}
                <b>{`MARTKIST: `}</b> {usdChangeRate}
              </span>
            </Col>
            <Col span={9} className="stats__wrapper">
              <img
                alt="a"
                src={require('../../../assets/img/png_stats_users.png')}
                className="icon"
              />
              <span>
                <b>{`USERS: `}</b> {totUsers}
              </span>
            </Col>
            <Col span={24} className="stats__wrapper">
              <img
                alt="a"
                src={require('../../../assets/img/png_stats_masternodes.png')}
                className="icon"
              />
              <span>
                <b>{`REGISTERED MASTERNODES: `}</b> {masternodes}
              </span>
            </Col>
          </Row>
        )}
        {this.props.menuItems.map((item, i) => {
          const icon = item.key === active ? item.iconSelected : item.icon;
          const txt =
            item.key === active ? classes.menuTxtActive : classes.menuTxt;
          const btnStyle =
            item.key === active ? classes.buttonActive : classes.button;
          let showMe = item.private;
          switch (item.showWhen) {
            case 'always':
              showMe = true;
              break;
            case 'never':
              showMe = false;
              break;
            case 'login':
              showMe = this.props.logged;
              break;
            case 'logout':
              showMe = !this.props.logged;
              break;
            default:
              showMe = true;
          }
          if (item.key === active) {
            document.title = `Martkist Hub | ${item.pageTitle}`;
          } else if (active === 'home') {
            document.title = 'Martkist Hub';
          }
          return showMe &&
            (item.showPlatform === 'all' ||
              item.showPlatform === this.props.deviceType) ? (
            <button
              key={i}
              className={btnStyle}
              onClick={() => this.activeComponemt(item.key)}
            >
              <img
                alt="a"
                src={require(`../../../assets/img/${icon}.png`)}
                width="25"
                style={deviceType === 'mobile' ? { marginLeft: 15 } : null}
              />
              <span className={txt}>{`${item.title.toUpperCase()}`}</span>
            </button>
          ) : null;
        })}

        <div className={classes.lastBorder} />
        {/*Last border*/}
      </div>
    );
  }
}
const stateToProps = state => {
  return {
    menuItems: state.app.menuItems,
    martkInfo: {
      mnCount: state.martkistStats.mnCount,
      mnRegistered: state.martkistStats.mnRegistered,
      martkistPrice: state.martkistStats.martkistPrice,
      users: state.martkistStats.users
    }
  };
};

const dispatchToProps = dispatch => {
  return {
    doAppLogout: () => dispatch(actions.doLogout())
  };
};

export default compose(
  withFirebase,
  connect(
    stateToProps,
    dispatchToProps
  ),
  injectSheet(siderMenuStyle)
)(SiderMenu);
