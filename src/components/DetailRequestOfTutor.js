import React, { Component } from 'react';
import {
  Container,
  CardBody,
  CardHeader,
  Row,
  Col,
  Card,
  Badge,
  Label,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  Input
} from 'reactstrap';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  ButtonGroup,
  Button
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import PaymentIcon from '@material-ui/icons/Payment';
import '../Request.css';

class DetailRequestOfTutor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestDetail: {
        id: '',
        type: '',
        attributes: {
          course: '',
          subject: '',
          addr: '',
          schedule: '',
          time: '',
          status: '',
          paid: '',
          tutor_id: '',
          price: '',
          student_id: '',
          created_at: '',
          updated_at: ''
        }
      },
      tutor: {
        id: '',
        type: '',
        attributes: {
          name: '',
          email: '',
          dob: '',
          gender: '',
          phone: '',
          city: '',
          skills: [],
          price: '',
          desc: '',
          image: ''
        }
      },
      student: {
        id: '',
        type: '',
        attributes: {
          name: '',
          email: '',
          dob: '',
          gender: '',
          phone: '',
          city: '',
          skills: [],
          price: '',
          desc: '',
          image: ''
        }
      },
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const contractID = window.location.pathname.split('id:')[1];
    // const token = JSON.parse(localStorage.getItem('userToken')).token;

    let res = true;
    //Lấy thông tin chi tiết hợp đồng
    fetch('https://stormy-ridge-33799.herokuapp.com/contracts/' + contractID, {
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
          let res1 = true;
          let res2 = true;

          //Lấy thông tin gia sư
          fetch(
            'https://stormy-ridge-33799.herokuapp.com/users/' +
              String(response.data.attributes.tutor_id),
            {
              method: 'get',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            }
          )
            .then(response => {
              if (response.status !== 200) {
                res1 = false;
              }
              return response.json();
            })
            .then(response => {
              if (res1) {
                this.setState({
                  tutor: response.data
                });
              }
              res1 = true;
            });

          //Lấy thông tin học sinh
          fetch(
            'https://stormy-ridge-33799.herokuapp.com/users/' +
              String(response.data.attributes.student_id),
            {
              method: 'get',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            }
          )
            .then(response => {
              if (response.status !== 200) {
                res2 = false;
              }
              return response.json();
            })
            .then(response => {
              if (res2) {
                this.setState({
                  student: response.data
                });
              }
              res1 = true;
            });

          this.setState({
            requestDetail: response.data
          });
        }
        res = true;
      });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleAcceptClick() {
    const { updateContract } = this.props;
    const { requestDetail } = this.state;
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    var contract = { status: 'Đang học' };

    updateContract(userToken.token, requestDetail.id, contract);
    requestDetail.attributes.status = 'Đang học';
    this.setState({
      requestDetail: requestDetail
    });
  }

  handleRejectClick() {
    const { updateContract } = this.props;
    const { requestDetail } = this.state;
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    var contract = { status: 'Đã từ chối' };

    updateContract(userToken.token, requestDetail.id, contract);
    requestDetail.attributes.status = 'Đã từ chối';
    this.setState({
      requestDetail: requestDetail
    });
  }

  handleCancelClick() {
    const { updateContract } = this.props;
    const { requestDetail } = this.state;
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    var contract = { status: 'Đã hủy' };

    updateContract(userToken.token, requestDetail.id, contract);
    requestDetail.attributes.status = 'Đã hủy';
    this.setState({
      requestDetail: requestDetail
    });
  }

  handleCompleteClick() {
    const { updateContract } = this.props;
    const { requestDetail } = this.state;
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    var contract = { status: 'Hoàn thành' };

    updateContract(userToken.token, requestDetail.id, contract);
    requestDetail.attributes.status = 'Hoàn thành';
    this.setState({
      requestDetail: requestDetail
    });
  }

  handlePaymentClick() {
    const { updateContract } = this.props;
    const { requestDetail } = this.state;
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    var contract = { paid: true };

    updateContract(userToken.token, requestDetail.id, contract);
    requestDetail.attributes.paid = true;
    this.setState({
      requestDetail: requestDetail
    });
  }

  handleComplain(e) {
    e.preventDefault();

    const { updateContract } = this.props;
    const { requestDetail } = this.state;
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    const ipComplaint = e.target.ipComplaint.value;
    var contract = { status: 'Đang khiếu nại', complaint: ipComplaint };

    updateContract(userToken.token, requestDetail.id, contract);
    requestDetail.attributes.status = 'Đang khiếu nại';
    requestDetail.attributes.complaint = ipComplaint;
    this.setState({
      requestDetail: requestDetail,
      modal: !this.state.modal
    });
  }

  render() {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const { requestDetail, tutor, student } = this.state;
    return (
      <div className="container mt-5">
        <div class="container instructors-info ml-5">
          <header class="entry-heading">
            <h2 class="entry-title">Chi tiết hợp đồng</h2>
          </header>
          <Row className="mt-4">
            <Col sm={8} className="noMargin noPadding">
              <Card>
                <CardBody>
                  <Container>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field">Ngày tạo:</div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail">
                          {requestDetail.attributes.created_at}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">Lớp</div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {requestDetail.attributes.course}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Môn học:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {requestDetail.attributes.subject}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Địa chỉ:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {requestDetail.attributes.addr}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">Lịch:</div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {requestDetail.attributes.schedule}
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Số giờ:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {requestDetail.attributes.time} giờ
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Giá thuê:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          100000/giờ
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Chi phí:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {requestDetail.attributes.price}
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Trạng thái:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {requestDetail.attributes.status === 'Đang chờ' ? (
                            <Badge pill color="warning">
                              Đang chờ
                            </Badge>
                          ) : null}

                          {requestDetail.attributes.status === 'Đã từ chối' ? (
                            <Badge pill color="success">
                              Đã từ chối
                            </Badge>
                          ) : null}

                          {requestDetail.attributes.status === 'Đã hủy' ? (
                            <Badge pill color="danger">
                              Đã hủy
                            </Badge>
                          ) : null}

                          {requestDetail.attributes.status === 'Đang học' ? (
                            <Badge pill color="primary">
                              Đang học
                            </Badge>
                          ) : null}

                          {requestDetail.attributes.status ===
                          'Đang khiếu nại' ? (
                            <Badge pill color="danger">
                              Đang khiếu nại
                            </Badge>
                          ) : null}

                          {requestDetail.attributes.status === 'Hoàn thành' ? (
                            <Badge pill color="success">
                              Hoàn thành
                            </Badge>
                          ) : null}

                          {requestDetail.attributes.status ===
                          'Đã hoàn tiền' ? (
                            <Badge pill color="success">
                              Đã hoàn tiền
                            </Badge>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Thanh toán:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {requestDetail.attributes.paid ? (
                            <Badge color="success">Đã thanh toán</Badge>
                          ) : (
                            <Badge color="danger">Chưa thanh toán</Badge>
                          )}
                        </div>
                      </Col>
                    </Row>
                    {currentUser.id ===
                    String(requestDetail.attributes.tutor_id) ? (
                      <Row>
                        <Col>
                          <ButtonGroup className="mt-5">
                            {requestDetail.attributes.status === 'Đang chờ' ? (
                              <>
                                <Button
                                  className="mr-5"
                                  style={{
                                    color: '#1D4575',
                                    background: null,
                                    border: '1px solid #1D4575',
                                    borderRadius: 6
                                  }}
                                  startIcon={<DoneIcon />}
                                  onClick={() => this.handleAcceptClick()}
                                >
                                  Chấp nhận
                                </Button>
                                <Button
                                  color="outlined"
                                  style={{
                                    color: '#F70000',
                                    background: null,
                                    border: '1px solid #F70000',
                                    borderRadius: 6
                                  }}
                                  startIcon={<CloseIcon />}
                                  onClick={() => this.handleRejectClick()}
                                >
                                  Từ chối
                                </Button>
                              </>
                            ) : null}
                            {requestDetail.attributes.status ===
                              'Đang khiếu nại' ||
                            requestDetail.attributes.status === 'Đang học' ? (
                              <Button
                                color="outlined"
                                style={{
                                  color: '#F70000',
                                  background: null,
                                  border: '1px solid #F70000',
                                  borderRadius: 6
                                }}
                                startIcon={<CloseIcon />}
                                onClick={() => this.handleCancelClick()}
                              >
                                Hủy
                              </Button>
                            ) : null}
                          </ButtonGroup>
                        </Col>
                      </Row>
                    ) : (
                      <Row>
                        <Col>
                          <ButtonGroup className="mt-5">
                            {requestDetail.attributes.status !== 'Hoàn thành' &&
                            requestDetail.attributes.status !== 'Đang chờ' ? (
                              <Button
                                className="mr-5"
                                style={{
                                  color: '#4DA503',
                                  background: null,
                                  border: '1px solid #4DA503',
                                  borderRadius: 6
                                }}
                                startIcon={<DoneIcon />}
                                onClick={() => this.handleCompleteClick()}
                              >
                                Hoàn thành
                              </Button>
                            ) : null}
                            {requestDetail.attributes.status === 'Đang chờ' ? (
                              <Button
                                className="mr-5"
                                color="outlined"
                                style={{
                                  color: '#F70000',
                                  background: null,
                                  border: '1px solid #F70000',
                                  borderRadius: 6
                                }}
                                startIcon={<CloseIcon />}
                                onClick={() => this.handleCancelClick()}
                              >
                                Hủy
                              </Button>
                            ) : null}
                            {!requestDetail.attributes.paid ? (
                              <Button
                                color="outlined"
                                style={{
                                  color: '#1D4575',
                                  background: null,
                                  border: '1px solid #1D4575',
                                  borderRadius: 6
                                }}
                                startIcon={<PaymentIcon />}
                                className="mr-5"
                                onClick={() => this.handlePaymentClick()}
                              >
                                Thanh toán
                              </Button>
                            ) : null}
                            {requestDetail.attributes.status !== 'Hoàn thành' &&
                            requestDetail.attributes.status !== 'Đã hủy' &&
                            requestDetail.attributes.status !== 'Đang chờ' ? (
                              <Button
                                style={{
                                  color: '#FFCC00',
                                  background: null,
                                  border: '1px solid #FFCC00',
                                  borderRadius: 6
                                }}
                                startIcon={<ErrorIcon />}
                                onClick={this.toggle}
                              >
                                Khiếu nại
                              </Button>
                            ) : null}

                            <Modal
                              size="lg"
                              isOpen={this.state.modal}
                              toggle={this.toggle}
                              className={this.props.className}
                            >
                              <Form onSubmit={e => this.handleComplain(e)}>
                                <ModalHeader toggle={this.toggle}>
                                  Khiếu Nại
                                </ModalHeader>
                                <ModalBody>
                                  <FormGroup>
                                    <div>
                                      <Label for="exampleText">
                                        Nội dung khiếu nại
                                      </Label>
                                    </div>
                                    <div>
                                      <Input
                                        style={{ height: '200px' }}
                                        type="textarea"
                                        name="text"
                                        id="ipComplaint"
                                      />
                                    </div>
                                  </FormGroup>
                                </ModalBody>

                                <ModalFooter>
                                  <Button
                                    className="btn"
                                    color="primary"
                                    type="submit"
                                  >
                                    Xác nhận
                                  </Button>{' '}
                                  <Button
                                    color="secondary"
                                    onClick={this.toggle}
                                  >
                                    đóng
                                  </Button>
                                </ModalFooter>
                              </Form>
                            </Modal>
                          </ButtonGroup>
                        </Col>
                      </Row>
                    )}
                  </Container>
                </CardBody>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <CardHeader>
                  <h5 className="mb-0">Thông tin các bên</h5>
                </CardHeader>
                <CardBody>
                  <div className="text-left ml-3">Gia sư</div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="tutor"
                        src={
                          tutor.attributes.image
                            ? 'https://stormy-ridge-33799.herokuapp.com' +
                              tutor.attributes.image
                            : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                        }
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <div className="party-name">
                          {tutor.attributes.name
                            ? tutor.attributes.name
                            : 'Chưa cập nhâp tên'}
                        </div>
                      }
                      secondary={
                        tutor.attributes.city
                          ? tutor.attributes.city
                          : 'Chưa cập nhập Đia chỉ'
                      }
                    />
                  </ListItem>
                  <Divider color="middle" component="li" className="d-block" />
                  <div className="text-left ml-3 mt-3">Học sinh</div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="student"
                        src={
                          student.attributes.image
                            ? 'https://stormy-ridge-33799.herokuapp.com' +
                              student.attributes.image
                            : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                        }
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <div className="party-name">
                          {student.attributes.name
                            ? student.attributes.name
                            : 'Chưa cập nhâp tên'}
                        </div>
                      }
                      secondary={
                        student.attributes.name
                          ? student.attributes.name
                          : 'Chưa cập nhâp địa chỉ'
                      }
                    />
                  </ListItem>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {requestDetail.attributes.complaint ? (
            <Row className="mt-4">
              <Col sm={8} className="noMargin noPadding">
                <Card>
                  <CardHeader>
                    <p
                      style={{
                        paddingTop: '10px',
                        fontSize: '20px'
                      }}
                    >
                      Khiếu Nại
                    </p>
                  </CardHeader>
                  <CardBody>
                    <Container>
                      <Row>
                        <p>{requestDetail.attributes.complaint}</p>
                      </Row>
                    </Container>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          ) : null}
        </div>
      </div>
    );
  }
}

export default DetailRequestOfTutor;
