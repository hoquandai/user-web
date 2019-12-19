/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import fetch from 'cross-fetch';

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
        Đăng ký thành công. Bạn có thể đăng nhập ở đây{' '}
        <Link className="alert-link" to="/login">
          Đăng Nhập
        </Link>
      </Alert>
    );
  }
  if (kindAlert === 'missFill') {
    return (
      <Alert color="danger">Vui lòng điền đầy đủ thông tin và thử lại!</Alert>
    );
  }
  if (kindAlert === 'conFirmFailed') {
    return (
      <Alert color="danger">
        Nhập lại mật khẩu không chính xác. Vui lòng nhập lại!
      </Alert>
    );
  }
  return null;
}

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordConfirm: '',
      kindAlert: 'normal',
      message: 'none'
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const email = e.target.exampleEmail.value;
    const password = e.target.examplePassword.value;
    const passwordConfirm = e.target.examplePasswordConfirm.value;
    // const { email, password, passwordConfirm } = this.state;
    let res = true;
    if (!email || !password || !passwordConfirm) {
      this.setState({
        kindAlert: 'missFill'
      });
      return;
    }

    if (password !== passwordConfirm) {
      this.setState({
        kindAlert: 'conFirmFailed'
      });
      return;
    }

    const user = {
      email: email,
      password : password
    }

    fetch('https://stormy-ridge-33799.herokuapp.com/users', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        user
      })
    })
      .then(response => {
        if (response.status !== 200) {
          res = false;
        }
        return response.json();
      })
      .then(response => {
        if (!res) {
          this.setState({
            kindAlert: 'failed',
            message: response.message
          });
        } else {
          this.setState({
            kindAlert: 'success'
          });
        }
      });
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
              <span className="login">Đăng Ký</span>
            </h2>
            <FormGroup>
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                id="exampleEmail"
                placeholder="Địa chỉ email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
              <Label>Mật khẩu</Label>
              <Input
                name="password"
                type="password"
                id="examplePassword"
                placeholder="Mật khẩu"
              />
            </FormGroup>
            <FormGroup>
              <Label>Nhập lại mật khẩu</Label>
              <Input
                name="passwordConfirm"
                type="password"
                id="examplePasswordConfirm"
                placeholder="Nhập lại mật khẩu"
              />
            </FormGroup>
            <div className="ViewProfile">
              <Button variant="primary" type="submit">
                Đăng ký
              </Button>
            </div>
          </Form>
        </div>
        <div className="text-center pt-3">Đã có tài khoản?</div>
        <div className="text-center">
          <a>
            <Link to="/login">Đăng nhập</Link>
          </a>
        </div>
      </div>
    );
  }
}

export default Signup;
