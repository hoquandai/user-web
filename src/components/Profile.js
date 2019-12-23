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
  Table
} from 'reactstrap';
import fetch from 'cross-fetch';
import { changeInfo } from '../actions';

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
      listCheck: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitChangeChecbox = this.handleSubmitChangeChecbox.bind(this);
    this.handleChangeSkill = this.handleChangeSkill.bind(this);
  }

  componentDidMount() {
    // const { getListOutStandingTutor } = this.props;
    // getListOutStandingTutor((res) => {
    //   this.setState({
    //     listOutStandingTutor: res.data
    //   })
    // })
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

  render() {
    const userProfile = JSON.parse(localStorage.getItem('user'));
    const { image, listCheck } = this.state;
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
                    userProfile.attributes.image
                      ? `https://stormy-ridge-33799.herokuapp.com${userProfile.attributes.image}`
                      : image
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
                <tr>
                  <th scope="col">Người Thuê</th>
                  <th scope="col">Lớp</th>
                  <th scope="col">Môn học</th>
                  <th scope="col">Lịch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <img
                          alt="avatar"
                          src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/77054448_2395267320735838_6975058001447092224_o.jpg?_nc_cat=111&_nc_ohc=ymh_DbtN4OoAQkwDf1RrSeDg0q4-1oBeo6MA8XgeGnd_SAjk9Ew_gx4Tw&_nc_ht=scontent.fsgn5-3.fna&oh=41eee2b569203717d343b9da007cc565&oe=5EAF7B12"
                        />
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          Trương Phạm Nhật Tiến
                        </span>
                      </Media>
                    </Media>
                  </th>
                  <td>10</td>
                  <td>Toán</td>
                  <td>T2,T3,T5</td>
                </tr>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <img
                          alt="avatar"
                          src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/77054448_2395267320735838_6975058001447092224_o.jpg?_nc_cat=111&_nc_ohc=ymh_DbtN4OoAQkwDf1RrSeDg0q4-1oBeo6MA8XgeGnd_SAjk9Ew_gx4Tw&_nc_ht=scontent.fsgn5-3.fna&oh=41eee2b569203717d343b9da007cc565&oe=5EAF7B12"
                        />
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                      </Media>
                    </Media>
                  </th>
                  <td>10</td>
                  <td>Toán</td>
                  <td>T2,T3,T5</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </div>
      </div>
    );
  }
}

export default Profile;
