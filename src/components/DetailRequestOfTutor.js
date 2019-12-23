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
        id: '1',
        type: 'contract',
        attributes: {
          course: '10',
          subject: 'Toán',
          addr: '155 Lê Hồng Phong',
          schedule: 'T3, T4, T5',
          time: '50',
          status: 'Đang chờ',
          paid: false,
          tutor_id: 1,
          price: 300000,
          student_id: 2,
          created_at: '2019-12-22T11:24:27.731Z',
          updated_at: '2019-12-22T11:24:27.731Z'
        }
      },
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {}

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const { requestDetail } = this.state;

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
                                  onClick={() => this.handleCompleteClick()}
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
                                  onClick={() => this.handleCancelClick()}
                                >
                                  Từ chối
                                </Button>
                              </>
                            ) : null}
                            {requestDetail.attributes === 'Đang khiếu nại' ||
                            requestDetail.attributes === 'Đang học' ? (
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
                            {requestDetail.attributes.status !==
                            'Hoàn thành' ? (
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
                            {requestDetail.attributes.status === 'Đang chờ' ||
                            requestDetail.attributes.status === 'Đang học' ? (
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
                            {requestDetail.attributes.status !==
                            'Hoàn thành' ? (
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
                              <Form onSubmit={this.handleComplain}>
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
                                        id="exampleText"
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
                        src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/p720x720/77054448_2395267320735838_6975058001447092224_o.jpg?_nc_cat=111&_nc_ohc=ymh_DbtN4OoAQkwDf1RrSeDg0q4-1oBeo6MA8XgeGnd_SAjk9Ew_gx4Tw&_nc_ht=scontent.fsgn5-3.fna&oh=42f32e4b9ca1c08781385cf517a19443&oe=5EAB49FE"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <div className="party-name">Trương Phạm Nhật Tiến</div>
                      }
                      secondary="Xô Viết Nghệ Tĩnh-Bình Thạnh"
                    />
                  </ListItem>
                  <Divider color="middle" component="li" className="d-block" />
                  <div className="text-left ml-3 mt-3">Học sinh</div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="tutor"
                        src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-1/p100x100/53023841_1076299825887962_7777782565821218816_o.jpg?_nc_cat=103&_nc_ohc=7x2EufkFARsAQnn7u7koJ-vi8Nxyl55mC7R2dOQ4eBfXxrZwKutOzkhxg&_nc_ht=scontent.fsgn5-7.fna&oh=ab662d673e5d0665df05914441c0b64e&oe=5E6F6465"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <div className="party-name">Lê Thanh Thành Toại</div>
                      }
                      secondary="Xô Viết Nghệ Tĩnh-Bình Thạnh"
                    />
                  </ListItem>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DetailRequestOfTutor;
