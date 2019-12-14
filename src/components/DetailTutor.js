/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';

class DetailTutor extends Component {
  render() {
    return (
      <>
        <div class="container col-12 col-lg-8">
          <div class="single-course-wrap">
            <div class="instructors-info ml-5">
              <header class="entry-heading">
                <h2 class="entry-title">Thông tin chi tiết</h2>
              </header>
              {/* .entry-heading */}

              <div className="instructor-short-info flex flex-wrap">
                <div className="instructors-stats">
                  <img src="images/instructor.jpg" alt="" />

                  <ul className="p-0 m-0 mt-3">
                    <li>
                      <i className="fa fa-star" /> 4.7 .7 Average rating
                    </li>
                    <li>
                      <i className="fa fa-comment" /> 25,182 Reviews
                    </li>
                    <li>
                      <i className="fa fa-user" /> 11,085 Học sinh
                    </li>
                  </ul>
                </div>
                {/* .instructors-stats */}

                <div className="instructors-details">
                  <div className="course-teacher mt-3">
                    Tên Giáo Viên: <a>Ms. Lara Croft</a>
                  </div>
                  {/* .course-teacher */}

                  <div className="course-teacher mt-3">
                    Nơi Ở: <a>48 Bùi Thị Xuân</a>
                  </div>

                  <div className="entry-content mt-3">
                    <p>
                      Hi! I am Colt. I am a developer with a serious love for
                      teaching. I have spent the last few years teaching people
                      to program at 2 different immersive bootcamps where I have
                      helped hundreds of people become web developers and change
                      their lives. My graduates work at companies like Google,
                      Salesforce, and Square.
                    </p>
                  </div>

                  <div className="single-course-cont-section">
                    <h2>Kỹ Năng</h2>

                    <ul className="p-0 m-0 green-ticked">
                      <li>Learn C++, the games industry standard language.</li>
                      <li>
                        Develop strong and transferrable problem solving skills.
                      </li>
                      <li>
                        Gain an excellent knowledge of modern game development.
                      </li>
                      <li>
                        Learn how object oriented programming works in practice.
                      </li>
                      <li>
                        Gain a more fundamental understanding of computer
                        operation.
                      </li>
                    </ul>
                  </div>
                  {/* .entry-content */}
                </div>
                {/* .instructors-details */}
              </div>
              {/* .instructor-short-info */}
            </div>
            {/* .instructors-info */}
            <div className="buy-course ml-5 mt-3 mb-2">
              <a className="btn">Thuê</a>
            </div>
          </div>
          {/* .single-course-wrap */}
        </div>
        {/* .col */}
      </>
    );
  }
}

export default DetailTutor;
