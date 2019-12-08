import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login';
import Register from '../components/Signup/signup';
import MainMenu from './MainMenu';
import Home from '../components/Home';
import DetailTutor from './DetailTutor';
import Footer from '../components/Footer';
import Profile from './Profile';
import InfoUser from '../components/User/Info';

const Container = () => {
  return (
    <>
      <MainMenu />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/signup" render={() => <Register />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/detailTutor" render={() => <DetailTutor />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/infoUser" render={() => <InfoUser />} />
      </Switch>
      <Footer />
    </>
  );
};

export default Container;
