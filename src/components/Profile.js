/* eslint-disable jsx-a11y/anchor-is-valid */
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
  Badge,
  Card,
  Table
} from 'reactstrap';

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
      ],
      listCheck: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitChangeInfo = this.handleSubmitChangeInfo.bind(this);
    this.handleSubmitChangePassword = this.handleSubmitChangePassword.bind(
      this
    );
    this.handleSubmitChangeChecbox = this.handleSubmitChangeChecbox.bind(this);
  }

  componentDidMount() {
    // const { getListOutStandingTutor } = this.props;
    // getListOutStandingTutor((res) => {
    //   this.setState({
    //     listOutStandingTutor: res.data
    //   })
    // })
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
    // const { getUser } = this.props;
    // const userProfile = JSON.parse(localStorage.getItem('userToken'));
    // const userName = e.target.exampleName.value;
    // const userAddress = e.target.exampleAddress.value;
    // const userPhoneNumber = e.target.examplePhoneNumber.value;
    // const userIntro = e.target.exampleIntro.value;
    // const userPrice = e.target.examplePrice.value;
    // const userGender = e.target.exampleGender.value;
    // const { image } = this.state;
    // if (
    //   !userName ||
    //   !userAddress ||
    //   !userPhoneNumber ||
    //   !userIntro ||
    //   !userPrice ||
    //   !userGender ||
    //   image !== 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
    // ) {
    //   this.setState({
    //     kinAlert: 'missFill'
    //   });
    //   return;
    // }
    // const userUpdate = {
    //   name: userName,
    //   city: userAddress,
    //   gender: userGender,
    //   phone: userPhoneNumber,
    //   intro: userIntro,
    //   price: userPrice,
    //   image: image
    // };
    // let res = true;
    // fetch(
    //   'https://stormy-ridge-33799.herokuapp.com/users/' + userProfile.user_id,
    //   {
    //     method: '+',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       token: userProfile.token,
    //       user: userUpdate
    //     })
    //   }
    // )
    //   .then(response => {
    //     if (response.status !== 200) {
    //       res = false;
    //     }
    //     return response.json();
    //   })
    //   .then(response => {
    //     if (res) {
    //       this.setState({
    //         kinAlert: 'success',
    //         message: res.message
    //       });
    //       getUser(userProfile);
    //     } else {
    //       this.setState({
    //         kinAlert: 'failed',
    //         message: res.message
    //       });
    //     }
    //   });
  };

  //fetAPI changePassword
  handleSubmitChangePassword(e) {
    // const oldPassword = e.target.exampleOldPassword.value;
    // const newPassword = e.target.exampleNewPassword.value;
    // const confirmPassword = e.target.exampleComfirmNewPassword.value;
  }

  handleSubmitChangeChecbox(e) {}

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
    const { image, listSkill } = this.state;
    const mapListSkill = listSkill.map(Skill => {
      return (
        <FormGroup check>
          <Label check>
            <Input
              id={Skill.id}
              // checked={}
              onClick={e => this.handleSubmitChangeChecbox(e)}
              type="checkbox"
            />{' '}
            {Skill.attributes.name}
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
                    userProfile.attributes.image &&
                    image === 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                      ? 'https://stormy-ridge-33799.herokuapp.com/' +
                        userProfile.attributes.image
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
            <FormGroup check>
              <Input type="checkbox" checked="true" />
              <Label>Check me</Label>
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
