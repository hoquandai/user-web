/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import {
  Form,
  FormGroup,
  Button,
  Input,
  Label,
  Alert,
  Media,
  Card,
  Table,
  Badge
} from 'reactstrap';
import fetch from 'cross-fetch';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function AlertForm(props) {
  const { kindAlert, message } = props;
  if (kindAlert === 'failed') {
    return (
      <Alert color="danger">
        Có lỗi xảy ra!
        <p>{message};</p>
      </Alert>
    );
  }
  if (kindAlert === 'success') {
    return <Alert color="success">{message}</Alert>;
  }
  if (kindAlert === 'missFill') {
    return (
      <Alert color="danger">Vui lòng điền đầy đủ thông tin và thử lại!</Alert>
    );
  }
  return null;
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png',
      kindAlert: '',
      message: '',
      pKindAlert: '',
      pMessage: '',
      listSkill: [],
      listCheck: [],
      listContract: [],
      listStudent: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitChangeChecbox = this.handleSubmitChangeChecbox.bind(this);
    this.handleChangeSkill = this.handleChangeSkill.bind(this);
  }

  componentDidMount() {
    const userProfile = JSON.parse(localStorage.getItem('user'));
    if (userProfile.attributes.image) {
      this.setState({
        image: userProfile.attributes.image
      });
    }
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

          var listCheckTemp = [];
          response.data.map(Skill => {
            var b = [
              { id: Skill.id, isChecked: false, name: Skill.attributes.name }
            ];
            listCheckTemp.push(b);
          });

          response.data.map(Skill => {
            let i = 0;
            for (i = 0; i < userProfile.attributes.skills.length; i++) {
              if (Skill.id === userProfile.attributes.skills[i]) {
                listCheckTemp[i][0].isChecked = true;
                break;
              }
            }
          });

          this.setState({
            listCheck: listCheckTemp
          });
        }
        res = true;
      });

    fetch(
      `https://stormy-ridge-33799.herokuapp.com/users/${String(
        userProfile.id
      )}/contracts`,
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
          res = false;
        }
        return response.json();
      })
      .then(response => {
        console.log(res);
        if (res) {
          console.log('---------------oke' + response.data);
          const listContractTemp = [];
          const listStudentTemp = [];

          response.data.forEach(contract => {
            let resStudent = true;
            console.log(response.data);
            fetch(
              'https://stormy-ridge-33799.herokuapp.com/users/' +
                String(contract.attributes.student_id),
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
                  resStudent = false;
                }
                return response.json();
              })
              .then(response => {
                if (resStudent) {
                  listStudentTemp.push(response.data);
                  this.setState({
                    listContract: listContractTemp,
                    listStudent: listStudentTemp
                  });
                }
              });
            listContractTemp.push(contract);
          });

          this.setState({
            listContract: response.data
          });
        }
        res = true;
      });
  }

  handleChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({ image: reader.result });
    };
  }

  handleSubmitChangeInfo = e => {
    e.preventDefault();
    const { changeInfo } = this.props;
    const userProfile = JSON.parse(localStorage.getItem('userToken'));
    const userName = e.target.exampleName.value;
    const userAddress = e.target.exampleAddress.value;
    const userPhoneNumber = e.target.examplePhoneNumber.value;
    const userIntro = e.target.exampleIntro.value;
    const userPrice = e.target.examplePrice.value;
    const userGender = e.target.exampleGender.value;
    const { image } = this.state;
    if (
      !userName ||
      !userAddress ||
      !userPhoneNumber ||
      !userIntro ||
      !userPrice ||
      !userGender ||
      image === 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
    ) {
      this.setState({
        kindAlert: 'missFill'
      });
      return;
    }
    const userUpdate = {
      name: userName,
      city: userAddress,
      gender: userGender,
      phone: userPhoneNumber,
      desc: userIntro,
      price: userPrice,
      image_data_uri: image
    };

    changeInfo(userProfile.token, userProfile.user_id, userUpdate);
    this.setState({
      kindAlert: 'success',
      message: 'Thay đổi thành công'
    });
  };

  //fetAPI changePassword
  handleSubmitChangePassword(e) {
    e.preventDefault();
    const userProfile = JSON.parse(localStorage.getItem('userToken'));
    const oldPassword = e.target.exampleOldPassword.value;
    const newPassword = e.target.exampleNewPassword.value;
    const confirmPassword = e.target.exampleComfirmNewPassword.value;
    const { changeInfo } = this.props;

    if (!oldPassword || !newPassword || !confirmPassword) {
      this.setState({
        pKindAlert: 'missFill'
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      this.setState({
        pKindAlert: 'failed',
        message: 'Mật khẩu xác nhận không trùng!'
      });
      return;
    }

    var newUser = {
      password: newPassword
    };

    changeInfo(userProfile.token, userProfile.user_id, newUser);

    this.setState({
      pKindAlert: 'success',
      pMessage: 'Thay đổi thành công'
    });
  }

  handleSubmitChangeChecbox(e) {
    e.preventDefault();
    const newListCheck = this.state.listCheck;
    const id = e.target.id;

    for (var i = 0; i < newListCheck.length; i++) {
      if (newListCheck[i][0].id === id) {
        newListCheck[i][0].isChecked = !newListCheck[i][0].isChecked;
        break;
      }
    }

    this.setState({
      listCheck: newListCheck
    });
  }

  handleChangeSkill(e) {
    e.preventDefault();
    const userProfile = JSON.parse(localStorage.getItem('userToken'));
    const { changeInfo } = this.props;
    const { listCheck } = this.state;
    const listSkillUpdate = [];

    for (var i = 0; i < listCheck.length; i++) {
      if (listCheck[i][0].isChecked) {
        listSkillUpdate.push(listCheck[i][0].id);
      }
    }

    var newUser = {
      skills: listSkillUpdate
    };

    changeInfo(userProfile.token, userProfile.user_id, newUser);
  }

  renderAlert() {
    const { kindAlert, message } = this.state;
    return (
      <AlertForm
        kindAlert={kindAlert}
        message={message ? message : 'none'}
      ></AlertForm>
    );
  }

  renderAlertChangePassword() {
    const { pKindAlert, pMessage } = this.state;
    return <AlertForm kindAlert={pKindAlert} message={pMessage}></AlertForm>;
  }

  handleClickDetailRequest(e) {
    const idContract = e.target.id;
    history.push('/detailContract/id:' + idContract);
    window.location.reload();
  }

  render() {
    const userProfile = JSON.parse(localStorage.getItem('user'));
    const { image, listCheck, listContract, listStudent } = this.state;
    const mapListSkill = listCheck.map(Skill => {
      return (
        <FormGroup check>
          <Label check>
            <Input
              id={Skill[0].id}
              // checked={}
              onChange={e => this.handleSubmitChangeChecbox(e)}
              type="checkbox"
              checked={Skill[0].isChecked}
            />{' '}
            {Skill[0].name}
          </Label>
        </FormGroup>
      );
    });

    const mapListContract = listContract.map(contract => {
      console.log(listContract.length);
      return (
        <tr>
          <td>
            <Badge pill color="success">
              {contract.id ? contract.id : 'Chưa có'}
            </Badge>
          </td>
          {listStudent.length > 0 &&
          listStudent.length === listContract.length ? (
            <th scope="row">
              <Media className="align-items-center">
                <a className="avatar rounded-circle mr-3">
                  <img
                    alt="avatar"
                    src={
                      listStudent[listContract.indexOf(contract)].attributes
                        .image
                        ? 'https://stormy-ridge-33799.herokuapp.com' +
                          listStudent[listContract.indexOf(contract)].attributes
                            .image
                        : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                    }
                  />
                </a>
                <Media>
                  <span className="mb-0 text-sm">
                    {listStudent[listContract.indexOf(contract)].attributes.name
                      ? listStudent[listContract.indexOf(contract)].attributes
                          .name
                      : 'Chưa cập nhập tên'}
                  </span>
                </Media>
              </Media>
            </th>
          ) : null}

          <td>
            {contract.attributes.subject
              ? contract.attributes.subject
              : 'Chưa có'}
          </td>

          <td>
            {contract.attributes.schedule
              ? contract.attributes.schedule
              : 'Chưa có'}
          </td>

          {contract.attributes.status === 'Đang chờ' ? (
            <td>
              <Badge pill color="warning">
                Đang chờ
              </Badge>
            </td>
          ) : null}

          {contract.attributes.status === 'Đang học' ? (
            <td>
              <Badge pill color="primary">
                Đang học
              </Badge>
            </td>
          ) : null}

          {contract.attributes.status === 'Đang khiếu nại' ? (
            <td>
              <Badge pill color="danger">
                Đang khiếu nại
              </Badge>
            </td>
          ) : null}

          {contract.attributes.status === 'Hoàn thành' ? (
            <td>
              <Badge pill color="success">
                Hoàn thành
              </Badge>
            </td>
          ) : null}
          {contract.attributes.status === 'Đã hủy' ? (
            <td>
              <Badge pill color="danger">
                Đã hủy
              </Badge>
            </td>
          ) : null}

          {contract.attributes.status === 'Đã từ chối' ? (
            <td>
              <Badge pill color="success">
                Đã từ chối
              </Badge>
            </td>
          ) : null}

          {contract.attributes.status === 'Đã hoàn tiền' ? (
            <td>
              <Badge pill color="success">
                Đã hoàn tiền
              </Badge>
            </td>
          ) : null}

          {contract.attributes.paid ? (
            <td>
              <Badge pill color="success">
                Đã thanh toán
              </Badge>
            </td>
          ) : (
            <td>
              <Badge pill color="danger">
                Chưa thanh toán
              </Badge>
            </td>
          )}

          <td className="text-right">
            <Button
              id={contract.id}
              color="info"
              className="detail-button"
              onClick={e => this.handleClickDetailRequest(e)}
            >
              Chi tiết
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <div className="container">
        <div class="container instructors-info ml-5">
          <header class="entry-heading">
            <h2 class="entry-title">Thông tin cá nhân</h2>
          </header>
          <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="text-center">
                <img
                  width="250"
                  height="250"
                  src={
                    image
                      ? 'https://stormy-ridge-33799.herokuapp.com' +
                        String(image)
                      : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                  }
                  class=" rounded-circle"
                  alt="avatar"
                ></img>
                <div>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    class="inputfile"
                    onChange={this.handleChange}
                  />
                  <label for="file">Chọn ảnh</label>
                </div>
              </div>
            </div>
            {/* edit form column */}
            <div class="col-md-8 col-sm-6 col-xs-12 personal-info">
              {/* Hiển thị alert ở đây */}

              <Form onSubmit={e => this.handleSubmitChangeInfo(e)}>
                {this.renderAlert()}
                <FormGroup>
                  <Label className="col-lg-3">Họ Tên</Label>
                  <Input
                    placeholder={
                      userProfile.attributes.name
                        ? userProfile.attributes.name
                        : null
                    }
                    name="userName"
                    id="exampleName"
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="col-lg-3">Nơi ở</Label>
                  <Input
                    name="userAddress"
                    id="exampleAddress"
                    placeholder={
                      userProfile.attributes.city
                        ? userProfile.attributes.city
                        : null
                    }
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="col-lg-3">Giới tính</Label>
                  <Input
                    name="userGender"
                    id="exampleGender"
                    placeholder={
                      userProfile.attributes.gender
                        ? userProfile.attributes.gender
                        : null
                    }
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="col-lg-3">Số điện thoại</Label>
                  <Input
                    placeholder={
                      userProfile.attributes.phone
                        ? userProfile.attributes.phone
                        : null
                    }
                    type="number"
                    name="userPhoneNumber"
                    id="examplePhoneNumber"
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="col-lg-4">Giá dạy học (Theo Giờ)</Label>
                  <Input
                    type="number"
                    name="Price"
                    id="examplePrice"
                    placeholder={
                      userProfile.attributes.price
                        ? userProfile.attributes.price
                        : null
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Tự Giới Thiệu</Label>
                  <Input
                    style={{ height: '200px' }}
                    type="textarea"
                    name="text"
                    id="exampleIntro"
                    placeholder={
                      userProfile.attributes.desc
                        ? userProfile.attributes.desc
                        : null
                    }
                  />
                </FormGroup>
                <div className="ViewProfile">
                  <Button variant="primary" type="submit">
                    Cập Nhập
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>

        <div className="container instructors-info ml-5">
          <header class="entry-heading">
            <h2 class="entry-title">Mật khẩu</h2>
          </header>
          {this.renderAlertChangePassword()}
          <Form onSubmit={e => this.handleSubmitChangePassword(e)}>
            <FormGroup>
              <Label className="col-lg-3">Mật khẩu</Label>
              <Input type="password" id="exampleOldPassword" />
            </FormGroup>
            <FormGroup>
              <Label className="col-lg-3">Mật khẩu Mới</Label>
              <Input type="password" id="exampleNewPassword" />
            </FormGroup>
            <FormGroup>
              <Label className="col-lg-3">Xác nhận mật khẩu</Label>
              <Input type="password" id="exampleComfirmNewPassword" />
            </FormGroup>
            <div className="ViewProfile">
              <Button variant="primary" type="submit">
                Cập Nhập
              </Button>
            </div>
          </Form>
        </div>

        <div className="container instructors-info ml-5">
          <header class="entry-heading">
            <h2 class="entry-title">Danh sách kỹ năng</h2>
          </header>
          <Form>
            <FormGroup tag="fieldset">{mapListSkill}</FormGroup>
            <div className="ViewProfile">
              <Button
                variant="primary"
                onClick={e => this.handleChangeSkill(e)}
              >
                Cập Nhập
              </Button>
            </div>
          </Form>
        </div>
        <div className="container instructors-info ml-5">
          <header class="entry-heading">
            <h2 class="entry-title">Lịch sử dạy</h2>
          </header>
          <Card className="mt-4">
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr className="text-center">
                  <th scope="col">Mã HD</th>
                  <th scope="col">Người thuê</th>
                  <th scope="col">Môn học</th>
                  <th scope="col">Lịch</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Thanh toán</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-center">{mapListContract}</tbody>
            </Table>
          </Card>
        </div>
      </div>
    );
  }
}

export default Profile;
