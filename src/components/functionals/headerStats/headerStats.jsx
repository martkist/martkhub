/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"; //to pass functions
import actions from "../../../redux/actions";
//import antd components
import { Grid } from "@material-ui/core";

import injectSheet from "react-jss";
import headerStatsStyle from "./headerStats.style";

class HeaderStats extends Component {
  render() {
    const { classes, deviceType, martkInfo } = this.props;
    //Platform style switcher
    const style = deviceType === "mobile" ? classes.mRoot : classes.root;

    const usdChangeRate = martkInfo.martkistPrice
      ? `${parseFloat(martkInfo.martkistPrice.usd).toFixed(8)} USD`
      : "";
    const btcChangeRate = martkInfo.martkistPrice
      ? `${parseFloat(martkInfo.martkistPrice.btc).toFixed(8)} BTC`
      : "";
    const satChangeRate = martkInfo.martkistPrice
      ? `${Math.floor(
          parseFloat(martkInfo.martkistPrice.btc).toFixed(8) * 100000000
        )} SATOSHI`
      : "";
    const masternodes =
      martkInfo.mnRegistered && martkInfo.mnCount
        ? `${martkInfo.mnRegistered} / ${martkInfo.mnCount.enabled}`
        : "";
    const totUsers = martkInfo.users ? martkInfo.users : "";
    const martkistCaption = deviceType === "mobile" ? ":" : "MARTKIST:";
    //console.clear();
    return (
      <Grid container className={style}>
        <Grid item className="common" xs={deviceType === "mobile" ? 12 : null}>
          <div className="changeRate">
            <img
              alt="a"
              src={require("../../../assets/img/png_stasts_martkist.png")}
              className="icon"
              onClick={() => this.props.setPage("home")}
            />
            <span className="TxtBold">{martkistCaption}</span>
            <div className="changeValue">
              <i>{usdChangeRate}</i>
              <i>{btcChangeRate}</i>
              <i>{satChangeRate}</i>
            </div>
          </div>
        </Grid>
        <Grid item className="common" xs={deviceType === "mobile" ? 12 : null}>
          <img
            alt="a"
            src={require("../../../assets/img/png_stats_masternodes.png")}
            className="icon"
          />
          {deviceType === "mobile" ? (
            <span className="TxtBold">{`: `}</span>
          ) : (
            <span className="TxtBold">{`REGISTERED MASTERNODES: `}</span>
          )}
          {masternodes}
        </Grid>
        <Grid item className="common" xs={deviceType === "mobile" ? 12 : null}>
          <img
            alt="a"
            src={require("../../../assets/img/png_stats_users.png")}
            className="icon"
          />
          {deviceType === "mobile" ? (
            <span className="TxtBold">{`: `}</span>
          ) : (
            <span className="TxtBold">{`USERS: `}</span>
          )}
          {totUsers}
        </Grid>
      </Grid>
    );
  }
}

HeaderStats.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  //pass the providers
  return {
    martkInfo: {
      mnCount: state.martkistStats.mnCount,
      mnRegistered: state.martkistStats.mnRegistered,
      martkistPrice: state.martkistStats.martkistPrice,
      users: state.martkistStats.users
    }
  };
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
  return {
    setPage: page => dispatch(actions.setPage(page))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(headerStatsStyle)(HeaderStats));
