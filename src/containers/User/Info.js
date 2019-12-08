/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

class InfoUser extends Component {
  state = {
    isLoaded: true
  };

  async componentDidMount() {
    const url = 'https://stormy-ridge-33799.herokuapp.com/users/1';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  render() {
    const { isLoaded } = this.state;
    return <div>{isLoaded ? <div>Loading...</div> : <div>person...</div>}</div>;
  }
}

export default InfoUser;
