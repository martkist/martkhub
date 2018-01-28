import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { Grid, withStyles } from 'material-ui';

// import style
import { newsBodyStyle } from './styles';

// import components
import { Stats, WelcomeBox } from '../functionals';
class NewsBody extends Component {
  render() {
    const { classes, body } = this.props;
    //console.log('ACZ (post) --> ', post);
    return (
      <div>
        <Grid container className={classes.root}>
          <Grid md={12} className="newBody-grid">
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const stateToProps = state => {
  return {};
};

const dispatchToProps = dispatch => {
  return {};
};

export default connect(stateToProps, dispatchToProps)(
  withStyles(newsBodyStyle)(NewsBody)
);
