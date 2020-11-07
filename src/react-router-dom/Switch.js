import React from 'react';
import {Context} from './HashRouter';
import {pathToRegexp} from 'path-to-regexp';

export default class Switch extends React.Component {
  static contextType = Context;

  render() {
    const {pathname} = this.context.location;
    const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const {path = '/', exact = false} = child.props;
      const paramNames = [];
      const regexp = pathToRegexp(path, paramNames, {end: exact});
      const result = pathname.match(regexp);
      console.log(pathname, path, regexp, result, '111');
      if (result) {
        return child;
      }
    };

    return null;
  }
}
