/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fire from '../config/firebase';
import Login from './Login/Login';
import Home from './Home';

class MainMenu extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('ok');
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        console.log('error');
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }

  render() {
    const { user } = this.state;
    return <div className="main_menu">{user ? <Home /> : <Login />}</div>;
  }
}

export default withRouter(connect()(MainMenu));
