/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import fire from '../config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import { Form, Nav, Button } from 'reactstrap';

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
    // return <div className="main_menu">{user ? <Home /> : <Login />}</div>;
    return (
      <div className="hero-content">
        <header className="site-header">
          <div className="top-header-bar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-6 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                  <div className="header-bar-email d-flex align-items-center">
                    <i className="fa fa-envelope"></i>
                    <a href="#">ThueGiaSu@gmail.com</a>
                  </div>

                  <div className="header-bar-text lg-flex align-items-center">
                    <p>
                      <i className="fa fa-phone"></i>001-1234-88888{' '}
                    </p>
                  </div>
                </div>

                <div className="col-12 col-lg-6 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                  {/* <div className="header-bar-search">
                      <Form className="flex align-items-stretch">
                        <input
                          type="search"
                          placeholder="Bạn đang tìm một gia sư?"
                        ></input>
                        <Button
                          type="submit"
                          value=""
                          classNameName="flex justify-content-center align-items-center"
                        >
                          <i className="fa fa-search"></i>
                        </Button>
                      </Form>
                    </div> */}

                  {user ? (
                    <div className="header-bar-menu">
                      <ul className="flex justify-content-center align-items-center py-2 pt-md-0">
                        <li>
                          <a>Đăng Xuất</a>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="header-bar-menu">
                      <ul className="flex justify-content-center align-items-center py-2 pt-md-0">
                        <li>
                          <Link to="/signup">Đăng ký</Link>
                        </li>
                        <li>
                          <Link to="/login">Đăng nhập</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="nav-bar">
            <div className="container">
              <div className="row">
                <div className="flex justify-content-center align-items-center col-9 col-lg-3">
                  <div className="site-branding">
                    <h1 className="site-title">
                      <a>
                        <Link to="/">
                          Ezu<span>ca</span>
                        </Link>
                      </a>
                    </h1>
                  </div>

                  <div className="header-bar-search">
                    <Form className="flex align-items-stretch">
                      <input
                        type="search"
                        placeholder="Bạn đang tìm một gia sư?"
                      ></input>
                      <Button
                        type="submit"
                        value=""
                        classNameName="flex justify-content-center align-items-center"
                      >
                        <i className="fa fa-search"></i>
                      </Button>
                    </Form>
                  </div>
                </div>

                <div className="col-3 col-lg-9 flex justify-content-end align-content-center">
                  <Nav className="site-navigation flex justify-content-end align-items-center">
                    <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                      <li className="current-menu-item">
                        <Link to="/"> Home</Link>
                      </li>
                      <li>
                        <a>About</a>
                      </li>
                      <li>
                        <a>Courses</a>
                      </li>
                      <li>
                        <a>blog</a>
                      </li>
                      <li>
                        <a>Contact</a>
                      </li>
                    </ul>

                    <div className="hamburger-menu d-lg-none">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="header-bar-cart">
                      <a
                        href="#"
                        className="flex justify-content-center align-items-center"
                      >
                        <span
                          aria-hidden="true"
                          className="icon_bag_alt"
                        ></span>
                      </a>
                    </div>
                  </Nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="hero-content-overlay">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero-content-wrap flex flex-column justify-content-center align-items-start">
                  <header className="entry-header">
                    <h4>Bạn Đang Tìm Một Gia Sư Giỏi</h4>
                    <h1>
                      Hệ Thống Online
                      <br />
                      Thuê Gia Sư Tốt Nhất
                    </h1>
                  </header>

                  <div className="entry-content">
                    <p>
                      Đặt uy tín và chất lượng giảng dạy lên hàng đầu, có nhiều
                      gói dịch vụ cho phụ huynh lựa chọn
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(MainMenu));
