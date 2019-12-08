/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {
  FacebookLoginButton,
  GoogleLoginButton
} from 'react-social-login-buttons';
import fire from '../../config/firebase';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    console.log(e);
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">thuegiasu</span>.com
        </h1>
        <h2 className="text-center">Xin chào!</h2>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Mật khẩu:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button
          className="btn-lg btn-dark btn-block"
          type="submit"
          onClick={this.login}
        >
          Đăng nhập
        </Button>
        <input type="submit" className="loginBtn" value="Enter" />
        <div className="text-center pt-3">
          Hoặc đăng nhập bằng tài khoản khác:
        </div>
        <FacebookLoginButton className="mt-3 md-3" />
        <GoogleLoginButton className="mt-3 md-3" />
        <div className="text-center">
          <a>
            <Link to="/signup">Tạo tài khoản</Link>
          </a>
          <span className="p-2">|</span>
          <a>Quên mật khẩu?</a>
        </div>
      </Form>
    );
  }
}

export default Login;
