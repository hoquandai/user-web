/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import { Form, Button, Nav } from 'reactstrap';
import { FaUser } from 'react-icons/fa';
import Tutor from './Tutor';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 align-content-lg-stretch">
                <header className="heading">
                  <h2 className="entry-title">Thông tin Ezuca</h2>

                  <p>
                    Đội ngũ gia sư được đảm bảo chất lượng, kiểm soát chặt chẽ
                  </p>
                </header>{' '}
                {/* .heading */}
                <div className="entry-content ezuca-stats">
                  <div className="stats-wrap flex flex-wrap justify-content-lg-between">
                    <div className="stats-count">
                      50<span>M+</span>
                      <p>ĐỘI NGŨ GIẢNG VIÊN</p>
                    </div>{' '}
                    {/* .stats-count */}
                    <div className="stats-count">
                      45<span>M+</span>
                      <p>HỌC SINH ĐANG THEO HỌC</p>
                    </div>{' '}
                    {/* .stats-count */}
                    <div className="stats-count">
                      20<span>+</span>
                      <p>QUỐC GIA</p>
                    </div>{' '}
                    {/* .stats-count */}
                  </div>{' '}
                  {/* .stats-wrap */}
                </div>{' '}
                {/* .ezuca-stats */}
              </div>{' '}
              {/* .col */}
              <div className="col-12 col-lg-6 flex align-content-center mt-5 mt-lg-0">
                <div className="ezuca-video position-relative">
                  <img src="images/video-screenshot.png" alt=""></img>
                </div>{' '}
                {/* .ezuca-video */}
              </div>{' '}
              {/* .col */}
            </div>{' '}
            {/* .row */}
          </div>{' '}
          {/* .container */}
        </section>{' '}
        {/* .about-section */}
        <section className="featured-courses vertical-column courses-wrap">
          <div className="container">
            <div className="row mx-m-25">
              <div className="col-12 px-25">
                <header className="heading flex flex-wrap justify-content-between align-items-center">
                  <h2 className="entry-title">Gia Sư Nổi Bật</h2>
                  <Nav className="courses-menu mt-3 mt-lg-0">
                    <ul className="flex flex-wrap justify-content-md-end align-items-center">
                      <li className="active">
                        <a href="#">Tất Cả</a>
                      </li>
                      <li>
                        <a href="#">Toán</a>
                      </li>
                      <li>
                        <a href="#">Lý</a>
                      </li>
                      <li>
                        <a href="#">Hóa</a>
                      </li>
                      <li>
                        <a href="#">Sinh</a>
                      </li>
                    </ul>
                  </Nav>{' '}
                  {/* .courses-menu */}
                </header>{' '}
                {/* .heading */}
              </div>{' '}
              {/* .col */}
              <Tutor></Tutor>
              <Tutor></Tutor>
              <Tutor></Tutor>
              <Tutor></Tutor>
              <Tutor></Tutor>
              <Tutor></Tutor>
              <div className="col-12 px-25 flex justify-content-center">
                <a className="btn" href="#">
                  Xem tất cả
                </a>
              </div>{' '}
              {/* .col */}
            </div>{' '}
            {/* .row */}
          </div>{' '}
          {/* .container */}
        </section>{' '}
        {/* .courses-wrap */}
        <section className="latest-news-events">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <header className="heading flex justify-content-between align-items-center">
                  <h2 className="entry-title">Tin Tức Mới & Sự Kiện</h2>
                </header>{' '}
                {/* .heading */}
              </div>{' '}
              {/* .col */}
              <div className="col-12 col-lg-6">
                <div className="featured-event-content">
                  <figure className="event-thumbnail position-relative m-0">
                    <a href="#">
                      <img src="images/event-1.jpg" alt=""></img>
                    </a>
                    <div className="posted-date position-absolute">
                      <div className="day">23</div>
                      <div className="month">mar</div>
                    </div>{' '}
                    {/* .posted-date */}
                  </figure>{' '}
                  {/* .event-thumbnail */}
                  <header className="entry-header flex flex-wrap align-items-center">
                    <h2 className="entry-title">
                      <a href="#">
                        The Complete Financial Analyst Training & Investing
                        Course
                      </a>
                    </h2>

                    <div className="event-location">
                      <i className="fa fa-map-marker"></i>40 Baria Sreet 133/2
                      NewYork City, US
                    </div>

                    <div className="event-duration">
                      <i className="fa fa-calendar"></i>10 Dec - 12 dec
                    </div>
                  </header>{' '}
                  {/* .entry-header */}
                </div>{' '}
                {/* .featured-event-content */}
              </div>{' '}
              {/* .col */}
              <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                <div className="event-content flex flex-wrap justify-content-between align-content-stretch">
                  <figure className="event-thumbnail">
                    <a href="#">
                      <img src="images/event-2.jpg" alt=""></img>
                    </a>
                  </figure>{' '}
                  {/* .course-thumbnail */}
                  <div className="event-content-wrap">
                    <header className="entry-header">
                      <div className="posted-date">
                        <i className="fa fa-calendar"></i> 22 Mar 2018
                      </div>{' '}
                      {/* .posted-date */}
                      <h2 className="entry-title">
                        <a href="#">Personalized online learning experience</a>
                      </h2>
                      <div className="entry-meta flex flex-wrap align-items-center">
                        <div className="post-author">
                          <a href="#">Ms. Lara Croft </a>
                        </div>

                        <div className="post-comments">02 Comments </div>
                      </div>{' '}
                      {/* .entry-meta */}
                    </header>{' '}
                    {/* .entry-header */}
                    <div className="entry-content">
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt.
                      </p>
                    </div>{' '}
                    {/* .entry-content */}
                  </div>{' '}
                  {/* .event-content-wrap */}
                </div>{' '}
                {/* .event-content */}
                <div className="event-content flex flex-wrap justify-content-between align-content-lg-stretch">
                  <figure className="event-thumbnail">
                    <a href="#">
                      <img src="images/event-3.jpg" alt=""></img>
                    </a>
                  </figure>{' '}
                  {/* .course-thumbnail */}
                  <div className="event-content-wrap">
                    <header className="entry-header">
                      <div className="posted-date">
                        <i className="fa fa-calendar"></i> 22 Mar 2018
                      </div>{' '}
                      {/* .posted-date */}
                      <h2 className="entry-title">
                        <a href="#">
                          Which investment project should my company choose?
                        </a>
                      </h2>
                      <div className="entry-meta flex flex-wrap align-items-center">
                        <div className="post-author">
                          <a href="#">Ms. Lara Croft </a>
                        </div>

                        <div className="post-comments">02 Comments </div>
                      </div>{' '}
                      {/* .entry-meta */}
                    </header>{' '}
                    {/* .entry-header */}
                    <div className="entry-content">
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt.
                      </p>
                    </div>{' '}
                    {/* .entry-content */}
                  </div>{' '}
                  {/* .event-content-wrap */}
                </div>{' '}
                {/* .event-content */}
              </div>{' '}
              {/* .col */}
            </div>{' '}
            {/* .row */}
          </div>{' '}
          {/* .container */}
        </section>{' '}
        {/* .latest-news-events */}
        <section className="home-gallery">
          <div className="gallery-wrap flex flex-wrap">
            <div className="gallery-grid gallery-grid1x1">
              <a href="#">
                <img src="images/a.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid1x1">
              <a href="#">
                <img src="images/b.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid2x2">
              <a href="#">
                <img src="images/c.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid1x1">
              <a href="#">
                <img src="images/d.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid1x1">
              <a href="#">
                <img src="images/e.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid2x1">
              <a href="#">
                <img src="images/g.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid2x1">
              <a href="#">
                <img src="images/h.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid1x1">
              <a href="#">
                <img src="images/i.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid2x2 ">
              <a href="#">
                <img src="images/j.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid1x1">
              <a href="#">
                <img src="images/k.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid1x1">
              <a href="#">
                <img src="images/l.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid2x1">
              <a href="#">
                <img src="images/m.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid3x1">
              <a href="#">
                <img src="images/n.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
            <div className="gallery-grid gallery-grid1x1">
              <a href="#">
                <img src="images/o.jpg" alt=""></img>
              </a>
            </div>{' '}
            {/* .gallery-grid */}
          </div>{' '}
          {/* .gallery-wrap */}
        </section>{' '}
        {/* .home-gallery */}
      </div>
    );
  }
}

export default Home;
