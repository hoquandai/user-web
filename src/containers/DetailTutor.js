import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';

class DetailTutor extends Component {
  render() {
    return (
      <>
        <div class="col-12 col-lg-8">
          <div class="single-course-wrap">
            <div class="instructors-info ml-5">
              <header class="entry-heading">
                <h2 class="entry-title">Instructors</h2>
              </header>
              {/* .entry-heading */}

              <div class="instructor-short-info flex flex-wrap">
                <div class="instructors-stats">
                  <img src="images/instructor.jpg" alt=""></img>

                  <ul class="p-0 m-0 mt-3">
                    <li>
                      <i class="fa fa-star"></i> 4.7 .7 Average rating
                    </li>
                    <li>
                      <i class="fa fa-comment"></i> 25,182 Reviews
                    </li>
                    <li>
                      <i class="fa fa-user"></i> 11,085 Học sinh
                    </li>
                  </ul>
                </div>
                {/* .instructors-stats */}

                <div class="instructors-details">
                  <div class="course-teacher mt-3">
                    Tên Giáo Viên: <a>Ms. Lara Croft</a>
                  </div>
                  {/* .course-teacher */}

                  <div class="course-teacher mt-3">
                    Nơi Ở: <a>48 Bùi Thị Xuân</a>
                  </div>

                  <div class="entry-content mt-3">
                    <p>
                      Hi! I'm Colt. I'm a developer with a serious love for
                      teaching. I've spent the last few years teaching people to
                      program at 2 different immersive bootcamps where I've
                      helped hundreds of people become web developers and change
                      their lives. My graduates work at companies like Google,
                      Salesforce, and Square.
                    </p>
                  </div>

                  <div class="single-course-cont-section">
                    <h2>Kỹ Năng</h2>

                    <ul class="p-0 m-0 green-ticked">
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
            <div class="buy-course ml-5 mt-3">
              <a class="btn">Thuê</a>
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