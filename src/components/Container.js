import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainMenu from '../containers/MainMenu';
import Login from '../containers/Login/Login';
import Register from '../containers/Signup/signup';

const Container = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <MainMenu />} />
      <Route exact path="/signup" render={() => <Register />} />
      <Route exact path="/login" render={() => <Login />} />
    </Switch>
  );
};

export default Container;
