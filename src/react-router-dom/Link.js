import React from 'react';
import {Context} from './HashRouter';

export default class Link extends React.Component {
  static contextType = Context;

  render() {
    const {history} = this.context;
    const {to} = this.props;

    return (
      <a onClick={history.push.bind(null, to)}>{this.props.children}</a>
    );
  };
}

// href 的方式也可以实现。 缺点是只能实现hash的跳转
// <a href={`#${this.props.to}`}>{this.props.children}</a>
