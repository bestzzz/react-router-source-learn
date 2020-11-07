import React from 'react';

export const Context = React.createContext();

export default class HashRouter extends React.Component {
  state = {
    location: {
      pathname: window.location.hash.slice(1),
      state: null
    }
  };

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      console.log(window.location.hash, '111');
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1),
          state: this.locationState
        }
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange');
  }

  locationState = null;
  render() {
    const {location} = this.state;
    const value = {
      location,
      history: {
        // 定义一个history对象，有一个push方法来跳路径
        push: (path, state) => {
          window.location.hash = path;
          this.locationState = state;
        }
      }
    };

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    );
  }
};