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
      listUser: [],
      listSkill: [],
      numberPage: 0,
      isActive1: true,
      isActive2: false
    };
    this.handleSortIncrease = this.handleSortIncrease.bind(this);
    this.handleSortDecrease = this.handleSortDecrease.bind(this);
    this.handleChoseSkill = this.handleChoseSkill.bind(this);
  }

  componentDidMount() {
    let res = true;
    fetch('https://stormy-ridge-33799.herokuapp.com/tutors', {
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
            listUser: response.data
          });
        }
        res = true;
      });

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

  handleChangeNumberPage1() {
    this.setState({
      numberPage: 0,
      isActive1: true,
      isActive2: false
    });
  }

  handleChangeNumberPage2() {
    this.setState({
      numberPage: 1,
      isActive2: true,
      isActive1: false
    });
  }

  render() {
    const {
      listUser,
      listSkill,
      numberPage,
      isActive1,
      isActive2
    } = this.state;
    let listUserPage = null;
    if (numberPage * 6 + 6 >= listUser.length) {
      listUserPage = listUser.slice(numberPage * 6);
    } else {
      listUserPage = listUser.slice(numberPage * 6, 6);
    }

    const mapListUser = listUserPage.map(user => <Tutor user={user}></Tutor>);

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
                    <li className={isActive1 ? 'active' : 'null'}>
                      <a onClick={() => this.handleChangeNumberPage1()}>1</a>
                    </li>
                    <li className={isActive2 ? 'active' : 'null'}>
                      <a onClick={() => this.handleChangeNumberPage2()}>2</a>
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
