/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Alert } from 'reactstrap';
import {
  FacebookLoginButton,
  GoogleLoginButton
} from 'react-social-login-buttons';
// import fire from '../../config/firebase';
import { Link } from 'react-router-dom';

function AlertForm(props) {
  const { kindAlert, message } = props;
  if (kindAlert === 'failed') {
    return (
      <Alert color="danger">
        Có lỗi xảy ra!
        <p>{message};</p>
      </Alert>
    );
  }
  if (kindAlert === 'success') {
    return (
      <Alert color="success">
        Đăng nhập thành công.
        <Link className="alert-link" to="/Home">
          Nhấn vào đây để tiếp tục.
        </Link>
      </Alert>
    );
  }
  if (kindAlert === 'missFill') {
    return (
      <Alert color="danger">Vui lòng điền đầy đủ thông tin và thử lại!</Alert>
    );
  }
  return null;
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kindAlert: 'normal',
      message: 'none'
    };
  }

  handleSubmit = e => {
    const { login } = this.props;
    e.preventDefault();

    const email = e.target.exampleEmail.value;
    const password = e.target.examplePassword.value;

    if (!email || !password) {
      this.setState({
        kindAlert: 'missFill'
      });
      return;
    }

    login(email, password);
  };

  renderAlert() {
    const { kindAlert, message } = this.state;
    return <AlertForm kindAlert={kindAlert} message={message} />;
  }

  render() {
    return (
      <div className="container login-form">
        <div>
          {this.renderAlert()}
          <Form onSubmit={e => this.handleSubmit(e)}>
            <h2>
              <span className="login">Đăng Nhập</span>
            </h2>
            <FormGroup>
              <Label>Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                type="email"
                placeholder="Địa chỉ email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Mật khẩu</Label>
              <Input
                id="examplePassword"
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
