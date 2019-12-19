/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import Tutor from '../container/Tutor';

function compare(a, b) {
  if (!a.attributes.price && b.attributes.price) {
    return -1;
  }
  if (!b.attributes.price && a.attributes.price) {
    return 1;
  }
  if (!b.attributes.price && !a.attributes.price) {
    return 0;
  }
  if (a.attributes.price > b.attributes.price) {
    return 1;
  }
  if (a.attributes.price < b.attributes.price) {
    return -1;
  }
  return 0;
}

class ViewAllTuTor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [
        {
          id: '1',
          type: 'user',
          attributes: {
            name: 'Ho Quan Dai',
            image: '/uploads/c0a463163c67a5304fd63f3be1aebef8',
            email: 'hoquandai@example.com',
            dob: '1998-08-08T00:00:00.000Z',
            gender: 'male',
            phone: '033444987',
            city: 'HCM',
            price: 25000,
            skills: [
              {
                id: 1,
                name: 'Math',
                desc: 'Math skills',
                created_at: '2019-12-09T16:37:27.385Z',
                updated_at: '2019-12-09T16:37:27.385Z',
                user_id: 1
              },

              {
                id: 2,
                name: 'Physic',
                desc: 'Physic skills',
                created_at: '2019-12-09T16:37:27.391Z',
                updated_at: '2019-12-09T16:37:27.391Z',
                user_id: 2
              }
            ]
          }
        },
        {
          id: '2',
          type: 'user',
          attributes: {
            name: 'Nhật Tiến',
            image: '/uploads/c0a463163c67a5304fd63f3be1aebef8',
            email: 'nhattien@example.com',
            dob: '1998-08-08T00:00:00.000Z',
            gender: 'male',
            phone: '033444987',
            city: 'HCM',
            price: 30000,
            skills: [
              {
                id: 1,
                name: 'Math',
                desc: 'Math skills',
                created_at: '2019-12-09T16:37:27.385Z',
                updated_at: '2019-12-09T16:37:27.385Z',
                user_id: 1
              },

              {
                id: 2,
                name: 'Physic',
                desc: 'Physic skills',
                created_at: '2019-12-09T16:37:27.391Z',
                updated_at: '2019-12-09T16:37:27.391Z',
                user_id: 2
              }
            ]
          }
        },
        {
          id: '3',
          type: 'user',
          attributes: {
            name: 'abc',
            image: '/uploads/c0a463163c67a5304fd63f3be1aebef8',
            email: 'nhattien@example.com',
            dob: '1998-08-08T00:00:00.000Z',
            gender: 'male',
            phone: '033444987',
            city: 'HCM',
            price: 40000,
            skills: [
              {
                id: 1,
                name: 'Math',
                desc: 'Math skills',
                created_at: '2019-12-09T16:37:27.385Z',
                updated_at: '2019-12-09T16:37:27.385Z',
                user_id: 1
              },

              {
                id: 2,
                name: 'Physic',
                desc: 'Physic skills',
                created_at: '2019-12-09T16:37:27.391Z',
                updated_at: '2019-12-09T16:37:27.391Z',
                user_id: 2
              }
            ]
          }
        },
        {
          id: '4',
          type: 'user',
          attributes: {
            name: 'xyz',
            image: '/uploads/c0a463163c67a5304fd63f3be1aebef8',
            email: 'nhattien@example.com',
            dob: '1998-08-08T00:00:00.000Z',
            gender: 'male',
            phone: '033444987',
            city: 'HCM',
            price: 50000,
            skills: [
              {
                id: 1,
                name: 'Math',
                desc: 'Math skills',
                created_at: '2019-12-09T16:37:27.385Z',
                updated_at: '2019-12-09T16:37:27.385Z',
                user_id: 1
              },

              {
                id: 2,
                name: 'Physic',
                desc: 'Physic skills',
                created_at: '2019-12-09T16:37:27.391Z',
                updated_at: '2019-12-09T16:37:27.391Z',
                user_id: 2
              }
            ]
          }
        },
        {
          id: '5',
          type: 'user',
          attributes: {
            name: 'dfs',
            image: '/uploads/c0a463163c67a5304fd63f3be1aebef8',
            email: 'nhattien@example.com',
            dob: '1998-08-08T00:00:00.000Z',
            gender: 'male',
            phone: '033444987',
            city: 'HCM',
            price: 15000,
            skills: [
              {
                id: 1,
                name: 'Math',
                desc: 'Math skills',
                created_at: '2019-12-09T16:37:27.385Z',
                updated_at: '2019-12-09T16:37:27.385Z',
                user_id: 1
              },

              {
                id: 2,
                name: 'Physic',
                desc: 'Physic skills',
                created_at: '2019-12-09T16:37:27.391Z',
                updated_at: '2019-12-09T16:37:27.391Z',
                user_id: 2
              }
            ]
          }
        },
        {
          id: '6',
          type: 'user',
          attributes: {
            name: 'kjmdf',
            image: '/uploads/c0a463163c67a5304fd63f3be1aebef8',
            email: 'nhattien@example.com',
            dob: '1998-08-08T00:00:00.000Z',
            gender: 'male',
            phone: '033444987',
            city: 'HCM',
            price: 20000,
            skills: [
              {
                id: 1,
                name: 'Math',
                desc: 'Math skills',
                created_at: '2019-12-09T16:37:27.385Z',
                updated_at: '2019-12-09T16:37:27.385Z',
                user_id: 1
              },

              {
                id: 2,
                name: 'Physic',
                desc: 'Physic skills',
                created_at: '2019-12-09T16:37:27.391Z',
                updated_at: '2019-12-09T16:37:27.391Z',
                user_id: 2
              }
            ]
          }
        }
      ],

      listSkill: [
        {
          id: '1',
          type: 'skill',
          attributes: {
            name: 'Math',
            desc: 'Math skills'
          }
        },
        {
          id: '2',
          type: 'skill',
          attributes: {
            name: 'Physic',
            desc: 'Physic skills'
          }
        }
      ]
    };
    this.handleSortIncrease = this.handleSortIncrease.bind(this);
    this.handleSortDecrease = this.handleSortDecrease.bind(this);
    this.handleChoseSkill = this.handleChoseSkill.bind(this);
  }

  handleSortIncrease() {
    this.setState({
      listUser: this.state.listUser.sort(compare)
    });
  }

  handleSortDecrease() {
    this.setState({
      listUser: this.state.listUser.sort(compare).reverse()
    });
  }

  //dùng để fetch lấy danh sách người dạy có kỹ năng theo yêu cầu
  handleChoseSkill(e) {
    console.log(e.id);
  }

  render() {
    const { listUser, listSkill } = this.state;
    const mapListUser = listUser.map(user => <Tutor user={user}></Tutor>);
    const mapListSkill = listSkill.map(skill => {
      return (
        <li key={skill.id}>
          <a className="btn" onClick={() => this.handleChoseSkill(skill)}>
            {skill.attributes.name}
          </a>
        </li>
      );
    });
    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumbs">
                <ul class="flex flex-wrap align-items-center p-0 m-0">
                  <li>
                    <a>
                      <i class="fa fa-home"></i> Trang Chủ
                    </a>
                  </li>
                  <li>Gia Sư</li>
                </ul>
              </div>{' '}
              {/* .breadcrumbs  */}
            </div>{' '}
            {/* .col  */}
          </div>{' '}
          {/* .row  */}
          <div class="row">
            <div class="col-12 col-lg-8">
              <div class="featured-courses courses-wrap">
                <div class="row mx-m-25">{mapListUser}</div> {/* .row  */}
              </div>{' '}
              {/* .featured-courses  */}
              <div class="pagination flex flex-wrap justify-content-between align-items-center">
                <div class="col-12 col-lg-4 order-2 order-lg-1 mt-3 mt-lg-0">
                  <ul class="flex flex-wrap align-items-center order-2 order-lg-1 p-0 m-0">
                    <li class="active">
                      <a>1</a>
                    </li>
                    <li>
                      <a>2</a>
                    </li>
                    <li>
                      <a>3</a>
                    </li>
                    <li>
                      <a>
                        <i class="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-12 flex justify-content-start justify-content-lg-end col-lg-8 order-1 order-lg-2">
                  <div class="pagination-results flex flex-wrap align-items-center">
                    <p class="m-0">Showing 1–3 of 12 results</p>

                    <form>
                      <select>
                        <option>Show: 06</option>
                        <option>Show: 12</option>
                        <option>Show: 18</option>
                        <option>Show: 24</option>
                      </select>
                    </form>
                  </div>{' '}
                  {/* .pagination-results  */}
                </div>
              </div>{' '}
              {/* .pagination  */}
            </div>{' '}
            {/* .col  */}
            <div class="col-12 col-lg-4">
              <div class="sidebar">
                <div class="search-widget">
                  <form class="flex flex-wrap align-items-center">
                    <input type="search" placeholder="Search..."></input>
                    <button
                      type="submit"
                      class="flex justify-content-center align-items-center"
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </form>{' '}
                  {/* .flex  */}
                </div>{' '}
                {/* .search-widget  */}
                <div class="cat-links">
                  <h2>Theo giá</h2>
                  <ul class="p-0 m-0">
                    <li>
                      <a className="btn" onClick={this.handleSortIncrease}>
                        Giá Tăng
                      </a>
                    </li>
                    <li>
                      <a className="btn" onClick={this.handleSortDecrease}>
                        Giá Giảm
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="cat-links">
                  <h2>Kỹ năng</h2>

                  <ul class="p-0 m-0">{mapListSkill}</ul>
                </div>{' '}
                {/* .cat-links  */}
                <div class="latest-courses">
                  <h2>Người nổi bật</h2>

                  <ul class="p-0 m-0">
                    <li class="flex flex-wrap justify-content-between align-items-center">
                      <img src="images/t-1.jpg" alt=""></img>
                      <div class="content-wrap">
                        <h3>
                          <a>The Complete Financial Analyst Training</a>
                        </h3>

                        <div class="course-cost free-cost">Free</div>
                      </div>{' '}
                      {/* .content-wrap  */}
                    </li>

                    <li class="flex flex-wrap justify-content-between align-items-center">
                      <img src="images/t-2.jpg" alt=""></img>
                      <div class="content-wrap">
                        <h3>
                          <a>Complete Java Masterclass</a>
                        </h3>

                        <div class="course-cost free-cost">Free</div>
                      </div>{' '}
                      {/* .content-wrap  */}
                    </li>

                    <li class="flex flex-wrap justify-content-between align-items-center">
                      <img src="images/t-3.jpg" alt=""></img>
                      <div class="content-wrap">
                        <h3>
                          <a>The Complete Digital Marketing Course</a>
                        </h3>

                        <div class="course-cost">$24</div>
                      </div>{' '}
                      {/* .content-wrap  */}
                    </li>

                    <li class="flex flex-wrap justify-content-between align-items-center">
                      <img src="images/t-4.jpg" alt=""></img>
                      <div class="content-wrap">
                        <h3>
                          <a>Photoshop CC 2018 MasterClass</a>
                        </h3>

                        <div class="course-cost">$18</div>
                      </div>{' '}
                      {/* .content-wrap  */}
                    </li>
                  </ul>
                </div>{' '}
                {/* .latest-courses  */}
                <div class="ads">
                  <img src="images/ads.jpg" alt=""></img>
                </div>{' '}
                {/* .ads  */}
                <div class="popular-tags">
                  <h2>Kỹ Năng Phổ Biến</h2>

                  <ul class="flex flex-wrap align-items-center p-0 m-0">
                    <li>
                      <a>Toán</a>
                    </li>
                    <li>
                      <a>Lý</a>
                    </li>
                    <li>
                      <a>Hóa</a>
                    </li>
                  </ul>
                </div>{' '}
                {/* .popular-tags  */}
              </div>{' '}
              {/* .sidebar  */}
            </div>{' '}
            {/* .col  */}
          </div>{' '}
          {/* .row  */}
        </div>
      </>
    );
  }
}

export default ViewAllTuTor;
