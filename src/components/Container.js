import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../containers/Login/Login';
import Register from '../containers/Signup/signup';
import MainMenu from '../containers/MainMenu';
import Home from '../containers/Home';
import DetailTutor from '../containers/DetailTutor';
import Footer from '../containers/Footer';
import Profile from '../containers/Profile';

const Container = () => {
  return (
    <>
      <MainMenu></MainMenu>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/signup" render={() => <Register />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/detailTutor" render={() => <DetailTutor />} />
        <Route exact path="/profile" render={() => <Profile />} />
      </Switch>
      <Footer></Footer>
    </>
  );
};

export default Container;
