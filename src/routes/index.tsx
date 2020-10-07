import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Listing from '../pages/Listing';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/usuario/:id" exact component={Dashboard} />
    <Route path="/listagem" exact component={Listing} />
  </Switch>
);

export default Routes;
