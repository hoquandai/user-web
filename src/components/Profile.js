/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import { Form, FormGroup, Button, Input, Label, Alert } from 'reactstrap';

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
      kinAlert: '',
      message: '',
      pKinAlert: '',
      pMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitChangeInfo = this.handleSubmitChangeInfo.bind(this);
    this.handleSubmitChangePassword = this.handleSubmitChangePassword.bind(
      this
    );
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
    // const userProfile = JSON.parse(localStorage.getItem('user'));
    // const userName = e.target.exampleName.value;
    // const userAddress = e.target.exampleAddress.value;
    // const phoneNumber = e.target.examplePhoneNumber.value;
    // const userIntro = e.target.exampleIntro.value;
    // const userPrice = e.target.examplePrice.value;
    // const { image } = this.state;
    // if (
    //   !userName &&
    //   !userAddress &&
    //   !phoneNumber &&
    //   !userIntro &&
    //   !userPrice &&
    //   image !== 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
    // ) {
    //   userProfile.name = userName;
    //   userProfile.city = userAddress;
    //   userProfile.phone = phoneNumber;
    //   userProfile.intro = userIntro;
    //   userProfile.price = userPrice;
    //   userProfile.image = image;
    //   let res = true;
    //   fetch(
    //     'https://stormy-ridge-33799.herokuapp.com/users/' + userProfile.id,
    //     {
    //       method: 'post',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         token: localStorage.getItem('userToken'),
    //         user: userProfile
    //       })
    //     }
    //   )
    //     .then(response => {
    //       if (response.status !== 200) {
    //         res = false;
    //       }
    //       return response.json();
    //     })
    //     .then(response => {
    //       if (res) {
    //         localStorage.setItem('user', JSON.stringify(userProfile));
    //         this.setState({
    //           kinAlert: 'success',
    //           message: res.message
    //         });
    //       } else {
    //         this.setState({
    //           kinAlert: 'failed',
    //           message: res.message
    //         });
    //       }
    //     });
    // }
    // return;
  };

  //fetAPI changePassword
  handleSubmitChangePassword(e) {
    // const oldPassword = e.target.exampleOldPassword.value;
    // const newPassword = e.target.exampleNewPassword.value;
    // const confirmPassword = e.target.exampleComfirmNewPassword.value;
  }

  renderAlert() {
    const { kinAlert, message } = this.state;
    return <AlertForm kinAlert={kinAlert} message={message}></AlertForm>;
  }

  renderAlertChangePassword() {
    const { pKinAlert, pMessage } = this.state;
    return <AlertForm kinAlert={pKinAlert} message={pMessage}></AlertForm>;
  }

  render() {
    const userProfile = JSON.parse(localStorage.getItem('user'));
    const { image } = this.state;
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
                    userProfile.attributes.image &&
                    image === 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                      ? userProfile.attributes.image
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
              {this.renderAlert}
              <Form onSubmit={e => this.handleSubmitChangeInfo(e)}>
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
                  <Label className="col-lg-3">Giá dạy học</Label>
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
                    type="textarea"
                    name="text"
                    id="exampleIntro"
                    placeholder={
                      userProfile.attributes.intro
                        ? userProfile.attributes.intro
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
          {this.renderAlertChangePassword}
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
        </div>
      </div>
    );
  }
}

export default Profile;
