/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap';

class Profile extends React.Component {
  handleSubmitChangeInfo = e => {
    return;
  };

  render() {
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
                  src="images/1.jpg"
                  class=" rounded-circle"
                  alt="avatar"
                ></img>
                <div>
                  <input type="file" name="file" id="file" class="inputfile" />
                  <label for="file">Chọn ảnh</label>
                </div>
              </div>
            </div>
            {/* edit form column */}
            <div class="col-md-8 col-sm-6 col-xs-12 personal-info">
              {/* Hiển thị alert ở đây */}

              <Form onSubmit={e => this.handleSubmitChangeInfo(e)}>
                <FormGroup>
                  <Label className="col-lg-3">Họ Tên</Label>
                  <Input
                    name="userName"
                    id="exampleName"
                    placeholder="Họ tên"
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="col-lg-3">Nơi ở</Label>
                  <Input
                    name="userAddress"
                    id="exampleAddress"
                    placeholder="Đia chỉ"
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="col-lg-3">Số điện thoại</Label>
                  <Input
                    type="number"
                    name="userPhoneNumber"
                    id="examplePhoneNumber"
                    placeholder="Số điện thoại"
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
            <h2 class="entry-title">Danh sách kỹ năng</h2>
          </header>
        </div>
      </div>
    );
  }
}

export default Profile;
