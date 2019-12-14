/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button } from 'reactstrap';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class Tutor extends React.Component {
  handleViewProfile = () => {
    history.push('/detailTutor');
    window.location.reload();
  };

  render() {
    const { user, page } = this.props;
    const mapSkillTag = user.attributes.skills.map(skill => {
      return (
        <li>
          <a>{skill.name}</a>
        </li>
      );
    });

    return (
      <>
        <div
          className={`col-12 col-md-6 px-25 ${
            page === 'home' ? 'col-lg-4' : null
          }`}
        >
          <div className="course-content">
            <figure className="course-thumbnail">
              <a>
                <img src="images/1.jpg" alt=""></img>
              </a>
            </figure>

            <div className="course-content-wrap">
              <header className="entry-header">
                <div className="entry-meta flex align-items-center">
                  <div className="course-author">
                    <a>
                      <Link to="/detailTutor">
                        {user.attributes.name
                          ? user.attributes.name
                          : 'Chưa cập nhập'}
                      </Link>
                    </a>
                  </div>

                  <div />
                </div>
                <h2 className="entry-title">
                  <a>Nhiệt tình, và thân thiện với học sinh</a>
                </h2>
              </header>

              <p className="address">
                Địa Chỉ:{' '}
                <span>
                  {user.attributes.city
                    ? user.attributes.city
                    : 'Chưa cập nhập'}
                </span>
              </p>

              <div class="Skill-tags border-top">
                <ul class="flex flex-wrap align-items-center p-0 m-0 mt-2">
                  {mapSkillTag}
                </ul>
              </div>

              <footer className="entry-footer flex justify-content-between align-items-center">
                {user.attributes.price ? (
                  <div className="course-cost">
                    {user.attributes.price
                      ? user.attributes.price
                      : 'Chưa cập nhập'}{' '}
                    VND/h
                  </div>
                ) : null}

                <div className="course-ratings flex justify-content-end align-items-center">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star-o" />

                  <span className="course-ratings-count">(4 votes)</span>
                </div>
              </footer>

              <div className="ViewProfile">
                <Button onClick={this.handleViewProfile}>Chi Tiết</Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Tutor;
