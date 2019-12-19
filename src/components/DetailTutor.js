/* eslint-disable jsx-a11y/anchor-is-valid */
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

class DetailTutor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailTutor: {
        id: '1',
        type: 'user',
        attributes: {
          name: 'Ho Quan Dai',
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
      modal: false,

      timeHire: '',
      charge: ''
    };
    this.toggle = this.toggle.bind(this);
    this.handleCheckSchedule = this.handleCheckSchedule.bind(this);
    this.handleHireTutor = this.handleHireTutor.bind(this);
    this.handeChangeTimeHire = this.handeChangeTimeHire.bind(this);
  }

  toggle() {
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
    // const { DetailTutor } = this.state;
    // const userProfile = JSON.parse(localStorage.getItem('user'));
    // const idTutor = DetailTutor.id;
    // const idStudent = userProfile.id;
    // const classStudent = e.target.ipClass.value;
    // const subject = e.target.ipSubjects.value;
    // const asdress = e.target.ipAddress.value;
    // const schedule = e.target.ipSchedule.value;
    // const timeHire = e.target.ipTimeHire.value;
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
    const { detailTutor, timeHire, charge } = this.state;
    const mapListSkill = detailTutor.attributes.skills.map(skill => {
      return <li>{skill.name}</li>;
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
                      Tên Giáo Viên:{' '}
                      {detailTutor.attributes.name ? (
                        <a>{detailTutor.attributes.name}</a>
                      ) : null}
                    </div>
                    {/* .course-teacher */}

                    <div className="course-teacher mt-3">
                      Nơi Ở:{' '}
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
                      Giá dạy học:{' '}
                      {detailTutor.attributes.price ? (
                        <a>{detailTutor.attributes.price} VND/h</a>
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
                  <Form row onSubmit={this.handleHireTutor}>
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
