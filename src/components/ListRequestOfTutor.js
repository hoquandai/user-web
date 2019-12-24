/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Badge, Card, Media, Table, Button } from 'reactstrap';
import '../Request.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class ListRequestOfTutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listRequestToMe: [],
      listStudents: [],
      listRequestToOthers: [],
      listTutor: []
    };
  }

  handleClickDetailRequest(e) {
    const idContract = e.target.id;
    history.push('/detailContract/id:' + idContract);
    window.location.reload();
  }

  componentDidMount() {
    const userProfile = JSON.parse(localStorage.getItem('user'));
    let res = true;
    fetch(`https://stormy-ridge-33799.herokuapp.com/contracts`, {
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
          const listRTMeTemp = [];
          const listRTOthersTemp = [];
          const listStudentTemp = [];
          const listTutorTemp = [];

          response.data.forEach(contract => {
            if (String(contract.attributes.tutor_id) === userProfile.id) {
              let resStudent = true;
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
                    console.log(response.data.attributes);
                    listStudentTemp.push(response.data);
                    this.setState({
                      listRequestToMe: listRTMeTemp,
                      listRequestToOthers: listRTOthersTemp,
                      listStudents: listStudentTemp,
                      listTutor: listTutorTemp
                    });
                  }
                });
              listRTMeTemp.push(contract);
            }
            if (String(contract.attributes.student_id) === userProfile.id) {
              let resTutor = true;

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
                    resTutor = false;
                  }
                  return response.json();
                })
                .then(response => {
                  if (resTutor) {
                    listTutorTemp.push(response.data);
                  }
                  this.setState({
                    listRequestToMe: listRTMeTemp,
                    listRequestToOthers: listRTOthersTemp,
                    listStudents: listStudentTemp,
                    listTutor: listTutorTemp
                  });
                });
              listRTOthersTemp.push(contract);
            }
          });

          // this.setState({
          //   listRequestToMe: listRTMeTemp,
          //   listRequestToOthers: listRTOthersTemp,
          //   listStudents: listStudentTemp,
          //   listTutor: listTutorTemp
          // });
        }
        res = true;
        return true;
      });
  }

  render() {
    const {
      listRequestToMe,
      listRequestToOthers,
      listStudents,
      listTutor
    } = this.state;
    const mapListRequestToMe = listRequestToMe.map(request => {
      return (
        <tr>
          <td>
            <Badge pill color="success">
              {request.id ? request.id : 'Chưa có'}
            </Badge>
          </td>
          {listStudents.length > 0 &&
          listStudents.length === listRequestToMe.length ? (
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  // onClick={e => e.preventDefault()}
                >
                  <img
                    alt="avatar"
                    src={
                      listStudents[listRequestToMe.indexOf(request)].attributes
                        .image
                        ? 'https://stormy-ridge-33799.herokuapp.com' +
                          listStudents[listRequestToMe.indexOf(request)]
                            .attributes.image
                        : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                    }
                  />
                </a>
                <Media>
                  <span className="mb-0 text-sm">
                    {listStudents[listRequestToMe.indexOf(request)].attributes
                      .name
                      ? listStudents[listRequestToMe.indexOf(request)]
                          .attributes.name
                      : 'Chưa cập nhập tên'}
                  </span>
                </Media>
              </Media>
            </th>
          ) : null}

          <td>
            {request.attributes.price ? request.attributes.price : 'Chưa có'}
          </td>

          {request.attributes.status === 'Đang chờ' ? (
            <td>
              <Badge pill color="warning">
                Đang chờ
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đang học' ? (
            <td>
              <Badge pill color="primary">
                Đang học
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đang khiếu nại' ? (
            <td>
              <Badge pill color="danger">
                Đang khiếu nại
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Hoàn thành' ? (
            <td>
              <Badge pill color="success">
                Hoàn thành
              </Badge>
            </td>
          ) : null}
          {request.attributes.status === 'Đã hủy' ? (
            <td>
              <Badge pill color="danger">
                Đã hủy
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đã từ chối' ? (
            <td>
              <Badge pill color="success">
                Đã từ chối
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đã hoàn tiền' ? (
            <td>
              <Badge pill color="success">
                Đã hoàn tiền
              </Badge>
            </td>
          ) : null}

          {request.attributes.paid ? (
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
              id={request.id}
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

    const mapListRequestToOthers = listRequestToOthers.map(request => {
      return (
        <tr>
          <td>
            <Badge pill color="success">
              {request.id ? request.id : 'Chưa có'}
            </Badge>
          </td>
          {listTutor.length > 0 &&
          listTutor.length === listRequestToOthers.length ? (
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  // onClick={e => e.preventDefault()}
                >
                  <img
                    alt="avatar"
                    src={
                      listTutor[listRequestToOthers.indexOf(request)].attributes
                        .image
                        ? 'https://stormy-ridge-33799.herokuapp.com' +
                          listTutor[listRequestToOthers.indexOf(request)]
                            .attributes.image
                        : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                    }
                  />
                </a>
                <Media>
                  <span className="mb-0 text-sm">
                    {listTutor[listRequestToOthers.indexOf(request)].attributes
                      .name
                      ? listTutor[listRequestToOthers.indexOf(request)]
                          .attributes.name
                      : 'Chưa cập nhập tên'}
                  </span>
                </Media>
              </Media>
            </th>
          ) : null}
          <td>
            {request.attributes.price ? request.attributes.price : 'Chưa có'}
          </td>

          {request.attributes.status === 'Đang chờ' ? (
            <td>
              <Badge pill color="warning">
                Đang chờ
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đang học' ? (
            <td>
              <Badge pill color="primary">
                Đang học
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đang khiếu nại' ? (
            <td>
              <Badge pill color="danger">
                Đang khiếu nại
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Hoàn thành' ? (
            <td>
              <Badge pill color="success">
                Hoàn thành
              </Badge>
            </td>
          ) : null}
          {request.attributes.status === 'Đã hủy' ? (
            <td>
              <Badge pill color="danger">
                Đã hủy
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đã từ chối' ? (
            <td>
              <Badge pill color="success">
                Đã từ chối
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đã hoàn tiền' ? (
            <td>
              <Badge pill color="success">
                Đã hoàn tiền
              </Badge>
            </td>
          ) : null}

          {request.attributes.paid ? (
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
              id={request.id}
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
      <div>
        <div className="container">
          <div class="container instructors-info ml-5">
            <header class="entry-heading">
              <h2 class="entry-title">Danh sách học sinh yêu cầu</h2>
            </header>
            <Card className="mt-4">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr className="text-center">
                    <th scope="col">Mã Hợp Đồng</th>
                    <th scope="col">Học sinh</th>
                    <th scope="col">Phí</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="text-center">{mapListRequestToMe}</tbody>
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
                  <tr className="text-center">
                    <th scope="col">Mã Hợp Đồng</th>
                    <th scope="col">Gia sư</th>
                    <th scope="col">Phí</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="text-center">{mapListRequestToOthers}</tbody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ListRequestOfTutor;
