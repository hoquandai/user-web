/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends Component {
  constructor(props) {
    super(props);
    // this.login = this.login.bind(this);
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
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">thuegiasu</span>.com
        </h1>
        <h2 className="text-center">Xin chào!</h2>
        <FormGroup>
          <Label>Tên đăng nhập hoặc Email:</Label>
          <Input type="email" placeholder="Email" id="email" />
        </FormGroup>
        <FormGroup>
          <Label>Mật khẩu:</Label>
          <Input type="password" placeholder="Password" id="password" />
        </FormGroup>
        <FormGroup>
          <Label>Nhập lại mật khẩu:</Label>
          <Input type="password" placeholder="Password" id="password" />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Đăng kí</Button>
        <div className="text-center pt-3">Đã có tài khoản?</div>
        <div className="text-center">
          <a href="/#login">Đăng nhập</a>
        </div>
      </Form>
    );
  }
}

export default Signup;
