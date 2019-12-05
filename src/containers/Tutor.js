/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import '../App.css';
import { Link } from 'react-router-dom';

class Tutor extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-6 col-lg-4 px-25">
        <div className="course-content">
          <figure className="course-thumbnail">
            <a href="#">
              <img src="images/1.jpg" alt=""></img>
            </a>
          </figure>

          <div className="course-content-wrap">
            <header className="entry-header">
              <div className="entry-meta flex align-items-center">
                <div className="course-author">
                  <a href="#">
                    <Link to="/detailTutor">Ms. Lara Croft</Link>
                  </a>
                </div>

                <div></div>
              </div>
              <h2 className="entry-title">
                <a href="#">The Complete Android Developer Course</a>
              </h2>
            </header>

            <footer className="entry-footer flex justify-content-between align-items-center">
              <div className="course-cost">
                $45 <span className="price-drop">$68</span>
              </div>{' '}
              {/* .course-cost */}
              <div className="course-ratings flex justify-content-end align-items-center">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star-o"></span>

                <span className="course-ratings-count">(4 votes)</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Tutor;
