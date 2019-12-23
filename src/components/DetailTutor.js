/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import fetch from 'cross-fetch';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class DetailTutor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailTutor: {
        id: '',
        type: '',
        attributes: {
          name: '',
          email: '',
          dob: '',
          gender: '',
          phone: '',
          city: '',
          price: '',
          desc: '',
          skills: []
        }
      },
      listSkill: [],
      modal: false,

      timeHire: '',
      charge: ''
    };
    this.toggle = this.toggle.bind(this);
    this.handleCheckSchedule = this.handleCheckSchedule.bind(this);
    this.handeChangeTimeHire = this.handeChangeTimeHire.bind(this);
  }

  componentDidMount() {
    const userID = window.location.pathname.split('id:')[1];
    // const token = JSON.parse(localStorage.getItem('userToken')).token;

    let res = true;

    fetch('https://stormy-ridge-33799.herokuapp.com/users/' + userID, {
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
            detailTutor: response.data
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

  toggle() {
    const userProfile = JSON.parse(localStorage.getItem('user'));
    if (!userProfile) {
      history.push('/login');
      window.location.reload();
      return;
    }
    this.setState({
      modal: !this.state.modal
    });
  }

  handleCheckSchedule(e) {
    const { listSchedule } = this.state;
    listSchedule[e.target.id - 1].isChecked = !listSchedule[e.target.id - 1]
      .isChecked;
    this.setState({
      listSchedule: listSchedule
    });
  }

  handleHireTutor(e) {
    e.preventDefault();

    const { hire } = this.props;
    const { detailTutor, charge } = this.state;
    const userProfile = JSON.parse(localStorage.getItem('user'));
    const idTutor = detailTutor.id;
    const idStudent = userProfile.id;
    const classStudent = e.target.ipClass.value;
    const subject = e.target.ipSubjects.value;
    const asdress = e.target.ipAddress.value;
    const schedule = e.target.ipSchedule.value;
    const timeHire = e.target.ipTimeHire.value;

    if (idStudent === idTutor) {
      return;
    }

    var contract = {
      course: classStudent,
      subject: subject,
      addr: asdress,
      schedule: schedule,
      time: timeHire,
      status: 'Đang chờ',
      paid: false,
      tutor_id: idTutor,
      student_id: idStudent,
      price: charge
    };

    hire(contract);

    this.setState({
      modal: !this.state.modal
    });
  }

  handeChangeTimeHire(e) {
    const { detailTutor } = this.state;
    this.setState({
      timeHire: e.target.value,
      charge: e.target.value * detailTutor.attributes.price
    });
  }

  render() {
    // const { detailTutor } = this.props;
    const { detailTutor, timeHire, charge, listSkill } = this.state;
    const mapListSkill = detailTutor.attributes.skills.map(skillOfTutor => {
      for (var i = 0; i < listSkill.length; i++) {
        if (skillOfTutor === listSkill[i].id) {
          return <li>{listSkill[i].attributes.name}</li>;
        }
      }
    });
    return (
      <>
        {// Object.keys(detailTutor).length > 1
        detailTutor ? (
          <div class="container col-12 col-lg-8">
            <div class="single-course-wrap">
              <div class="instructors-info ml-5">
                <header class="entry-heading">
                  <h2 class="entry-title">Thông tin chi tiết</h2>
                </header>
                {/* .entry-heading */}

                <div className="instructor-short-info flex flex-wrap">
                  <div className="instructors-stats">
                    <img
                      src={
                        detailTutor.attributes.image
                          ? 'https://stormy-ridge-33799.herokuapp.com' +
                            detailTutor.attributes.image
                          : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                      }
                      alt=""
                    />

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
                      Tên Giáo Viên:{' '}
                      {detailTutor.attributes.name ? (
                        <a>{detailTutor.attributes.name}</a>
                      ) : null}
                    </div>
                    {/* .course-teacher */}

                    <div className="course-teacher mt-3">
                      Nơi ở:{' '}
                      {detailTutor.attributes.city ? (
                        <a>{detailTutor.attributes.city}</a>
                      ) : null}
                    </div>

                    <div className="course-teacher mt-3">
                      Số điện thoại:{' '}
                      {detailTutor.attributes.phone ? (
                        <a>{detailTutor.attributes.phone}</a>
                      ) : null}
                    </div>
                    <div className="course-teacher mt-3">
                      Giá dạy học (Theo Giờ):{' '}
                      {detailTutor.attributes.price ? (
                        <a>{detailTutor.attributes.price} VND</a>
                      ) : null}
                    </div>

                    <div className="entry-content mt-3">
                      {detailTutor.attributes.intro ? (
                        <p>{detailTutor.attributes.intro}</p>
                      ) : null}
                    </div>

                    <div className="single-course-cont-section">
                      <h2>Kỹ Năng</h2>

                      <ul className="p-0 m-0 green-ticked">{mapListSkill}</ul>
                    </div>
                    {/* .entry-content */}
                  </div>
                  {/* .instructors-details */}
                </div>
                {/* .instructor-short-info */}
              </div>
              {/* .instructors-info */}
              <div className="buy-course ml-5 mt-3 mb-2">
                <a className="btn" onClick={this.toggle}>
                  Thuê
                </a>
                <Modal
                  size="lg"
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <Form row onSubmit={e => this.handleHireTutor(e)}>
                    <ModalHeader toggle={this.toggle}>Thuê gia sư</ModalHeader>
                    <ModalBody>
                      <FormGroup className="row">
                        <Label className="text-success col-sm-2">Gia Sư:</Label>
                        <Label className="col-sm-10">
                          {detailTutor.attributes.name}
                        </Label>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="text-success col-sm-2 mt-2">
                          Lớp:
                        </Label>
                        <div className="col-sm-9">
                          <Input required id="ipClass"></Input>
                        </div>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="text-success col-sm-2 mt-2">
                          Môn:
                        </Label>
                        <div className="col-sm-9">
                          <Input required id="ipSubjects"></Input>
                        </div>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="text-success col-sm-2 mt-2">
                          Địa chỉ dạy:
                        </Label>
                        <div className="col-sm-9">
                          <Input required id="ipAddress"></Input>
                        </div>
                      </FormGroup>

                      <FormGroup className="row">
                        <Label className="text-success col-sm-2 mt-2">
                          Lịch:
                        </Label>
                        <div className="col-sm-9">
                          <Input required id="ipSchedule"></Input>
                        </div>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="text-success col-sm-2">
                          Số giờ thuê:
                        </Label>
                        <div className="col-sm-9">
                          <Input
                            id="ipTimeHire"
                            value={timeHire}
                            onChange={this.handeChangeTimeHire}
                            type="number"
                            required
                          ></Input>
                        </div>
                      </FormGroup>

                      <FormGroup className="row">
                        <Label className="text-success col-sm-2">
                          Chi phí:
                        </Label>
                        <Label id="ipCharge" className="col-sm-9">
                          {charge ? charge : 0}
                          VND
                        </Label>
                      </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                      <Button className="btn" color="primary" type="submit">
                        Xác nhận thuê
                      </Button>{' '}
                      <Button color="secondary" onClick={this.toggle}>
                        đóng
                      </Button>
                    </ModalFooter>
                  </Form>
                </Modal>
              </div>
            </div>
            {/* .single-course-wrap */}
          </div>
        ) : null}
      </>
    );
  }
}

export default DetailTutor;
