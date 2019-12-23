/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button } from 'reactstrap';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class Tutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listSkill: []
    };
  }

  componentDidMount() {
    let res = true;
    fetch('https://stormy-ridge-33799.herokuapp.com/skills', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status !== 200) {
          res = false;
        }
        return response.json();
      })
      .then(response => {
        if (res) {
          this.setState({
            listSkill: response.data
          });
        }
        res = true;
      });
  }

  handleViewProfile = () => {
    const { user } = this.props;

    history.push('/detailTutor/id:' + user.id);
    window.location.reload();
  };

  render() {
    const { listSkill } = this.state;
    const { user, page } = this.props;

    const mapSkillTag = user.attributes.skills.map(skill => {
      for (var i = 0; i < listSkill.length; i++) {
        if (skill === listSkill[i].id) {
          return (
            <li>
              <a>{listSkill[i].attributes.name}</a>
            </li>
          );
        }
      }
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
                <img
                  src={
                    user.attributes.image
                      ? 'https://stormy-ridge-33799.herokuapp.com' +
                        user.attributes.image
                      : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                  }
                  alt=""
                  height="200"
                  width="197.75"
                ></img>
              </a>
            </figure>

            <div className="course-content-wrap">
              <header className="entry-header">
                <div className="entry-meta flex align-items-center">
                  <div className="course-author">
                    <a>
                      {user.attributes.name
                        ? user.attributes.name
                        : 'Chưa cập nhập'}
                    </a>
                  </div>

                  <div />
                </div>
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

              {user.attributes.price ? (
                <div className="course-cost">
                  {user.attributes.price
                    ? user.attributes.price
                    : 'Chưa cập nhập'}{' '}
                  VND/h
                </div>
              ) : null}
              <footer className="entry-footer flex justify-content-between align-items-center">
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
