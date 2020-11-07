import React from 'react';
import {Link, Route, Redirect, Switch} from '../react-router-dom';

import UserList from './UserList';
import UserAdd from './UserAdd';

const User = () => {
  return (
    <>
      <div>
      <Link to="/user/list">用户列表</Link>
      <Link to="/user/add">添加用户</Link>
      </div>
      <div>
        <Switch>
          <Route path="/user/list" component={UserList}/>
          <Route path="/user/add" component={UserAdd}/>
          <Redirect to="/user/list"/>
        </Switch>
      </div>
    </>
  );
};

export default User;
