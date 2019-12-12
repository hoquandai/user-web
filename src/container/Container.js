import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from '../components/Signup/signup';
import MainMenu from './MainMenu';
import Home from '../components/Home';
import DetailTutor from './DetailTutor';
import Footer from '../components/Footer';
import Profile from './Profile';

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
