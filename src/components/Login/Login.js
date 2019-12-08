/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {
  FacebookLoginButton,
  GoogleLoginButton
} from 'react-social-login-buttons';
// import fire from '../../config/firebase';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  realTimeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  realTimePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit = e => {
    const { login } = this.props;
    e.preventDefault();

    const { email, password } = this.state;

    if (!email || !password) {
      // this.setState({
      //   kindAlert: 'missFill'
      // });
      return;
    }

    login(email, password);
  };

  render() {
    return (
      <div className="container login-form">
        <div>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <h2>
              <span className="login">Đăng Nhập</span>
            </h2>
            <FormGroup controlId="formBasicEmail">
              <Label>Email</Label>
              <Input
                onChange={e => this.realTimeEmail(e)}
                name="email"
                type="email"
                placeholder="Địa chỉ email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
              <Label>Mật khẩu</Label>
              <Input
                onChange={e => this.realTimePassword(e)}
                name="password"
                type="password"
                placeholder="Mật khẩu"
              />
            </FormGroup>
            <div className="ViewProfile">
              <Button variant="primary" type="submit">
                Đăng nhập
              </Button>
            </div>
          </Form>
        </div>
        <div className="text-center pt-3">
          Hoặc đăng nhập bằng tài khoản khác:
        </div>

        <div>
          <p>
            <FacebookLoginButton />
          </p>
          <a>
            <GoogleLoginButton />
          </a>
          <div className="text-center">
            <a>
              <Link to="/signup">Tạo tài khoản</Link>
            </a>
            <span className="p-2">|</span>
            <a>Quên mật khẩu?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
