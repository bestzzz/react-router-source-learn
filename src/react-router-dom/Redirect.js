import React from 'react';
import {Context} from './HashRouter';

export default class Redirect extends React.Component {
  static contextType = Context;

  render() {
    this.context.history.push(this.props.to);
    return null;
  };
}
