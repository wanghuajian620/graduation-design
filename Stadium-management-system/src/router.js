import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from '../src/layouts/BasicLayout';
import LoginLayout from '../src/layouts/LoginLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginLayout} />
        <Route path="/admin" component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
