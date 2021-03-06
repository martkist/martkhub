import React, { Component } from 'react';

import { connect } from 'react-redux';
import injectSheet from 'react-jss';

// import style
import newsDetailStyle from './newsDetail.style';

// import components
import {
  NewsHeader,
  NewsBody,
  NewsAbout,
  NewsFooter,
} from '../../functionals';

const splitContent = content => {
  const image = content
    .slice(0, content.indexOf('" /></figure>'))
    .split('<figure><img alt="" src="')[1];
  //const image = splited[0].split('<figure><img alt="" src="')[1];
  const body = content.slice(content.indexOf('<p>'));
  return { image, body };
};


class NewsDetail extends Component {

  render() {
    const { classes, post, goBack, deviceType } = this.props;

    //Platform style switcher
    const style = deviceType === 'mobile' ? classes.mRoot : classes.root;

    const splittedContent = splitContent(post['content:encoded']);
    const header = {
      image: splittedContent.image,
      avatar: post.image.url,
      name: post['dc:creator'],
      pubDate: post.pubDate.slice(0, -12),
      title: post.title,
    };
    const body = splittedContent.body;
    const about = {
      avatar: post.image.url,
      text: post.title,
    };
    return (
      <div className={style}>
        <NewsHeader deviceType={deviceType} header={header} />
        <NewsBody deviceType={deviceType} body={body} />
        <NewsAbout deviceType={deviceType} about={about} />
        <NewsFooter deviceType={deviceType} goBack={goBack} />
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
  injectSheet(newsDetailStyle)(NewsDetail)
);
