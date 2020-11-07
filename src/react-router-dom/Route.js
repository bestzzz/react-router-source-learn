import React from 'react';
import {Context} from './HashRouter';
import {pathToRegexp} from 'path-to-regexp';

export default class Route extends React.Component {
  static contextType = Context;

  render() {
    const {component: Component, path, exact = false} = this.props;
    const {pathname} = this.context.location;

    const paramNames = [];
    const regexp = pathToRegexp(path, paramNames, {end: exact});
    const result = pathname.match(regexp);

    const props = {
      location: this.context.location
    };
    if (result) {
      return <Component {...props}/>;
    }

    return null;
  };
}
