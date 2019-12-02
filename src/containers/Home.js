/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import {Form , Button, Nav} from 'reactstrap';
import { FaUser } from "react-icons/fa";
import Tutor from './Tutor';


class Home extends Component {
  render() {
    return (
      <div>
      <div className="hero-content">
        <header className="site-header">
            <div className="top-header-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                            <div className="header-bar-email d-flex align-items-center">
                                <i className="fa fa-envelope"></i><a href="#">tuanna.design@gmail.com</a>
                            </div>

                            <div className="header-bar-text lg-flex align-items-center">
                                <p><i className="fa fa-phone"></i>001-1234-88888 </p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                            <div className="header-bar-search">
                                <Form className="flex align-items-stretch">
                                    <input type="search" placeholder="What would you like to learn?"></input>
                                    <Button type="submit" value="" classNameName="flex justify-content-center align-items-center">
                                      <i className="fa fa-search"></i>
                                    </Button>
                                </Form>
                            </div>

                            <div className="header-bar-menu">
                                <ul className="flex justify-content-center align-items-center py-2 pt-md-0">
                                    <li><a href="#">Register</a></li>
                                    <li><a href="#">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-9 col-lg-3">
                            <div className="site-branding">
                                <h1 className="site-title"><a href="index.html" rel="home">Ezu<span>ca</span></a></h1>
                            </div>
                        </div>

                        <div className="col-3 col-lg-9 flex justify-content-end align-content-center">
                            <Nav className="site-navigation flex justify-content-end align-items-center">
                                <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                                    <li className="current-menu-item"><a href="index.html">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Courses</a></li>
                                    <li><a href="#">blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>

                                <div className="hamburger-menu d-lg-none">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <div className="header-bar-cart">
                                    <a href="#" className="flex justify-content-center align-items-center"><span aria-hidden="true" className="icon_bag_alt"></span></a>
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
                                <h4>Get started with online courses</h4>
                                <h1>best online<br/>Learning system</h1>
                            </header>
            
                            <div className="entry-content">
                                <p>đặt uy tín và chất lượng giảng dạy lên hàng đầu, nên sẽ có nhiều gói dịch vụ cho quý phụ huynh lựa chọn</p>
                            </div>

                            <footer className="entry-footer read-more">
                                <a href="#">read more</a>
                            </footer> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 

      <div className="icon-boxes">
          <div className="container-fluid">
              <div className="flex flex-wrap align-items-stretch">
                  <div className="icon-box">
                      <div className="icon">
                         <FaUser></FaUser>
                      </div> {/* .icon */}

                      <header className="entry-header">
                          <h2 className="entry-title">Learn From The Experts</h2>
                      </header> {/* .entry-header */}

                      <div className="entry-content">
                          <p>Lorem Ipsum available, but the majority have suffered alteration in some Form, by injected humour.</p>
                      </div> {/* .entry-content */}

                      <footer className="entry-footer read-more">
                          <a href="#">read more<i className="fa fa-long-arrow-right"></i></a>
                      </footer> {/* .entry-footer */}
                  </div> {/* .icon-box */}

                  <div className="icon-box">
                      <div className="icon">
                          <span className="ti-folder"></span>
                      </div> {/* .icon */}

                      <header className="entry-header">
                          <h2 className="entry-title">Book Library & Store</h2>
                      </header> {/* .entry-header */}

                      <div className="entry-content">
                          <p>Lorem Ipsum available, but the majority have suffered alteration in some Form, by injected humour.</p>
                      </div> {/* .entry-content */}

                      <footer className="entry-footer read-more">
                          <a href="#">read more<i className="fa fa-long-arrow-right"></i></a>
                      </footer> {/* .entry-footer */}
                  </div> {/* .icon-box */}

                  <div className="icon-box">
                      <div className="icon">
                          <span className="ti-book"></span>
                      </div> {/* .icon */}

                      <header className="entry-header">
                          <h2 className="entry-title">Best Course Online</h2>
                      </header> {/* .entry-header */}

                      <div className="entry-content">
                          <p>Lorem Ipsum available, but the majority have suffered alteration in some Form, by injected humour.</p>
                      </div> {/* .entry-content */}

                      <footer className="entry-footer read-more">
                          <a href="#">read more<i className="fa fa-long-arrow-right"></i></a>
                      </footer> {/* .entry-footer */}
                  </div> {/* .icon-box */}

                  <div className="icon-box">
                      <div className="icon">
                          <span className="ti-world"></span>
                      </div> {/* .icon */}

                      <header className="entry-header">
                          <h2 className="entry-title">Best Industry Leaders</h2>
                      </header> {/* .entry-header */}

                      <div className="entry-content">
                          <p>Lorem Ipsum available, but the majority have suffered alteration in some Form, by injected humour.</p>
                      </div> {/* .entry-content */}

                      <footer className="entry-footer read-more">
                          <a href="#">read more<i className="fa fa-long-arrow-right"></i></a>
                      </footer> {/* .entry-footer */}
                  </div> {/* .icon-box */}
              </div> {/* .row */}
          </div> {/* .container-fluid */}
      </div> {/* .icon-boxes */}
    

    

    <section className="about-section">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6 align-content-lg-stretch">
                    <header className="heading">
                        <h2 className="entry-title">About Ezuca</h2>

                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                    </header> {/* .heading */}

                    <div className="entry-content ezuca-stats">
                        <div className="stats-wrap flex flex-wrap justify-content-lg-between">
                            <div className="stats-count">
                                50<span>M+</span>
                                <p>STUDENTS LEARNING</p>
                            </div> {/* .stats-count */}

                            <div className="stats-count">
                                30<span>K+</span>
                                <p>ACTIVE COURSES</p>
                            </div> {/* .stats-count */}

                            <div className="stats-count">
                                340<span>M+</span>
                                <p>INSTRUCTORS ONLINE</p>
                            </div> {/* .stats-count */}

                            <div className="stats-count">
                                20<span>+</span>
                                <p>Country Reached</p>
                            </div> {/* .stats-count */}
                        </div> {/* .stats-wrap */}
                    </div> {/* .ezuca-stats */}
                </div> {/* .col */}

                <div className="col-12 col-lg-6 flex align-content-center mt-5 mt-lg-0">
                    <div className="ezuca-video position-relative">
                        <div className="video-play-btn position-absolute">
                            <img src="imgs/video-icon.png" alt="Video Play"></img>
                        </div> {/* .video-play-btn */}

                        <img src="imgs/video-screenshot.png" alt=""></img>
                    </div> {/* .ezuca-video */}
                </div> {/* .col */}
            </div> {/* .row */}
        </div> {/* .container */}
    </section> {/* .about-section */}

    

    <section className="featured-courses vertical-column courses-wrap">
        <div className="container">
            <div className="row mx-m-25">
                <div className="col-12 px-25">
                    <header className="heading flex flex-wrap justify-content-between align-items-center">
                        <h2 className="entry-title">Gia Sư Nổi Bật</h2>

                        <Nav className="courses-menu mt-3 mt-lg-0">
                            <ul className="flex flex-wrap justify-content-md-end align-items-center">
                                <li className="active"><a href="#">All</a></li>
                                <li><a href="#">Business</a></li>
                                <li><a href="#">Design</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Photography</a></li>
                            </ul>
                        </Nav> {/* .courses-menu */}
                    </header> {/* .heading */}
                </div> {/* .col */}

                <Tutor></Tutor>

                <Tutor></Tutor>

                <Tutor></Tutor>

                <Tutor></Tutor>

                <Tutor></Tutor>

                <Tutor></Tutor>

                <div className="col-12 px-25 flex justify-content-center">
                    <a className="btn" href="#">Xem tất cả</a>
                </div> {/* .col */}
            </div> {/* .row */}
        </div> {/* .container */}
    </section> {/* .courses-wrap */}

    <section className="latest-news-events">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <header className="heading flex justify-content-between align-items-center">
                        <h2 className="entry-title">Latest News & Events</h2>
                    </header> {/* .heading */}
                </div> {/* .col */}

                <div className="col-12 col-lg-6">
                    <div className="featured-event-content">
                        <figure className="event-thumbnail position-relative m-0">
                            <a href="#"><img src="imgs/event-1.jpg" alt=""></img></a>

                            <div className="posted-date position-absolute">
                                <div className="day">23</div>
                                <div className="month">mar</div>
                            </div> {/* .posted-date */}
                        </figure> {/* .event-thumbnail */}

                        <header className="entry-header flex flex-wrap align-items-center">
                            <h2 className="entry-title"><a href="#">The Complete Financial Analyst Training & Investing Course</a></h2>

                            <div className="event-location"><i className="fa fa-map-marker"></i>40 Baria Sreet 133/2 NewYork City, US</div>

                            <div className="event-duration"><i className="fa fa-calendar"></i>10 Dec - 12 dec</div>
                        </header> {/* .entry-header */}
                    </div> {/* .featured-event-content */}
                </div> {/* .col */}

                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                    <div className="event-content flex flex-wrap justify-content-between align-content-stretch">
                        <figure className="event-thumbnail">
                            <a href="#"><img src="imgs/event-2.jpg" alt=""></img></a>
                        </figure> {/* .course-thumbnail */}

                        <div className="event-content-wrap">
                            <header className="entry-header">
                                <div className="posted-date">
                                    <i className="fa fa-calendar"></i> 22 Mar 2018
                                </div> {/* .posted-date */}

                                <h2 className="entry-title"><a href="#">Personalized online learning experience</a></h2>

                                <div className="entry-meta flex flex-wrap align-items-center">
                                    <div className="post-author"><a href="#">Ms. Lara Croft </a></div>

                                    <div className="post-comments">02 Comments  </div>
                                </div> {/* .entry-meta */}
                            </header> {/* .entry-header */}

                            <div className="entry-content">
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                            </div> {/* .entry-content */}
                        </div> {/* .event-content-wrap */}
                    </div> {/* .event-content */}

                    <div className="event-content flex flex-wrap justify-content-between align-content-lg-stretch">
                        <figure className="event-thumbnail">
                            <a href="#"><img src="imgs/event-3.jpg" alt=""></img></a>
                        </figure> {/* .course-thumbnail */}

                        <div className="event-content-wrap">
                            <header className="entry-header">
                                <div className="posted-date">
                                    <i className="fa fa-calendar"></i> 22 Mar 2018
                                </div> {/* .posted-date */}

                                <h2 className="entry-title"><a href="#">Which investment project should my company choose?</a></h2>

                                <div className="entry-meta flex flex-wrap align-items-center">
                                    <div className="post-author"><a href="#">Ms. Lara Croft </a></div>

                                    <div className="post-comments">02 Comments  </div>
                                </div> {/* .entry-meta */}
                            </header> {/* .entry-header */}

                            <div className="entry-content">
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                            </div> {/* .entry-content */}
                        </div> {/* .event-content-wrap */}
                    </div> {/* .event-content */}
                </div> {/* .col */}
            </div> {/* .row */}
        </div> {/* .container */}
    </section> {/* .latest-news-events */}

    <section className="home-gallery">
        <div className="gallery-wrap flex flex-wrap">
            <div className="gallery-grid gallery-grid1x1">
                <a href="#"><img src="imgs/a.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid1x1">
                <a href="#"><img src="imgs/b.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid2x2">
                <a href="#"><img src="imgs/c.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid1x1">
                <a href="#"><img src="imgs/d.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid1x1">
                <a href="#"><img src="imgs/e.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid2x1">
                <a href="#"><img src="imgs/g.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid2x1">
                <a href="#"><img src="imgs/h.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid1x1">
                <a href="#"><img src="imgs/i.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid2x2 ">
                <a href="#"><img src="imgs/j.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid1x1">
                <a href="#"><img src="imgs/k.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid1x1">
                <a href="#"><img src="imgs/l.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid2x1">
                <a href="#"><img src="imgs/m.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid3x1">
                <a href="#"><img src="imgs/n.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}

            <div className="gallery-grid gallery-grid1x1">
                <a href="#"><img src="imgs/o.jpg" alt=""></img></a>
            </div> {/* .gallery-grid */}
        </div> {/* .gallery-wrap */}
    </section> {/* .home-gallery */}

    <footer className="site-footer">
        <div className="footer-widgets">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="foot-about">
                            <a className="foot-logo" href="#"><img src="imgs/foot-logo.png" alt=""></img></a>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. </p>
                        </div> {/* .foot-about */}
                    </div> {/* .col */}

                    <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                        <div className="foot-contact">
                            <h2>Contact Us</h2>

                            <ul>
                                <li>Email: info.deertcreative@gmail.com</li>
                                <li>Phone: (+88) 111 555 666</li>
                                <li>Address: 40 Baria Sreet 133/2 NewYork City, US</li>
                            </ul>
                        </div> {/* .foot-contact */}
                    </div> {/* .col */}

                    <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                        <div className="quick-links flex flex-wrap">
                            <h2 className="w-100">Quick Links</h2>

                            <ul className="w-50">
                                <li><a href="#">About </a></li>
                                <li><a href="#">Terms of Use </a></li>
                                <li><a href="#">Privacy Policy </a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>

                            <ul className="w-50">
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Forums</a></li>
                                <li><a href="#">Language Packs</a></li>
                                <li><a href="#">Release Status</a></li>
                            </ul>
                        </div> {/* .quick-links */}
                    </div> {/* .col */}

                    <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                        <div className="follow-us">
                            <h2>Follow Us</h2>

                            <ul className="follow-us flex flex-wrap align-items-center">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            </ul>
                        </div> {/* .quick-links */}
                    </div> {/* .col */}
                </div> {/* .row */}
            </div> {/* .container */}
        </div> {/* .footer-widgets */}
    </footer> {/* .site-footer */}
    </div>
    );
  }
}

export default Home;
