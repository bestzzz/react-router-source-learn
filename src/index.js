import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from './react-router-dom';

import Home from './component/Home';
import User from './component/User';
import Profile from './component/Profile';

const content = (
  <Router>
    <>
      <nav>
        <Link to="/">home</Link>
        <Link to="/user">user</Link>
        <Link to="/profile">profile</Link>
      </nav>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/user" component={User}/>
      <Route path="/profile" component={Profile}/>
    </>
  </Router>
)

ReactDOM.render(
  content,
  document.getElementById('root')
);
