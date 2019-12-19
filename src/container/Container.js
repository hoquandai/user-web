import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from '../components/Signup/signup';
import MainMenu from './MainMenu';
import Home from '../components/Home';
import DetailTutor from './DetailTutor';
import Footer from '../components/Footer';
import Profile from './Profile';
import ViewALlTuTor from '../components/ViewAllTutor';
import ListRequestOfTutor from '../components/ListRequestOfTutor';
import DetailRequestOfTutor from '../components/DetailRequestOfTutor';

class Container extends React.Component {
  PrivateRoute = ({ children }) => {
    const user = localStorage.getItem('user');
    return (
      <Route
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  };

  render() {
    return (
      <>
        <MainMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detailTutor">
            <DetailTutor />
          </Route>
          <Route path="/viewAllTutor">
            <ViewALlTuTor />
          </Route>
          <this.PrivateRoute path="/listRequest">
            <ListRequestOfTutor />
          </this.PrivateRoute>
          <this.PrivateRoute path="/detailRequestOfTutor">
            <DetailRequestOfTutor />
          </this.PrivateRoute>
          <this.PrivateRoute path="/profile">
            <Profile />
          </this.PrivateRoute>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default Container;
