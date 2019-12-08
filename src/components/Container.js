import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../containers/Login/Login';
import Register from '../containers/Signup/signup';
import MainMenu from '../containers/MainMenu';
import Home from '../containers/Home';
import DetailTutor from '../containers/DetailTutor';
import Footer from '../containers/Footer';
import InfoUser from '../containers/User/Info';

const Container = () => {
  return (
    <>
      <MainMenu />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/signup" render={() => <Register />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/detailTutor" render={() => <DetailTutor />} />
        <Route exact path="/infoUser" render={() => <InfoUser />} />
      </Switch>
      <Footer />
    </>
  );
};

export default Container;
