import React from 'react';
import { Badge, Card, Media, Table, Button } from 'reactstrap';
import '../Request.css';

class ListRequestOfTutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div class="container instructors-info ml-5">
            <header class="entry-heading">
              <h2 class="entry-title">Danh sách học sinh yêu cầu</h2>
            </header>
            <Card className="mt-4">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Học sinh</th>
                    <th scope="col">Phí</th>
                    <th scope="col">Xác nhận</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col" />
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
                            src="https://stormy-ridge-33799.herokuapp.com/uploads/1bec4622bb21c83142a6adc2c68a4ab5"
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                        </Media>
                      </Media>
                    </th>
                    <td>160000d</td>
                    <td>
                      <Badge pill color="success">
                        Đã xác nhận
                      </Badge>
                    </td>
                    <td>
                      <Badge pill color="primary">
                        Đang học
                      </Badge>
                    </td>
                    <td>
                      <Badge pill color="danger">
                        Chưa thanh toán
                      </Badge>
                    </td>
                    <td className="text-right">
                      <Button color="info" className="detail-button">
                        Chi tiết
                      </Button>
                    </td>
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
                            src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg"
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                        </Media>
                      </Media>
                    </th>
                    <td>120000d</td>
                    <td>
                      <Badge pill color="warning">
                        Đang chờ
                      </Badge>
                    </td>
                    <td>
                      <Badge pill color="danger">
                        Đang khiếu nại
                      </Badge>
                    </td>
                    <td>
                      <Badge pill color="danger">
                        Chưa thanh toán
                      </Badge>
                    </td>
                    <td className="text-right">
                      <Button color="info" className="detail-button">
                        Chi tiết
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
          <div class="container instructors-info ml-5">
            <header class="entry-heading">
              <h2 class="entry-title">Danh sách thuê gia sư</h2>
            </header>

            <Card className="mt-4">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Học sinh</th>
                    <th scope="col">Phí</th>
                    <th scope="col">Xác nhận</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col" />
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
                            src="https://stormy-ridge-33799.herokuapp.com/uploads/1bec4622bb21c83142a6adc2c68a4ab5"
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                        </Media>
                      </Media>
                    </th>
                    <td>160000d</td>
                    <td>
                      <Badge pill color="success">
                        Đã xác nhận
                      </Badge>
                    </td>
                    <td>
                      <Badge pill color="primary">
                        Đang học
                      </Badge>
                    </td>
                    <td>
                      <Badge pill color="danger">
                        Chưa thanh toán
                      </Badge>
                    </td>
                    <td className="text-right">
                      <Button color="info" className="detail-button">
                        Chi tiết
                      </Button>
                    </td>
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
                            src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg"
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                        </Media>
                      </Media>
                    </th>
                    <td>120000d</td>
                    <td>
                      <Badge pill color="warning">
                        Đang chờ
                      </Badge>
                    </td>
                    <td>
                      <Badge pill color="danger">
                        Đang khiếu nại
                      </Badge>
                    </td>
                    <td>
                      <Badge pill color="danger">
                        Chưa thanh toán
                      </Badge>
                    </td>
                    <td className="text-right">
                      <Button color="info" className="detail-button">
                        Chi tiết
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ListRequestOfTutor;
