/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import SiderLogo from './SiderLogo';

import { siderMenuStyle } from './styles';

class SiderMenu extends Component {
  tests(pageActive) {
    this.props.onItemClick(pageActive);
  }

  render() {
    const { classes, active, deviceType } = this.props;
    const style = deviceType === 'mobile' ? classes.mRoot : classes.root;
    return (
      <div className={style}>
        {this.props.deviceType !== 'mobile' && <SiderLogo />}
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
            document.title = `Syshub | ${item.pageTitle}`;
          } else if (active === 'home') {
            document.title = 'Syshub';
          }
          return showMe ? (
            <button
              key={i}
              className={btnStyle}
              onClick={() => this.tests(item.key)}
            >
              <img
                alt="a"
                src={require(`../../assets/img/${icon}.png`)}
                width="25"
              />
              <span className={txt}>{`${item.title.toUpperCase()}`}</span>
            </button>
          ) : null;
        })}
        <div className="lastBorder" /> {/*Last border*/}
        <div />
      </div>
    );
  }
}

export default injectSheet(siderMenuStyle)(SiderMenu);
